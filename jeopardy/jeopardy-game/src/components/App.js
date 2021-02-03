import React, { useState, useEffect } from 'react';
import Question from './Question';
import Score from './Score';
export default function App(props) {
	const [question, setQuestion] = useState({});
	const [query, updateQuery] = useState({
		baseURL: 'https://jservice.io/api/random',
		apiKey: '',
		option: '&t=',
		title: '',
		searchURL: ''
	});
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(query.baseURL);
				const data = await response.json();
				setQuestion(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [query]);

	const handleClick = () => {
		updateQuery({
			...query,
			baseURL: 'https://jservice.io/api/random'
		});
	};
	return (
		<div>
			<h1>Welcome to Jeopardy!</h1>
			<Score question={question} />
			{Object.keys(question).length ? <Question question={question} /> : ''}
			<button onClick={handleClick}>Get Question</button>
		</div>
	);
}
