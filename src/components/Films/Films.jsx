import React, { useState } from 'react';
import './filmStyle.css';
import FilmForm from './FilmForm';
import FilmItems from './FilmItems';
import filmsArray from './filmsArray';
import { v4 as uuidv4 } from 'uuid';
import AddFilm from './AddFilm';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const Films = () => {

    const apiKey = "bfec6a42";

    const [films, setFilms] = useState([]);
    const [search, setSearch] = useSearchParams();
    const [searchName, setSearchName] = useState(search.get('q') ?? '');
    const [searchType, setSearchType] = useState(search.get('type') ?? '');
    const [searchYear, setSearchYear] = useState(search.get('y') ?? '');

    const getFilms = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${searchName}&type=${searchType}&y=${searchYear}&apikey=${apiKey}`);
            setFilms(response.data.Search);
        } catch (error) {
            console.error(error);
            setFilms([]);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (searchName.trim().length) {
            getFilms();
        }
    }

    const seachNameHandler = (e) => {
        setSearchName(e.target.value);
        setSearch({ ...search, q: e.target.value})
    }

    const seachTypeHandler = (e) => {
        setSearchType(e.target.value);
        setSearch({ ...search, type: e.target.value})
    }

    const seachYearHandler = (e) => {
        setSearchYear(e.target.value);
        setSearch({ ...search, y: e.target.value})
    }

    return (
        <div className='filmsBlock'>
            <h1 className='filmHeader'>List Of Films</h1>
            {/* <FilmForm /> */}
            <div className='film-form'>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='Film name...' value={searchName} onChange={seachNameHandler} />
                    
                    <select value={searchType} onChange={seachTypeHandler}>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                    </select>
                    
                    <input type="number" placeholder='Film year...' value={searchYear} onChange={seachYearHandler} />
                
                    <button>Search</button>
                </form>
            </div>
    
            <FilmItems data={films} />

            {/* <AddFilm addFilm={addFilm} /> */}
        </div>
    );
}

export default Films;
