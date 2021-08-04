import React from 'react';
import Accordion from './components/Accordion';

//array of Q&A for accordion
const items = [
	{
		title: 'What is React?',
		content: 'React is a JavaScript frontend library.',
	},
	{
		title: 'Why use React?',
		content: 'React is a favourite JS library among engineers.',
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components.',
	},
];

export default () => {
	return (
		<div className="ui segment">
			<Accordion items={items} />
		</div>
	);
};
