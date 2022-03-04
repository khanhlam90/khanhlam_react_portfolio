import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

    return (
        <header className="flex-row space-between px-1">
            <h1>Khanh Lam</h1>
            <img src={coverImage} alt="soft feeling"></img>
            {props.children}
        </header>
    )
}

export default Header;