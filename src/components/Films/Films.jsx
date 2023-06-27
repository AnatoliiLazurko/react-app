import React, { useState } from 'react';
import './filmStyle.css';
import FilmSearch from './FilmSearch';
import FilmItems from './FilmItems';
import FavoriteFilms from './FavoriteFilms';

const Films = () => {

    const [films, setFilms] = useState([]);

    return (
        <>
            <div className='filmsBlock'>
                <h1 className='filmHeader'>List Of Films</h1>

                <FilmSearch setFilms={ setFilms } />
        
                <FilmItems data={films} />
                
            </div>

            <FavoriteFilms />
        </>
    );
}

export default Films;
