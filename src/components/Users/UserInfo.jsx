import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UsersContext from '../../contexts/UsersContext';

const UserInfo = () => {

    const { id } = useParams();
    const users = useContext(UsersContext);

    const [user, setUser] = useState({});

    const getUser = async () => {
        // const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        // setUser(response.data);
        setUser(users.find(user => user.id == id))
    }

    useEffect(() => {
        getUser();
    }, [id, users]);

    return (
        <div>
            <h3>{user?.name}</h3>
            <h4>{user?.email}</h4>
        </div>
    );
}

export default UserInfo;
