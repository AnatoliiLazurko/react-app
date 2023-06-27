import React, { useContext, useEffect, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteFilmsContext from '../../contexts/FavoriteFilmsContext';

const FilmInfo = ({ film }) => {

    const { favoriteFilms, setFavoriteFilms } = useContext(FavoriteFilmsContext);

    const addFavorite = () => {
        setFavoriteFilms([...favoriteFilms, film]);
    }

    const removeFavorite = () => {
        setFavoriteFilms(favoriteFilms.filter(item => item.imdbID !== film.imdbID));
    }

    useEffect(() => {
        localStorage.setItem('favoriteFilms', JSON.stringify(favoriteFilms));
    }, [favoriteFilms])

    const checkLiked = favoriteFilms.some(item => item.imdbID === film.imdbID);

    return (
        <div className="col-sm-4">
            <div className='film-poster'>
                <img className='film-img' src={film.Poster} alt={film.Title} />
                <div className='film-line'></div>
                <div className='film-info'>
                    <p className='filmName'>{film.Title}</p>
                    <p className='filmYear'>{film.Year}</p>
                </div>

                {checkLiked ? (
                    <FavoriteIcon className='likeFilm' onClick={removeFavorite} />
                ) : (
                    <FavoriteBorderIcon className='likeFilm' onClick={addFavorite} />
                )}

            </div>
        </div>
    );
}

export default FilmInfo;