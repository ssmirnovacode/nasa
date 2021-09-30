import React from 'react';
import './header.scss';
import Navmenu from '../navmenu/navmenu';

const Header = () => {

    return(
        <header className="header">
            <Navmenu />
        </header>
    )
}

export default Header;