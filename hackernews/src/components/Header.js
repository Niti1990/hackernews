import React from 'react';
function Header() {
    return (
        <div>
          
            <h1>HACKER NEWS</h1>
            <ul className='nav'>
            <h3 className='header'>New</h3>
            <input className='input' type='text' placeholder='Enter' />
            </ul>
        </div>
    );
}
export default Header;