import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

//import {Link} from 'react-router-dom';
function List({ hits }) {

  const [filterhits, setFilterhits] = useState([]);

   const handleFilter =(event) =>{
       const searchWord =event.target.value
       const newFilter = hits.filter((value) => { 
     return value.title.toLowerCase().includes(searchWord.toLowerCase());
});
 
 setFilterhits(newFilter);
   };

    //const hits = props.hits;
    //const Listitems = hits.map((hit) => {
    //    <li>{hit}</li>;
    return (

        <div>
         <div className='main-nav'>
           <h3 className='header'>News</h3>
                <input className='searchInput' type='text' placeholder=' Enter ' onChange={ handleFilter } /> 
                  <div className='SearchIcon'>
                    <SearchIcon />
                   </div>
          </div>
            
      
            
        { filterhits.length !== 0 && (
            <ul >
            
                {filterhits.map((hit, index) => {
                    console.log(hit);
                    return <li className="hitsResult"
                     key={index}>{hit.title}
                     </li>;
                })}
                
            </ul>
)}
        </div>
    );
}

export default List;
