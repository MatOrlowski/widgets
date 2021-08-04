import React, { useState } from 'react';

const Accordion = ({ items }) => {
	//destructuring props into items
	const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const singleItem = items.map((item, index) => {
		const active = index === activeIndex ? 'active' : '';

		return (
			<React.Fragment key={item.title}>
				<div className={`title` + active} onClick={() => onTitleClick(index)}>
					<i className="dropdown icon"></i>
					<strong>{item.title}</strong>
				</div>
				<div className={`content` + active}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return <div className="ui styled accordion">{singleItem}</div>;
};

export default Accordion;
