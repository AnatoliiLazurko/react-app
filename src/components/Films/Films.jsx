import React, { useState } from 'react';
import './filmStyle.css';
import FilmForm from './FilmForm';
import FilmItems from './FilmItems';
import filmsArray from './filmsArray';
import { v4 as uuidv4 } from 'uuid';
import AddFilm from './AddFilm';

const Films = () => {

    const [filmList, setFilmList] = useState(filmsArray);

    const addFilm = (name, year, image, director, description) => {

        let newFilm = ({
            id: uuidv4(),
            name: name,
            year: year,
            image: image, 
            director: director,
            description: description
        });

        setFilmList([...filmList, newFilm]);

    }

    return (
        <div className='filmsBlock'>
            <h1 className='filmHeader'>List Of Films</h1>
            <FilmForm />
    
            <FilmItems data={filmList} />

            <AddFilm addFilm={addFilm} />
        </div>
    );
}

export default Films;
