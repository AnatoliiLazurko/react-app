import React from 'react';
import FilmInfo from './FilmInfo';

const FilmItems = ({ data }) => {

    return (
        <div>
            <div className='row'>
                {
                    data.map((film) => (
                        <FilmInfo film={film} key={film.imdbID} />
                    ))
                }
            </div>
        </div>
    );
}

export default FilmItems;