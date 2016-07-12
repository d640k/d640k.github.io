import { fontStack } from './typography';

export const pageWrapper = {
	maxWidth: '750px',
	margin: '0 auto'
};

export default {
	body: {
		fontFamily: fontStack.serif,
		margin: 0
	},

	pre: {
		fontFamily: fontStack.mono
	},

	code: {
		fontFamily: fontStack.mono
	},

	h1: {
		fontWeight: 700,
		fontSize: '3em',
		margin: 0
	},

	h2: {
		margin: 0,
		fontWeight: 300,
		fontSize: '1.5em',
		fontStyle: 'italic'
	},

	em: {
		fontStyle: 'italic'
	},

	p: {
		lineHeight: 1.6,
		margin: '0 0 1em'
	}
};
