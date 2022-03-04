/** @format */

import './App.css';
import Header from './components/Header';
import './components/Header.css';
import List from './components/List';
import './components/List.css';
import React, { useState, useEffect } from 'react';

function App() {
	// fetching the initial API from given link
	const [news, setNews] = useState([]);
	//setSearchvalue to whatever is in the input field in List.js
	const [searchValue, setSearchValue] = useState('');

	//console.log(news);
	

	useEffect(() => {
		const fetchNews = async () => {
			try {
				//const searchValue = 'react';
				const response = await fetch(
					`http://hn.algolia.com/api/v1/search?query=${searchValue}` //searchValue is any value searched
				);
				if (response.ok) {
					const jsonResponse = await response.json();
					console.log('response', jsonResponse);
					//console.log from json
					return setNews(jsonResponse.hits);
				}

				console.error("Fetch didn't work wout");
			} catch (error) {
				console.log(error.message);
			}
		};
		fetchNews();
	}, [searchValue]);

	//goal: setSearchValue to input.value
	const handleSubmit = (searchWord) => {
		console.log('handleSubmit', searchWord);
		setSearchValue(searchWord);

		// 	event.preventDefault();
		// 	console.log('target', event.target);
		// 	console.log( 'current searchvalue', searchValue );
		// 	//connecting searchbar with inputfield
		// 	setSearchValue(event.target.searchbar.value);
		// 	//alert('hi there');
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<Header />
				<List hits={news} submit={(value) => handleSubmit(value)} />
			</header>
		</div>
	);
}

export default App;
