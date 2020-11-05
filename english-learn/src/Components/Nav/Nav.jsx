import React from 'react';
import LogoContainer from './LogoContainer'

const Nav = () => {
    return (
        <nav className="nav">
            <LogoContainer level={'0'} />
            <ul className="nav-container">
                <li className="active">Library</li>
                <li>Training</li>
                <li>Learn</li>
            </ul>
        </nav>
    );
};

export default Nav;