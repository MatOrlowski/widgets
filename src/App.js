import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
	{
		label: 'The Color Blue',
		value: 'blue',
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true);

	return (
		<div className="ui segment">
			<button onClick={() => setShowDropdown(!showDropdown)}>
				Toggle Dropdown
			</button>
			{showDropdown ? (
				<Dropdown
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			) : null}
		</div>
	);
};

export default App;
