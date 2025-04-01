export interface Card {
	name: string;
	content: string;
	link?: Array<CardLink>;
}

export interface CardLink {
	content: string;
	link: string;
}

export const defaultPages: Record<string, Card> = {
	'work-dont-know-what-to-do': {
		name: 'work-dont-know-what-to-do',
		content: "Want to work, but don't know what to do?",
		link: [
			{ content: 'yes', link: 'study' },
			{ content: 'no', link: 'sleep' }
		]
	},
	study: { name: 'study', content: 'Go study' },
	sleep: { name: 'sleep', content: 'Go sleep' }
};