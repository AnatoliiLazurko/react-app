import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/films">Films</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/users">Users</NavLink>
        </header>
    );
}

export default Header;
