const levels = [
	{
		//EASY 1 : Stifle the flames
		startBoard: [
		'w', 'g', 'g',
		'w', 'f', 'f',
		'w', 'g', 'g',
		],
		solution: {
			message: 'Spread the Water, build a River',
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
	{
		//SPLOADIE 1
		startBoard: [
		'g', 'w', 'w',
		'g', 'w', 'f',
		'w', 'w', 'f',
		],
		solution: [
		'g', 'g', 'g',
		'g', 'f', 'g',
		'g', 'g', 'g',
		],
	},
]

export default levels
