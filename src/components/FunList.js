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
            key={element.id} 
            name={element.title.rendered} 
            description={element.activity_description}
            image={element.activity_image.guid}
            />
          );
        })
      }
    </div>
  );
} 


export default FunList;