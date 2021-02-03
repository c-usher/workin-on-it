import React, { useState } from 'react';

export default function Score(props) {
	const [score, updateScore] = useState(0);

	const upScore = () => {
		updateScore(score + props.question[0].value);
	};
	const downScore = () => {
		updateScore(score - props.question[0].value);
	};
	const zeroScore = () => {
		updateScore(0);
	};

	return (
		<div>
			<h1>Score: {score}</h1>
			<button onClick={upScore}>Correct!</button>
			<button onClick={downScore}>Incorrect!</button>
			<button onClick={zeroScore}>Play Again?</button>
		</div>
	);
}
