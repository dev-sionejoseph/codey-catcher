import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {

    return (
        <div id="navWrap">
            <nav>
                <Link to="/">
                    <li className="navItem" id="home-nav">Home</li>
                </Link>
                <Link to="/divination">
                    <li className="navItem" id="divination-nav">Divination</li>
                </Link>
                <Link to="/askcodey">
                    <li className="navItem" id="ask-codey-nav">Ask Codey</li>
                </Link>
                <Link to="/loveorloss">
                    <li className="navItem" id="love-or-loss-nav">Love or Loss</li>
                </Link>
            </nav>
        </div>
    )
}