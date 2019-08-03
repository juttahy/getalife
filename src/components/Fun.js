// Yksittäinen Fun-kortti jossa kuva, kuvaus, kategoriat ja kesto. Nämä tulee Drupalista
// mutta aluksi arraysta, jossa sisäinen array kategorioille

import React from 'react';
import './fun.css';

// alla voisi olla suluissa myös (props) jolloin pätisi nuo alemmat kommentit. 
// nyt vielä entisestään destrukturoitu ja laitettu suoraan nuo propsit tuohon funktion parametreiksi
const Fun = ({ name, description, id, image }) => {
    // määritellään että name, email ja id ovat propsin ominaisuuksia, 
    // jolloin ei tarvitse käyttää esim. props.name vaan pelkkä name riittää
    // const { name, email, id } = props;
    return (
        <div className='funContainer'>
            {/* <img alt='funs' src={`https://robohash.org/${id}?200x200`} /> */}
            <img alt='funs' src={require(`../images/${image}`)} />
            <div> 
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Fun;