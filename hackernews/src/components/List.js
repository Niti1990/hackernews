import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

//import {Link} from 'react-router-dom';
function List({ hits, submit }) {
	// const [filterhits, setFilterhits] = useState([]);

	// const handleFilter = (event) => {
	// 	const searchWord = event.target.value;
	// 	const newFilter = hits.filter((value) => {
	// 		return value.title.toLowerCase().includes(searchWord.toLowerCase());
	// 	});

	// 	setFilterhits(newFilter);
	// };
	const handleOnSubmit = ( event ) =>
	{
		event.preventDefault();
	   console.log("handleOnSubmit", event )
	    const searchWord = event.target[0].value;
		submit(searchWord);
	};

	//const hits = props.hits;
	//const Listitems = hits.map((hit) => {
	//    <li>{hit}</li>;
	//Line:30 wrapping in Form the input field and button and calling  handleSubmit function
	return (
	
		<div >
			
				<div className='container'>
				<form  onSubmit={handleOnSubmit}>
					<input
						className='searchInput'
						type='text'
						placeholder='Enter'
						name='searchbar'
						//onChange={handleSubmit}
					/>
						<div className='SearchIcon'>
						<SearchIcon />
					</div>
					<button  className='button'type='submit'>Submit</button>
				
							
					
				</form>
			</div>
			<div >
				{hits.length !== 0 && ( //display the title from hits-object
					<ul className='hitsItem'>
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
