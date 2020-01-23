import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className='footerContainer'>
            <p class="footerDescription">An app to help you get a life. To find fun things to do. Just use the Random Life Generator -button or tell what you would like. Enjoy!</p>
            <p>&copy; Jutta Hyrskylahti</p>
            <p className='imageCopyright'>
                <a href="https://www.freepik.com/free-photos-vectors/cartoon">
                    Unicorn cartoon vector created by freepik - www.freepik.com
                </a>
            </p>
        </div> 
    );
}

export default Footer;