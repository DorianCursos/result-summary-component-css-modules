import { v4 } from 'uuid';

const PATH = '/assets/images/';

export const SUMMARY_INFO = [
	{
		id: v4(),
		title: 'Reaction',
		icon: PATH + 'icon-reaction.svg',
		score: 70,
		color: 'red'
	},
	{
		id: v4(),
		title: 'Memory',
		icon: PATH + 'icon-memory.svg',
		score: 92,
		color: 'yellow'
	},
	{
		id: v4(),
		title: 'Verbal',
		icon: PATH + 'icon-verbal.svg',
		score: 61,
		color: 'green'
	},
	{
		id: v4(),
		title: 'Visual',
		icon: PATH + 'icon-visual.svg',
		score: 73,
		color: 'blue'
	}
];
