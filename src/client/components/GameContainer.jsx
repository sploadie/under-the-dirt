import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { isArray, isPlainObject } from 'lodash'
import util from 'util'

import Game from './Game.jsx'

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
  }

  render() {
    console.log(this.props)
    const {
      startBoard,
      solution,
    } = this.state
    return (
      <div className="game-container">
        {isArray(solution) && <Game board={solution} disabled />}
        {isPlainObject(solution) && <h3>{solution.message}</h3>}
        {isArray(startBoard) && <Game board={startBoard} onMove={this.onMove} />}
      </div>
    )
  }
}
