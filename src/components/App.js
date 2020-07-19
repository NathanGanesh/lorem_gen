import React from 'react';
import Input from './Input';
import './input.css';
import { LoremIpsum } from 'lorem-ipsum';

function App() {
	return (
		<div>
			<h1>ok</h1>
			<Input name={'Paragraphs count'} />
			<Input name={'Sentences'} />
			<Input name={'Words'} />
		</div>
	);
}

export default App;
