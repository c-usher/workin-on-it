import React, { useState } from 'react';

export default function Question(props) {
	const [answer, showAnswer] = useState();
	const displayAnswer = () => {
		showAnswer(`What is ${props.question[0].answer}!`);
	};
	return (
		<div className="question">
			<h2>Category:</h2>
			<h4>{props.question[0].category.title}</h4>
			<h2>Points:</h2>
			<h4>{props.question[0].points}</h4>
			<h2>Question:</h2>
			<h4>{props.question[0].question}</h4>
			<button className="answer" onClick={displayAnswer}>
				Click to Display Answer
			</button>
			<h2>{answer}</h2>
		</div>
	);
}
