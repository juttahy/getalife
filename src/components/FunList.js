// Lista Fun-komponenteista

import React from 'react';
import Fun from './Fun';
import './funList.css';

const FunList = ({ funs }) => {
    return (
        <div className='flex'>
            {
                funs.map((user, i) => {
                    // reactissa komponenteilla pitää olla key jotta react osaa esim. poistaa vain sen komponentin 
                    // eikä tarvitse ladata koko DOMia uudestaan. Muista tämä. kaarisulkeet alla olevissa koska javascriptiä. 
                    return (
                        <Fun 
                        key={i} 
                        id={funs[i].id} 
                        name={funs[i].name} 
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