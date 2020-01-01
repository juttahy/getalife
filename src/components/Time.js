// Select list for choosing the duration of the fun.
// Changes the Funlist dynamically

import React from 'react';

function Time() {
    return (
        <div>
            <select name="time" size="1">
                <option value="default">For how long?</option>
                <option value="doesntMatter">Doesn't matter</option>
                <option value="5">5 minuuttia</option>
                <option value="15">15 minuuttia</option>
                <option value="30">30 minuuttia</option>
                <option value="tunti">tunti</option>
            </select> 
        </div>
    );
}

export default Time;