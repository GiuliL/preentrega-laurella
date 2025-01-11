import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header className="navbar-header">
            <h1><Link to="/">El Molino</Link></h1>
            <nav>
                <ul className="navbar-menu">
                    <li><Link to="/category/legumbres">Legumbres</Link></li>
                    <li><Link to="/category/frutos-secos">Frutos Secos</Link></li>
                    <li><Link to="/category/cereales">Cereales</Link></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    );
};

export default NavBar;
