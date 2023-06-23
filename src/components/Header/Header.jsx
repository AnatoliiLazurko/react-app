import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import ThemeContext from '../../contexts/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={ theme }>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/films">Films</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/users">Users</NavLink>

            {theme === 'light' ? <DarkModeIcon onClick={toggleTheme} /> : <LightModeIcon onClick={toggleTheme} />}
        </header>
    );
}

export default Header;
