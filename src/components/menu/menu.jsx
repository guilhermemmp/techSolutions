import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return (
        
        <nav className="menu">
            <h1 className='logo'>MeuPS2</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/empresa">Empresa</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>

    );
};

export default Menu;