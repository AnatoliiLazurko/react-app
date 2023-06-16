import React from 'react';
import './filmStyle.css';
import FilmForm from './FilmForm';
import FilmItems from './FilmItems';
import filmsArray from './filmsArray';

const Films = () => {
    return (
        <div className='filmsBlock'>
            <h1 className='filmHeader'>List Of Films</h1>
            <FilmForm />
    
            <FilmItems data={filmsArray} />
        </div>
    );
}

export default Films;
