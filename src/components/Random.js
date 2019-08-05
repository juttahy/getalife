// Random Life Generator -nappula
// toiminnallisuus App.js tiedostossa

import React from 'react';
import './random.css';

const Random = ({ randomChange }) => {

    return (
        <div>
            <button className='random' onClick={randomChange}>Random Life Generator</button>
        </div>
    );
}

export default Random;
