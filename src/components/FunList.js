// Lista Fun-komponenteista

import React from 'react';
import Fun from './Fun';
import './funList.css';

const FunList = ({ funs }) => {
    return (
        <div className='flex'>
            {
                funs.map((element, i) => {
                    // huom. reactissa komponenteilla pitää olla key jotta react osaa esim. poistaa vain sen komponentin
                    // koska tätä mahdollisesti tarvitaan myöhemmin, lisäsin sen jo tähän komponenttiin  
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