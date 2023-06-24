import React, { useState } from 'react';
import './filmStyle.css';
import FilmSearch from './FilmSearch';
import FilmItems from './FilmItems';

const Films = () => {

    const [films, setFilms] = useState([]);
    console.log(films);

    return (
        <div className='filmsBlock'>
            <h1 className='filmHeader'>List Of Films</h1>

            <FilmSearch setFilms={ setFilms } />
    
            <FilmItems data={films} />
            
        </div>
    );
}

export default Films;
