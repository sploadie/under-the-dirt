"use strict";

const directionIncrement = {
	up: (pos, side) => pos - side,
	down: (pos, side) => pos + side,
	left: (pos, side) => pos - 1,
	right: (pos, side) => pos + 1,
}

function doMove(boardSate, move) {

	const gridSize = Math.sqrt(boardSate.length);

	if (move.pos > (4 * (gridSize - 1))) {

		console.log("[UNKNOWN ACTION]");

		return boardSate;

	}

	const newBoard = boardSate.slice();
	let pos = move.pos;

	switch (move.element) {
		case 'w':
			for (let i = 1; i < gridSize; i++) {
				pos = directionIncrement[move.direction](pos, gridSize);
				if (newBoard[pos] != 'f') {
					break;
				}
				newBoard[pos] = 'w';
			}
			break;
		case 'g':
			for (let i = 1; i < gridSize; i++) {
				pos = directionIncrement[move.direction](pos, gridSize);
				if (newBoard[pos] != 'w') {
					break;
				}
				newBoard[pos] = 'g';
			}
			break;
		case 'f':
			for (let i = 1; i < gridSize; i++) {
				pos = directionIncrement[move.direction](pos, gridSize);
				if (newBoard[pos] != 'g') {
					break;
				}
				newBoard[pos] = 'f';
			}
			break;
	}

	return newBoard;

}

const boardSate = [
	'w', 'w', 'w',
	'w', 'w', 'g',
	'w', 'f', 'f'
];

const move = {
	element: 'w',
	pos: 1,
	direction: 'down'
}

console.log(doMove(boardSate, move));
