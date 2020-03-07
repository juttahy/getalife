// THIS FEATURE IS STILL IN PROGRESS 

// Make checkbox list for categories. Dynamically changes the list of funs

import React from 'react';

function CategoriesSearch() {
  return (
    <div className='checkboxContainer'>
      <div>
        <input type='checkbox' id='urheilu' name='urheilu' value='urheilu' /> 
        <label for='urheilu'> Sports</label>
      </div>
      <div>
        <input type='checkbox' id='luonto' name='luonto' value='luonto' /> 
        <label for='luonto'> Nature</label>
      </div>
      <div>
        <input type='checkbox' id='viihde' name='viihde' value='viihde' /> 
        <label for='viihde'> Entertainment</label>
      </div>
      <div>
        <input type='checkbox' id='musiikki' name='musiikki' value='musiikki' /> 
        <label for='musiikki'> Music</label>
      </div>
    </div>
  );
}

export default CategoriesSearch;