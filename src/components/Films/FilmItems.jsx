import React, { useEffect, useState } from 'react';
import FilmInfo from './FilmInfo';

const FilmItems = ({ data }) => {

    const [sortType, setSortType] = useState('all');

    const sortFilm = () => {
    if (sortType === 'growth') {
        return [...data].sort((a, b) => a.Year.localeCompare(b.Year));
        }
        if (sortType === 'decline') {
        return [...data].sort((a, b) => b.Year.localeCompare(a.Year));
        }
        return data;
    }


    return (
        <div>
            <div className='sortingForm'>
                <form>
                    <label>Sorting by year: </label>
                    <select value={sortType} onChange={(e) => setSortType(e.target.value)} >
                        <option value="all" selected>show all</option>
                        <option value="decline">decline</option>
                        <option value="growth">growth</option>
                    </select>
                </form>
            </div>

            <div className='row'>
                {data && data.length > 0 ? (
                    sortFilm().map((film) => (
                        <FilmInfo film={film} key={film.imdbID} />
                    ))
                ) : (
                    <p className='filmError'>No films found</p>
                )}
            </div>
        </div>
    );
}

export default FilmItems;