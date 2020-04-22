import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {

    return (
        <div id="navWrap">
            <nav>
                <Link to="/divination">
                    <li className="navItem" id="homeNav"></li>
                </Link>
                <Link to="/askcodey">
                    <li className="navItem" id="profileNav"></li>
                </Link>
                <Link to="/loveorloss">
                    <li className="navItem" id="favoritesNav"></li>
                </Link>
               
                
                
            </nav>
        </div>
    )
}