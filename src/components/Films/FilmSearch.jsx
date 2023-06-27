import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilmSearch = ({ setFilms }) => {

    const apiKey = "bfec6a42";

    const [search, setSearch] = useSearchParams();
    const [searchName, setSearchName] = useState(search.get('title') ?? '');
    const [searchType, setSearchType] = useState(search.get('type') ?? '');
    const [searchYear, setSearchYear] = useState(search.get('year') ?? '');

    const getFilms = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${searchName}&type=${searchType}&y=${searchYear}&apikey=${apiKey}`);
            setFilms(response.data.Search);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFilms();
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        
        if (searchName.trim().length) {
            getFilms();
        }
    }

    const seachNameHandler = (e) => {
        setSearchName(e.target.value);
        setSearch({ title: e.target.value, type: search.get('type'), year: search.get('year') });
    }

    const seachTypeHandler = (e) => {
        setSearchType(e.target.value);
        setSearch({ title: search.get('title'), type: e.target.value, year: search.get('year') });
    }

    const seachYearHandler = (e) => {
        setSearchYear(e.target.value);
        setSearch({title: search.get('title'), type: search.get('type'), year: e.target.value});
    }

    return (
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
    );
}

export default FilmSearch;
