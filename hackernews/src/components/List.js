import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

//import {Link} from 'react-router-dom';
function List({ hits, handleSubmit }) {
	// const [filterhits, setFilterhits] = useState([]);

	// const handleFilter = (event) => {
	// 	const searchWord = event.target.value;
	// 	const newFilter = hits.filter((value) => {
	// 		return value.title.toLowerCase().includes(searchWord.toLowerCase());
	// 	});

	// 	setFilterhits(newFilter);
	// };
	// const handleOnSubmit = (event) => {
	// 	event.preventDefault();
	// 	const searchWord = event.target.value;
	// 	submit(searchWord);
	// };

	//const hits = props.hits;
	//const Listitems = hits.map((hit) => {
	//    <li>{hit}</li>;
	//Line:30 wrapping in Form the input field and button and calling  handleSubmit function
	return (
		<div>
			<div className='main-nav'>
				<h3 className='header'>News</h3>
				<form onSubmit={handleSubmit}>
					<input
						className='searchInput'
						type='text'
						placeholder=' Enter '
						name='searchbar'
						//onChange={handleSubmit}
					/>
					<button type='submit'>Submit</button>
					<div className='SearchIcon'>
						<SearchIcon />
					</div>
				</form>
			</div>
			<div className='hitsItem'>
				{hits.length !== 0 && ( //display the title from hits-object
					<ul>
						{hits.map((hit, index) => {
							return <li key={index}>{hit.title}</li>;
						})}
					</ul>
				)}
			</div>
		</div>
	);
}

export default List;
