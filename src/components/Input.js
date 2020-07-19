import React, { Component, useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';

function Input(props) {
	const [ lorem, setLorem ] = useState({
		sentencesPerParagraph: {
			max: 8,
			min: 4
		},
		wordsPerSentence: {
			max: 16,
			min: 4
		},
		count: '1', // Number of "words", "sentences", or "paragraphs"
		format: 'plain', // "plain" or "html"
		paragraphLowerBound: 3, // Min. number of sentences per paragraph.
		paragraphUpperBound: 7, // Max. number of sentences per paragarph.
		random: Math.random, // A PRNG function
		sentenceLowerBound: 5, // Min. number of words per sentence.
		sentenceUpperBound: 15, // Max. number of words per sentence.
		suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
		units: 'sentences' // paragraph(s), "sentence(s)", or "word(s)"
	});

	// <p>{lorem1}</p>
	// 		<p>{lorem2}</p>
	// 		<p>{lorem3}</p>

	function handleChange(event) {
		const { name, value } = event.target;
		// const lorem1 = lorem25.generateWords(parseInt(lorem.count));
		setLorem((prevValue) => {
			return {
				...prevValue,
				[name]: value
			};
		});
	}

	const lorem25 = new LoremIpsum({
		sentencesPerParagraph: {
			max: 8,
			min: 4
		},
		wordsPerSentence: {
			max: 16,
			min: 4
		}
	});

	// const lorem253 = lorem25.generateSentences(5);
	// const lorem2 = this.lorem.generateSentences(5);
	// const lorem3 = this.lorem.generateParagraphs(7);
	return (
		<div>
			<input name={props.name} placeholder={props.name} onChange={handleChange} />
			{/* <p>{lorem1}</p> */}
		</div>
	);
}

export default Input;
