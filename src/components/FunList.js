// List of Fun components

import React from 'react';
import Fun from './Fun';
import './funList.css';

const FunList = ({ funs }) => {
  return (
    <div className='flex'>
      {
        funs.map((element, i) => {
              
          return (
            <Fun 
            id={element.id} 
            name={element.name} 
            description={funs[i].description}
            image={funs[i].image}
            />
          );
        })
      }
    </div>
  );
}

export default FunList;