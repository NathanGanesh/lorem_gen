import React from 'react';
import Input from './Input';
import './input.css';

function App(props) {
	console.log(props);

	return (
		<div>
			<h1>ok</h1>
			<Input name={'Paragraphs count'} />
			<Input name={'Sentences'} />
			<Input name={'count'} />
		</div>
	);
}

export default App;
