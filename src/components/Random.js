// Nappula ja siihen liittyvä arvontatoiminnallisuus, arpoo indeksin, jonka perusteella Funlist päivittyy
// tee tämä vasta lopuksi

import React from 'react';
import './random.css';
import { funs } from '../funExample';



const Random = ({ randomChange }) => {
    // luo array kaikista id:stä
    // arvo joku noista id:stä muuttujan randomId arvoksi
    
    // muuttuja jonka arvo on joku luku. Tätä lukua sitten käytetään filtteröintiin, näytetään vain tämän id:n fun 
    // const randomId = makeRandomId();

    
    
    
    return (
        <div>
            <button className='random' onClick={randomChange}>Random Life Generator</button>
        </div>
    );
}



// export const test = randomId;
export default Random;
