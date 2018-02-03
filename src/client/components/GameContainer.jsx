import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { isArray, isPlainObject } from 'lodash'
import util from 'util'

import Game from './Game.jsx'
import logic from '../../logic.js'

function bogusFetch() {
  return new Promise(ok => ok({
    startBoard: [
      'w','f','f',
      'f','f','f',
      'f','f','f',
    ],
    solution: [
      'w','w','w',
      'w','w','w',
      'w','w','w',
    ],
  }))
}

export default class GameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: props.level || 1,
      loading: true,
    }
    this.fetchLevel = this.fetchLevel.bind(this)
    this.onMove = this.onMove.bind(this)
  }

  fetchLevel(level) {
    this.setState({ loading: true })
    bogusFetch(level).then(({startBoard, solution}) => this.setState({
      startBoard,
      board: startBoard.slice(),
      solution,
      loading: false,
    }))
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
    this.setState({ board: logic(this.state.board, move) })
  }

  render() {
    console.log(this.props)
    const {
      loading,
      board,
      solution,
    } = this.state
    if (loading) {
      return <h3>Loading...</h3>
    }
    return (
      <div className="game-container">
        {isArray(solution) && <Game board={solution} disabled />}
        {isPlainObject(solution) && <h3>{solution.message}</h3>}
        {isArray(board) && <Game board={board} onMove={this.onMove} />}
      </div>
    )
  }
}
