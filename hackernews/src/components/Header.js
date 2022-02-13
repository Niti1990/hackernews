import React from 'react';
function Header() {
    return (
        <div>
            <h1>HACKER NEWS</h1>
            <h3 className='header'>New</h3>
            <input className='header' type='text' placeholder='Enter' />
        </div>
    );
}
export default Header;