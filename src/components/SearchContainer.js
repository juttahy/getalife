// This is the container component that will include the search field & other search features
// props.children enables this to be used as a container element around other components. 


import React from 'react';
import './searchContainer.css';


const SearchContainer = (props) => {
    return (
        <div className='searchContainer'>
            <h1>Get some fun to your life</h1>
            <div className='searchComponents'>
                {props.children}
            </div>
        </div>
    );
    
};

export default SearchContainer;
