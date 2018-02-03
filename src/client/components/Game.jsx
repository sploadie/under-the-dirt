import React from 'react';
import { Image } from 'semantic-ui-react'
import { map } from 'lodash'

const elementImageUrl = {
  w: '/assets/images/water.png',
  f: '/assets/images/fire.png',
  g: '/assets/images/grass.png',
}

const elementArrowImageUrl = {
  w: '/assets/images/water_arrow.png',
  f: '/assets/images/fire_arrow.png',
  g: '/assets/images/grass_arrow.png',
}

const eats = {
  w: 'f',
  g: 'w',
  f: 'g',
}

const directionIncrement = {
  up: (pos, side) => pos - side,
  down: (pos, side) => pos + side,
  left: (pos, side) => pos - 1,
  right: (pos, side) => pos + 1,
}

const Tile = ({ element, size, x, y }) => (
  <Image
    src={elementImageUrl[element]}
    className={`element element-${element}`}
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
    }}
  />
)

const MoveButton = ({ onMove, board, element, side, size, pos, direction, x, y }) => {
  console.log(element, eats[element], direction, pos, directionIncrement[direction](pos, side), board[directionIncrement[direction](pos, side)])
  if (eats[element] !== board[directionIncrement[direction](pos, side)]) {
    return null
  }
  return (
    <a onClick={() => onMove({ element, pos, direction })}>
      <Image
        src={elementArrowImageUrl[element]}
        className={`move-button move-${direction} element-${element}`}
        style={{
          width: size,
          height: size,
          left: x,
          top: y,
        }}
      />
    </a>
  )
}

const Game = ({ board, solved, onMove, disabled }) => {
  const side = Math.sqrt(board.length)
  if (side !== Math.floor(side)) {
    console.error(`Board has size ${board.length}??`)
  }

  const size = 48

  const tiles = []
  let pos = 0
  for (let x = 0; x < side; x += 1) {
    for (let y = 0; y < side; y += 1) {
      tiles.push(<Tile
        key={`tile-${x}-${y}`}
        element={board[(y * side) + x]}
        size={size}
        x={(x + 1) * size}
        y={(y + 1) * size}
      />)
    }
  }

  if (!disabled && !solved) {
    for (let k = 0; k < side; k += 1) {
      tiles.push(<MoveButton
        key={`move-${k}-down`}
        onMove={onMove}
        board={board}
        side={side}
        element={board[k]}
        size={size}
        pos={k}
        direction="down"
        x={(k + 1) * size}
        y={0}
      />)
      tiles.push(<MoveButton
        key={`move-${k}-up`}
        onMove={onMove}
        board={board}
        side={side}
        element={board[k + ((side - 1) * side)]}
        size={size}
        pos={k + ((side - 1) * side)}
        direction="up"
        x={(k + 1) * size}
        y={(side + 1) * size}
      />)
      tiles.push(<MoveButton
        key={`move-${k}-right`}
        onMove={onMove}
        board={board}
        side={side}
        element={board[k * side]}
        size={size}
        pos={k * side}
        direction="right"
        x={0}
        y={(k + 1) * size}
      />)
      tiles.push(<MoveButton
        key={`move-${k}-left`}
        onMove={onMove}
        board={board}
        side={side}
        element={board[(k * side) + side - 1]}
        size={size}
        pos={(k * side) + side - 1}
        direction="left"
        x={(side + 1) * size}
        y={(k + 1) * size}
      />)
    }
  }

  return (
    <div className={`game-board ${disabled ? 'disabled' : 'enabled'}`} style={{ width: (side + 2) * size, height: (side + 2) * size }}>
      {tiles}
    </div>
  )
}

export default Game
