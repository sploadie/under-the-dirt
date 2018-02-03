const levels = [
	{
		//TUTORIEL
		//////////
		//ETAPE 1 : Stifle the flames
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
		//TUTORIEL
		//////////
		//ETAPE 2 : Build a forest
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
		//EASY 1 : Burn the trees
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
]

export default levels
