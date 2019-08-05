// Yksittäinen Fun-kortti jossa kuva ja kuvaus. Myöhemmin lisää myös kategoriat/hakusanat ja kesto.
// Tällä hetkellä haetaan javascript objektista, mutta myöhemmin Drupalista.

import React from 'react';
import './fun.css';

const Fun = ({ name, description, id, image }) => {
    
    return (
        <div className='funContainer'>
            <img alt='funs' src={require(`../images/${image}`)} />
            <div> 
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Fun;