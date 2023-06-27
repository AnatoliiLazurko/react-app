import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import './users.css';
import axios from 'axios';
import UsersContext from '../../contexts/UsersContext';
import FavoriteFilms from '../Films/FavoriteFilms';

const Users = () => {
    const users = useContext(UsersContext);
    
    const [search, setSearch] = useSearchParams();
    const [textSearch, setTextSearch] = useState(search.get('q') ?? '');

    const searchHendler = (e) => {
        setTextSearch(e.target.value);
        setSearch({ q: e.target.value });
    }

    const filterUsers = (user) => {
        if (search.get('q')) {
            return new RegExp(search.get("q"), 'i').test(user.name);
        }
        return user;
    }   

    return (
        <>
            <div className='users'>
                <div className='users-list'>

                    <input type="text" value={textSearch} onChange={searchHendler}/>

                    {users.filter(filterUsers).map(user => <NavLink to={`/users/${user.id}`} key={user.id}>{ user.name }</NavLink>)}
                </div>
                <Outlet />
            </div>

            <FavoriteFilms />
        </>
    );
}

export default Users;
