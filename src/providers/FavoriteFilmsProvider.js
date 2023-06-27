import React, { useEffect, useState } from 'react';
import FavoriteFilmsContext from '../contexts/FavoriteFilmsContext';

const FavoriteFilmsProvider = ({ children }) => {

    const [favoriteFilms, setFavoriteFilms] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem('favoriteFilms');
        if (localData) {
            const parsedData = JSON.parse(localData);
            setFavoriteFilms(parsedData);
        }
    }, []);

    return (
        <FavoriteFilmsContext.Provider value={{favoriteFilms, setFavoriteFilms}}>
            { children }
        </FavoriteFilmsContext.Provider>
    );
}

export default FavoriteFilmsProvider;