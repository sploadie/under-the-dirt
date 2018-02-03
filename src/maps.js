const levels = [
	{
		//EASY 1 : Stifle the flames
		startBoard: [
		'w', 'g', 'g', 'g', 'g',
		'w', 'g', 'g', 'g', 'g',
		'w', 'g', 'g', 'g', 'f',
		'w', 'g', 'g', 'g', 'g',
		'g', 'g', 'g', 'g', 'g',
		],
		solution: {
			message: 'Stifle the flames...',
			none: 'f'
		}
	},
	{
		//EASY 2 : Build a forest
		startBoard: [
		'w', 'g', 'g', 'g', 'g',
		'w', 'g', 'g', 'g', 'g',
		'w', 'w', 'w', 'w', 'w',
		'w', 'g', 'g', 'g', 'g',
		'g', 'g', 'g', 'g', 'g',
		],
		solution: {
			message: 'Build a forest...',
			all: 'g'
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
			message: 'Burn the trees...',
			none: 'g'
		}
	},
	{
		//EASY 4 : Extinguish fire
		startBoard: [
		'f', 'f', 'f', 'f', 'w',
		'g', 'g', 'g', 'g', 'f',
		'f', 'f', 'f', 'f', 'f',
		'g', 'g', 'g', 'g', 'f',
		'f', 'f', 'f', 'f', 'f',
		],
		solution: {
			message: 'Extinguish fire...',
			none: 'f'
		}
	},
	{
		//EASY 5 : Inondation
		startBoard: [
		'w', 'w', 'w', 'w', 'w',
		'g', 'g', 'g', 'g', 'g',
		'g', 'g', 'g', 'g', 'g',
		'g', 'g', 'g', 'g', 'g',
		'f', 'f', 'f', 'f', 'f',
		],
		solution: {
			message: 'Inondation: only water left',
			all: 'w'
		}
	},
	{
		//EASY 6 : Build the forest
		startBoard: [
		'w', 'f', 'f', 'f', 'f',
		'f', 'f', 'f', 'f', 'f',
		'f', 'f', 'f', 'f', 'f',
		'f', 'f', 'f', 'f', 'f',
		'f', 'f', 'f', 'f', 'g',
		],
		solution: {
			message: 'Build the forest: all trees',
			all: 'g'
		}
	},
	{
		//EASY 7 : Burn Everything
		startBoard: [
		'f', 'w', 'w', 'w', 'w',
		'f', 'w', 'w', 'w', 'w',
		'f', 'w', 'w', 'w', 'w',
		'f', 'w', 'w', 'w', 'w',
		'f', 'g', 'g', 'g', 'g',
		],
		solution: {
			message: 'Burn Everything: all fire',
			all: 'f'
		}
	},
	{
		//EASY 8 : Burn Everything
		startBoard: [
		'f', 'g', 'g', 'g', 'f',
		'g', 'w', 'w', 'w', 'g',
		'f', 'f', 'f', 'f', 'f',
		'g', 'w', 'w', 'w', 'g',
		'f', 'g', 'g', 'g', 'f',
		],
		solution: {
			message: 'Burn Everything: all fire',
			all: 'f'		}
	},
]

export default levels
