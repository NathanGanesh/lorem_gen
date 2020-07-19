import React, { Component, useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';

function Input(props) {
	const [ box, setBox ] = useState({
		count: 1, // Number of "words", "sentences", or "paragraphs"
		format: 'plain', // "plain" or "html"
		paragraphLowerBound: 3, // Min. number of sentences per paragraph.
		paragraphUpperBound: 7, // Max. number of sentences per paragarph.
		random: Math.random, // A PRNG function
		sentenceLowerBound: 5, // Min. number of words per sentence.
		sentenceUpperBound: 15, // Max. number of words per sentence.
		suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
		units: 'sentences' // paragraph(s), "sentence(s)", or "word(s)"
	});

	// const lorem1 = lorem.generateWords(1);
	// const lorem2 = lorem.generateSentences(5);
	// const lorem3 = lorem.generateParagraphs(7);

	// <p>{lorem1}</p>
	// 		<p>{lorem2}</p>
	// 		<p>{lorem3}</p>

	function handleChange(event) {
		console.log(event);
	}

	return (
		<div>
			<input name={props.name} placeholder={props.name} onChange={handleChange} />
		</div>
	);
}

export default Input;
