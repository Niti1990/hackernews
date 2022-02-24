import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

//import {Link} from 'react-router-dom';
function List({ hits, submit }) {
	const [filterhits, setFilterhits] = useState([]);

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		const newFilter = hits.filter((value) => {
			return value.title.toLowerCase().includes(searchWord.toLowerCase());
		});

		setFilterhits(newFilter);
	};
	const handleOnSubmit = (event) => {
		event.preventDefault();
		const searchWord = event.target.value;
		submit(searchWord);
	};

	//const hits = props.hits;
	//const Listitems = hits.map((hit) => {
	//    <li>{hit}</li>;
	return (
		<div>
			<div className='main-nav'>
				<h3 className='header'>News</h3>
				<form onSubmit={handleOnSubmit}>
					<input
						className='searchInput'
						type='text'
						placeholder=' Enter '
						onChange={handleFilter}
					/>
					<button type='submit'>Submit</button>
					<div className='SearchIcon'>
						<SearchIcon />
					</div>
				</form>
			</div>

			<div className='hitsItem'>
				{filterhits.length !== 0 && (
					<ul>
						{filterhits.map((hit, index) => {
							//console.log(hit);
							return (
								<li className='hitsResult' key={index}>
									{hit.title}
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
}

export default List;
