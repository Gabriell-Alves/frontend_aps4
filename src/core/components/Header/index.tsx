import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';


const Header = () => (
    <nav className="header-container row p-2">
        <div className="col-2">
            <h3>GeoPros</h3>
        </div>
        <div className="col-6 offset-1">
            <ul className="main-menu">
                <li>
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/coordinates">Cordenadas</NavLink>
                </li>
                <li>
                    <NavLink to="/ordinations">Ordenação</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;