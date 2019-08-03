import React from 'react';
import './header.css';

function Header() {
    return (
        <div className='headerContainer'>
            <div>
                <img alt='unicorn' src={require('../images/unicorn.png')} height='150px' />
            </div>
            <div>
                <h1>Get a Life</h1>
            </div> 
        </div> 
    );
}

export default Header;