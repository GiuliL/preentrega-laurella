import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <header className="navbar-header">
            <h1>El Molino</h1>
            <nav>
                <ul className="navbar-menu">
                    <li><a href="#legumbres">Legumbres</a></li>
                    <li><a href="#frutos-secos">Frutos Secos</a></li>
                    <li><a href="#cereales">Cereales</a></li>
                </ul>
            </nav>
            <CartWidget /> 
        </header>
    );
};

export default NavBar;
