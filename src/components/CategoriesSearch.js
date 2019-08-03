// Checkbox-lista josta voi valita useita kategorioita, Funlista päivittyy dynaamisesti

import React from 'react';

function CategoriesSearch() {
    return (
        <div className='checkboxContainer'>
            <div>
                <input type='checkbox' id='urheilu' name='urheilu' value='urheilu' /> 
                <label for='urheilu'> Urheilu</label>
            </div>
            <div>
                <input type='checkbox' id='luonto' name='luonto' value='luonto' /> 
                <label for='luonto'> Luonto</label>
            </div>
            <div>
                <input type='checkbox' id='viihde' name='viihde' value='viihde' /> 
                <label for='viihde'> Viihde</label>
            </div>
            <div>
                <input type='checkbox' id='musiikki' name='musiikki' value='musiikki' /> 
                <label for='musiikki'> Musiikki</label>
            </div>
        </div>
    );
}

export default CategoriesSearch;