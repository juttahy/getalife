// Random Life Generator -button
// toiminnallisuus App.js tiedostossa
// The functionalities are defined in the App.js

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
