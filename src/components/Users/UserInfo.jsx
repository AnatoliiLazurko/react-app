import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserInfo = () => {

    const { id } = useParams();

    const [user, setUser] = useState({});

    const getUser = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
    }

    useEffect(() => {
        getUser();
    }, [id]);

    return (
        <div>
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
        </div>
    );
}

export default UserInfo;
