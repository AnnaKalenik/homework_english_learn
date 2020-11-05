import React from 'react';
import logo from '../../images/logo.svg';

const LogoContainer = (props) => {
    return (
        <div className="logo-container">
            <img src={logo} />
            <span className="level-title">LEVEL {props.level}</span>
        </div>
    );
};

export default LogoContainer;