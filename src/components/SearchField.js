// Etsintäkenttä johon kirjoittamalla Funlist päivittyy dynaamisesti

import React from 'react';
import './searchfield.css';

const SearchField = ({searchChange}) => {
    return (
        <div>
            <input 
                type='search' 
                placeholder='What do you like?'
                onChange={searchChange} 
            />
        </div>
    );
}

export default SearchField;