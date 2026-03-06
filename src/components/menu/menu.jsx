import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return (
        <nav>
            <ul>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/produtos"}><li>Produtos</li></Link>
                <Link to={"/empresa"}><li>Empresa</li></Link>
                <Link to={"/contato"}><li>Contato</li></Link>
            </ul>
        </nav>
    );
};

export default Menu;