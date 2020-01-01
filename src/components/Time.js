// THIS FEATURE IS STILL IN PROGRESS

// Select list for choosing the duration of the fun.
// Changes the Funlist dynamically

import React from 'react';

function Time() {
    return (
        <div>
            <select name="time" size="1">
                <option value="default">For how long?</option>
                <option value="doesntMatter">Doesn't matter</option>
                <option value="5">5 minutes</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="hour">1 hour</option>
            </select> 
        </div>
    );
}

export default Time;