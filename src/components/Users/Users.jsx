import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import './users.css';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useSearchParams();
    const [textSearch, setTextSearch] = useState(search.get('q') ?? '');

    const getUsers = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
    }

    useEffect(() => {
        getUsers();
    }, []);

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
        <div className='users'>
            <div className='users-list'>

                <input type="text" value={textSearch} onChange={searchHendler}/>

                {users.filter(filterUsers).map(user => <NavLink to={`/users/${user.id}`} key={user.id}>{ user.name }</NavLink>)}
            </div>
            <Outlet />
        </div>
    );
}

export default Users;
