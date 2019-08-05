// tämä on komponentti, jonka sisälle tulee hakukenttä
// props.children kertoo että tätä voi käyttää ympäröivänä komponenttina jonka sisällä muita komponentteja

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
