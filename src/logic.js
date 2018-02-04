"use strict";
import { isArray, isPlainObject, isEqual, findIndex } from 'lodash'

const directionIncrement = {
  up: (pos, side) => pos - side,
  down: (pos, side) => pos + side,
  left: (pos, side) => pos - 1,
  right: (pos, side) => pos + 1,
}

function doMove(boardState, move) {

  const gridSize = Math.sqrt(boardState.length);
  if (gridSize !== Math.floor(gridSize)) {
  console.error(`Board has size ${boardState.length}??`)
  }

  if (move.pos >= boardState.length) {
    console.error("[UNKNOWN ACTION]");
    return boardState;
  }

  const newBoard = boardState.slice();
  let pos = move.pos;

  const eats = {
    w: 'f',
    g: 'w',
    f: 'g',
  }

  for (let i = 1; i < gridSize; i++) {
    pos = directionIncrement[move.direction](pos, gridSize);
    if (newBoard[pos] != eats[move.element]) {
      break;
    }
    newBoard[pos] = move.element;
  }

  return newBoard;
}

function isSolved(board, solution) {
  if (isArray(solution) && isEqual(board, solution)) {
    return true
  }
  else if (isPlainObject(solution)) {
    if (solution.all && findIndex(board, t => t !== solution.all) === -1) {
      return true
    }
    else if (solution.none && findIndex(board, t => t === solution.none) === -1) {
      return true
    }
  }
	return false
}

export default { doMove, isSolved }
