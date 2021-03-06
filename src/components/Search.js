import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() => {
		const searchWiki = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: term,
				},
			});
			setResults(data.query.search);
		};
		const timeoutId = setTimeout(() => {
			if (term) {
				searchWiki();
			}
		}, 500);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [term]);

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="content">
					<a
						href={`http://en.wikipedia.org?curid=${result.pageid}`}
						className="header"
					>
						{result.title}
					</a>
					<div className="description">
						<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter search term</label>
					<div className="ui input">
						<input
							value={term}
							onChange={(e) => setTerm(e.target.value)}
							type="text"
							className="input"
						/>
					</div>
				</div>
			</div>
			<div className="ui list">
				<div>{renderedResults}</div>
			</div>
		</div>
	);
};

export default Search;
