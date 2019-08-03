// tähän tulee SearchField, Time ja CategoriesSearch

import React from 'react';
import './searchContainer.css';

/* function SearchContainer() {
    return (
        <div className='searchContainer'>
            <h1>Hae hupia</h1>
            <div className='searchComponents'>
                <SearchField /> 
                <Time />
                <CategoriesSearch />
            </div>
        </div>
    );
} */

const SearchContainer = (props) => {
    return (
        <div className='searchContainer'>
            <h1>Get some life to your life</h1>
            <div className='searchComponents'>
                {props.children}
            </div>
        </div>
    );
    
};

export default SearchContainer;
