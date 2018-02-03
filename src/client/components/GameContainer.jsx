import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Button, Icon } from 'semantic-ui-react'
import { isArray, isPlainObject, each } from 'lodash'
import util from 'util'

import Game from './Game.jsx'
import logic from '../../logic.js'
const { doMove, isSolved } = logic
import maps from '../../maps.js'

// {
//   startBoard: [
//     'w','f','f',
//     'f','f','f',
//     'f','f','g',
//   ],
//   solution: {
//     message: "Drown everything...",
//     all: 'w'
//   }
// }

function bogusFetch(level) {
  return new Promise(ok => ok(maps[level]))
}

function LevelDirectory({ fetchLevel }) {
  const buttons = []

  each(maps, (map, index) => {
    if (index !== 0) { buttons.push(<Button.Or text=">" />) }
    buttons.push(<Button content={`${index}`} onClick={() => fetchLevel(index)} />)
  })

  return (<div className="level-directory">
    <h2>Level Directory</h2>
    <Button.Group>
      {buttons}
    </Button.Group>
  </div>)
}

export default class GameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: props.level || 0,
      loading: true,
      solved: false,
      moves: [],
    }
    this.fetchLevel = this.fetchLevel.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
    this.onMove = this.onMove.bind(this)
    this.checkSolution = this.checkSolution.bind(this)
  }

  fetchLevel(level) {
    this.setState({ loading: true }, () =>
    bogusFetch(level).then(({startBoard, solution}) => this.setState({
      level,
      startBoard,
      solution,
      board: startBoard.slice(),
      solved: false,
      moves: [],
      loading: false,
    })))
  }

  componentDidMount() {
    this.fetchLevel(this.state.level)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.level && nextProps.level !== this.state.level) {
      this.fetchLevel(this.state.level)
    }
  }

  onMove(move) {
    console.log(`Player chose move ${util.inspect(move, { depth: null })}!`)

    let solved = false
    const newBoard = doMove(this.state.board, move)

    const moves = this.state.moves.slice()
    moves.push(move)
    this.checkSolution(newBoard)
    this.setState({ board: newBoard, moves })
  }

  checkSolution(board) {
    const { level, moves, solution } = this.state
    if (isSolved(board, solution)) {
      fetch(`/scoreboard`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ level, moves, solution, username: this.props.match.username }),
      })
      this.setState({ solved: true })
    }
  }

  resetBoard() {
    this.setState({ board: this.state.startBoard.slice(), moves: [] })
  }

  render() {
    console.log(this.props)
    const {
      loading,
      level,
      board,
      solution,
      solved,
    } = this.state

    if (loading) {
      return <h3>Loading...</h3>
    }

    return (
      <div className="game-container">
        <LevelDirectory fetchLevel={this.fetchLevel} />
        <h2>{solved ? 'Harmony has been achieved' : 'There is no harmony...'}</h2>
        {solved && maps.length > level + 1 ? <Button icon labelPosition='right' onClick={() => this.fetchLevel(level + 1)}>
          Next Level
          <Icon name='arrow circle right' />
        </Button> : <Button disabled style={{ opacity: 0 }} content={maps.length > level + 1 ? 'Waiting for Harmony' : 'Final Harmony'} />}
        {isArray(solution) && <Game board={solution} disabled />}
        {isPlainObject(solution) && <h3>{solution.message}</h3>}
        <Button icon labelPosition='left' onClick={this.resetBoard}>
          <Icon name='repeat' />
          Reset
        </Button>
        {isArray(board) && <Game board={board} onMove={this.onMove} />}
      </div>
    )
  }
}
