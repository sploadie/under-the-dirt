const levels = [
	{
		//EASY 1 : Stifle the flames
		startBoard: [
		'w', 'g', 'g',
		'w', 'f', 'f',
		'w', 'g', 'g',
		],
		solution: {
			message: 'Click on the Arrows to play',
			min_move: 1,
			none: 'f'
		}
	},
	{
		//EASY 3 : Burn the trees
		startBoard: [
		'f', 'w', 'g', 'g', 'g',
		'g', 'w', 'g', 'w', 'g',
		'g', 'w', 'g', 'w', 'g',
		'g', 'w', 'w', 'w', 'g',
		'g', 'g', 'g', 'g', 'g',
		],
		solution: {
			message: 'Spread the fire, build an Empire',
			min_move: 5,
			none: 'g'
		}
	},

	{
		//EASY 2 : Build a forest
		startBoard: [
		'g', 'w', 'w', 'w', 'g',
		'w', 'f', 'f', 'f', 'w',
		'w', 'f', 'f', 'f', 'w',
		'w', 'f', 'f', 'f', 'w',
		'g', 'w', 'w', 'w', 'g',
		],
		solution: {
			message: 'Plant trees on Water to make the Forest grow',
			min_move: 4,
			none: 'w'
		}
	},
	{
		//EASY 6 : Build the forest
		startBoard: [
		'w', 'f', 'f',
		'f', 'f', 'f',
		'f', 'f', 'g',
		],
		solution: {
			message: 'Stifle the flames, harvest a forest',
			min_move: 8,
			all: 'g'
		}
	},
	{
		//EASY 2 : Build a forest
		startBoard: [
		'f', 'f', 'f', 'f', 'f',
		'g', 'g', 'g', 'g', 'f',
		'g', 'g', 'g', 'g', 'f',
		'g', 'g', 'g', 'g', 'f',
		'f', 'f', 'g', 'f', 'f',
		],
		solution: {
			message: 'Burn everything',
			min_move: 4,
			all: 'f'
		}
	},
	{
		//EASY 2 : Build a forest
		startBoard: [
		'g', 'g', 'g', 'g', 'g',
		'w', 'w', 'w', 'w', 'g',
		'w', 'w', 'w', 'w', 'w',
		'w', 'w', 'w', 'w', 'g',
		'g', 'g', 'g', 'g', 'g',
		],
		solution: {
			message: 'Plant grass everywhere',
			min_move: 4,
			all: 'g'
		}
	},


	{
		//EASY 9 : Inondation
		startBoard: [
		'w', 'w', 'w', 'w', 'w',
		'w', 'f', 'f', 'f', 'g',
		'f', 'f', 'f', 'f', 'g',
		'w', 'f', 'f', 'f', 'g',
		'w', 'f', 'f', 'f', 'f',
		],
		solution: {
			message: 'Drown everything, even the lonely fire',
			min_move: -1,
			all: 'w'}
	},
	{
		//EASY 9 : Inondation
		startBoard: [
		'f', 'f', 'g', 'f', 'f',
		'g', 'w', 'w', 'w', 'f',
		'g', 'w', 'w', 'w', 'f',
		'g', 'w', 'w', 'w', 'f',
		'g', 'w', 'w', 'w', 'f',
		],
		solution: {
			message: 'And you set fire... to the rain',
			min_move: 9,
			all: 'f'}
	},
	{
		//EASY 10 : Burn Everything
		startBoard: [
		'f', 'f', 'f', 'f', 'f',
		'f', 'g', 'g', 'g', 'f',
		'f', 'g', 'g', 'g', 'f',
		'f', 'g', 'g', 'g', 'f',
		'w', 'g', 'g', 'g', 'g',
		],
		solution: {
			message: 'More green please. More than that.',
			min_move: 6,
			all: 'g'}
	},
	{
		//EASY 10 : Burn Everything
		startBoard: [
		'f', 'g', 'g', 'g', 'g',
		'f', 'g', 'g', 'g', 'g',
		'f', 'g', 'g', 'g', 'g',
		'f', 'g', 'g', 'g', 'g',
		'g', 'g', 'g', 'g', 'g',
		],
		solution: {
			message: 'Some people just want to watch the world burn',
			min_move: 6,
			all: 'f'}
	},
	{
		//EASY 10 : Burn Everything
		startBoard: [
		'g', 'g', 'g', 'g', 'g',
		'w', 'w', 'w', 'w', 'f',
		'w', 'w', 'w', 'w', 'f',
		'w', 'w', 'w', 'w', 'f',
		'w', 'w', 'w', 'w', 'f',
		],
		solution: {
			message: 'No water, no grass.',
			min_move: 11,
			all: 'f'}
	},

	{
		//EASY 10 : Burn Everything
		startBoard: [
		'f', 'w', 'w', 'w', 'f',
		'f', 'w', 'w', 'w', 'f',
		'f', 'w', 'w', 'w', 'f',
		'f', 'w', 'w', 'w', 'f',
		'g', 'w', 'w', 'w', 'w',
		],
		solution: {
			message: 'Red. Only red.',
			min_move: 13,
			all: 'f'}
	},

	{
		//EASY 11 : Only trees
		startBoard: [
		'w', 'w', 'w', 'w', 'w',
		'f', 'f', 'f', 'f', 'f',
		'f', 'f', 'f', 'f', 'f',
		'f', 'f', 'f', 'w', 'w',
		'g', 'f', 'f', 'w', 'f',
		],
		solution: {
			message: 'One fire to rule them all',
			min_move: 18,
			all: 'f'}
	},
	{
		//EASY 12 : Inondation
		startBoard: [
		'w', 'g', 'g', 'g', 'f',
		'w', 'w', 'w', 'w', 'g',
		'g', 'g', 'g', 'w', 'g',
		'f', 'f', 'g', 'w', 'g',
		'w', 'f', 'g', 'w', 'g',
		],
		solution: {
			message: 'Did you know our planet was called planet Blue?',
			min_move: 13,
			all: 'w'}
	},
	{
		//EASY 15 : Burn everything
		startBoard: [
		'w', 'f', 'f',
		'f', 'f', 'f',
		'f', 'f', 'g',
		],
		solution: {
			message: 'An ocean of blue, please',
			min_move: 7,
			all: 'w'
		}
	},
	{
		//EASY 13 : Build the Forest
		startBoard: [
		'w', 'f', 'w', 'f', 'w',
		'f', 'g', 'g', 'g', 'f',
		'w', 'g', 'g', 'g', 'w',
		'f', 'g', 'g', 'g', 'f',
		'g', 'w', 'w', 'f', 'w',
		],
		solution: {
			message: 'The grass is always greener on the other side',
			min_move: 13,
			all: 'g'}
	},
	{
		//EASY 14 : Build Forest
		startBoard: [
		'g', 'f', 'f', 'f', 'w',
		'f', 'g', 'f', 'g', 'f',
		'f', 'g', 'g', 'g', 'f',
		'f', 'g', 'f', 'g', 'f',
		'g', 'f', 'f', 'f', 'w',
		],
		solution: {
			message: 'What could go green ?',
			min_move: 17,
			all: 'g'}
	},

	{
		//EASY 16 : Build Forest
		startBoard: [
		'w', 'f', 'f',
		'f', 'f', 'f',
		'f', 'f', 'g',
		],
		solution: {
			message: 'Fire, fire everywhere',
			min_move: 11,
			all: 'f'
		}
	},
	{
		//SPLOADIE 1
		startBoard: [
		'g', 'w', 'w',
		'g', 'w', 'f',
		'w', 'w', 'f',
		],
		solution: {
			board: [
			'g', 'g', 'g',
			'g', 'f', 'g',
			'g', 'g', 'g',
			],
			message: 'Reproduce the lower map',
			min_move: 8
		},
	},
	{
		//MAP HARDCORE 1
		startBoard: [
		'w', 'f', 'f', 'f', 'f','f',
		'f', 'f', 'f', 'f', 'f','f',
		'r', 'r', 'r', 'r', 'r','f',
		'f', 'f', 'f', 'f', 'f','f',
		'f', 'r', 'r', 'r', 'r','r',
		'f', 'f', 'f', 'f', 'f','w',
		],
		solution: {
			message: 'Make way for the river',
			min_move: 6,
			none: 'f'
		}
	},
	{
		//MAP HARDCORE 3
		startBoard: [
		'g', 'g', 'r', 'r','r',
		'f', 'w', 'g', 'g','w',
		'w', 'w', 'r', 'r','r',
		'w', 'w', 'g', 'g','g',
		'f', 'w', 'g', 'g','g',
		],
		solution: {
			all: 'f',
			min_move: 11,
			message: 'Burn everything besides rocks'
		},
	},
	{
		//MAP HARDCORE 4
		startBoard: [
		'g', 'g', 'g', 'g', 'g','g',
		'f', 'g', 'g', 'g', 'g','g',
		'f', 'g', 'r', 'r', 'r','g',
		'f', 'g', 'r', 'w', 'r','g',
		'f', 'g', 'g', 'f', 'r','g',
		'w', 'f', 'f', 'f', 'f','f',
		],
		solution: {
			all: 'f',
			message: 'Make everything burn',
			min_move: 14
		}
	},
	{
		//MAP HARDCORE 5
		startBoard: [
		'w', 'r', 'r', 'r', 'r','r',
		'w', 'w', 'w', 'w', 'w','g',
		'f', 'r', 'r', 'r', 'r','g',
		'f', 'f', 'f', 'f', 'r','g',
		'r', 'r', 'r', 'r', 'r','g',
		'w', 'g', 'g', 'g', 'g','f',
		],
		solution: {
			message: 'Extinguish all fire. Yes. Even this one.',
			min_move: 9,
			none: 'f'
		},
	},

]

export default levels
