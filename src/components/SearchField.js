// Search field 
// When the user writes to this search field, the Funlist is updated dynamically

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