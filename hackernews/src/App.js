import './App.css';
import Header from './components/Header';
import './components/Header.css';
import List from './components/List';
import './components/List.css';
import React, { useState, useEffect } from 'react';

function App() {
	const [news, setNews] = useState([]);
	// const [searchValue, setSearchValue] = useState([]);
	//console.log(news);
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const searchValue = 'react';
				const response = await fetch(
					`http://hn.algolia.com/api/v1/search?query=${setSearchValue}`
				);
				if (response.ok) {
					const jsonResponse = await response.json();
					console.log('test', jsonResponse);
					//console.log from json
					return setNews(jsonResponse.hits);
				}

				console.error("Fetch didn't work wout");
			} catch (error) {
				console.log(error.message);
			}
		};
		fetchNews();
	}, []);
	const handleSubmit = (searchValue) => {
		console.log('hello', searchValue);
	};
	return (
		<div className='App'>
			<header className='App-header'>
				<Header />
				<List hits={news} submit={handleSubmit} />
			</header>
		</div>
	);
}

export default App;
