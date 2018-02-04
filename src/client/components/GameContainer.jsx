import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Button, Icon, Image } from 'semantic-ui-react'
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

function Clue() {
  return (<div className="clue">
    <Image src="/assets/images/grass.gif" />
    <Image src="/assets/images/big_grass_arrow.png" />
    <Image src="/assets/images/water.gif" />
    <Image src="/assets/images/big_water_arrow.png" />
    <Image src="/assets/images/fire.gif" />
    <Image src="/assets/images/big_fire_arrow.png" />
    <Image src="/assets/images/grass.gif" />
  </div>)
}

function LevelDirectory({ level, fetchLevel }) {
  const buttonGroups = []
  let buttons = []

  each(maps, (map, index) => {
    if (index !== 0 && (index - 1) % 10 !== 0 || index === 1) { buttons.push(<Button.Or key={`or-${index}`} text=">" />) }
    buttons.push(<Button key={`map-${index}`} color={level === index ? 'green' : 'grey'} content={`${index}`} onClick={() => fetchLevel(index)} />)
    if (index !== 0 && index % 10 === 0) {
      buttonGroups.push(<Button.Group key={`${index}-group`}>{buttons}</Button.Group>)
      buttons = []
    }
  })
  if (buttons.length !== 0) {
    buttonGroups.push(<Button.Group key="last">{buttons}</Button.Group>)
  }

  return (<div className="level-directory">
    <h2>Level Directory</h2>
    {buttonGroups}
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
    this.setState({ board: this.state.startBoard.slice(), solved: false, moves: [] })
  }

  render() {
    console.log(this.props)
    const {
      loading,
      level,
      board,
      moves,
      solution,
      solved,
    } = this.state

    if (loading) {
      return <h3>Loading...</h3>
    }

    return (
      <div className="game-container">
        <Clue />
        <div className="center-container">
          {isArray(board) && <Game board={board} solved={solved} onMove={this.onMove} />}
          {isArray(solution.board) && <Game board={solution.board} disabled />}
          {solved && maps.length > level + 1 ? <Button style={{ marginBottom: '15px' }} size="massive" color="green" icon labelPosition='right' onClick={() => this.fetchLevel(level + 1)}>
            Next Level
            <Icon name='arrow circle right' />
          </Button> : <h2 style={{ height: '72px', margin: '0px', opacity: maps.length > level + 1 ? 0 : 1 }}>No More Levels</h2>}
          {isPlainObject(solution) && <h1 style={{ color: 'yellow', marginTop: '0px', marginBottom: '0px' }}>{solution.message}</h1>}
          {<h2>{moves.length}{solution.min_move && `/${solution.min_move}`} move{moves.length !== 1 && 's'}</h2>}
          <Button icon labelPosition='left' onClick={this.resetBoard} style={{ opacity: solved ? 0.25 : 1 }}>
            <Icon name='repeat' />
            Reset
          </Button>
          {/* <h2 style={{ opacity: 0 }}>You can't see this</h2> */}
        </div>
        <LevelDirectory level={level} fetchLevel={this.fetchLevel} />
      </div>
    )
  }
}
