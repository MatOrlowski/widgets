import React from 'react';

const Dropdown = ({ options }) => {
	const renderedOptions = options.map((options) => {
		return (
			<div key={options.value} className="item">
				{options.label}
			</div>
		);
	});

	return (
		<div className="ui form">
			<div className="field">
				<label className="label">Select a Color</label>
				<div className="ui selection dropdown visible active">
					<i className="dropdown icon"></i>
					<div className="text">Select Color</div>
					<div className="menu visible transition">{renderedOptions}</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
