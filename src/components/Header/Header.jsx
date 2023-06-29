import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import ThemeContext from '../../contexts/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import FavoriteFilmsContext from '../../contexts/FavoriteFilmsContext';

const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const { favoriteFilms } = useContext(FavoriteFilmsContext);

    return (
        <header className={ theme }>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/films">Films</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/counters">Counters</NavLink>

            {theme === 'light' ? <DarkModeIcon className='themeToggle' onClick={toggleTheme} /> : <LightModeIcon className='themeToggle' onClick={toggleTheme} />}

            <i className='fa fa-heart likedFilms'><span>{ favoriteFilms.length }</span></i>

        </header>
    );
}

export default Header;
