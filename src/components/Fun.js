// Individual Fun Card with a picture, name and description. 
// Later: categories/keywords(?) and duration
// At the moment imports data from JavaScript file, change this to WordPress

import React from 'react';
import './fun.css';

const Fun = ({ name, description, image }) => {
    
  return (
    <div className='funContainer'>
      <img alt='funs' src={image} />
      <div> 
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Fun;