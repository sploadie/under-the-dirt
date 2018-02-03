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
		//EASY 3 : Burn the trees
		startBoard: [
		'f', 'w', 'g', 'g', 'g',
		'g', 'w', 'g', 'w', 'g',
		'g', 'w', 'g', 'w', 'g',
		'g', 'w', 'w', 'w', 'g',
		'g', 'g', 'g', 'g', 'g',
		],
		solution: {
			message: 'Return to cinders',
			none: 'g'
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
			message: 'Mother Nature',
			all: 'g'
		}
	},
	{
		//EASY 9 : Inondation
		startBoard: [
		'w', 'w', 'w', 'w', 'w',
		'w', 'g', 'g', 'g', 'g',
		'f', 'g', 'g', 'g', 'g',
		'w', 'g', 'g', 'g', 'g',
		'w', 'f', 'f', 'f', 'f',
		],
		solution: {
			message: 'Tsunami',
			all: 'w'}
	},
	{
		//EASY 10 : Burn Everything
		startBoard: [
		'f', 'w', 'w', 'w', 'f',
		'f', 'f', 'f', 'f', 'f',
		'f', 'f', 'f', 'f', 'f',
		'f', 'f', 'f', 'f', 'f',
		'g', 'w', 'w', 'w', 'w',
		],
		solution: {
			message: 'Some people just want to watch the world burn',
			all: 'f'}
	},
	{
		//EASY 11 : Only trees
		startBoard: [
		'w', 'f', 'f', 'f', 'g',
		'w', 'g', 'g', 'g', 'f',
		'w', 'w', 'w', 'w', 'w',
		'w', 'w', 'w', 'w', 'f',
		'w', 'w', 'w', 'w', 'w',
		],
		solution: {
			message: 'Save the Amazon Rainforest',
			all: 'g'}
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
			message: 'The flood plains bring great harvest',
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
			message: 'Would you like a glass of water?',
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
			message: 'For the jungle',
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
			all: 'f'
		}
	},
]

export default levels
