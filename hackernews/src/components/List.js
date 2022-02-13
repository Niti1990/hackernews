import React from 'react';
//import {Link} from 'react-router-dom';
function List({ hits }) {
    //const hits = props.hits;
    //const Listitems = hits.map((hit) => {
    //    <li>{hit}</li>;
    return (
        <div>
            <ul>
                {hits.map((hit, index) => {
                    console.log(hit);
                    return <li key={index}>{hit.title}</li>;
                })}
            </ul>
        </div>
    );
}

export default List;
