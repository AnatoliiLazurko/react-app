import React, { useContext } from 'react';
import FavoriteFilmsContext from '../../contexts/FavoriteFilmsContext';

const FavoriteFilms = () => {

    const { favoriteFilms } = useContext(FavoriteFilmsContext);

    return (

        <>
            {favoriteFilms.length === 0 ? '' :
                
                <div className='fav-films'>
                    <div className='fav-header'>
                        Favorite Films
                    </div>
                    <div className='list-fav'>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Year</th>
                            </tr>
                            </thead>
                            <tbody>
                                {favoriteFilms.map(favorite => (
                                    <tr key={favorite.imdbID}>
                                        <td>{favorite.Title}</td>
                                        <td>{favorite.Type}</td>
                                        <td>{favorite.Year}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </>
    );
}

export default FavoriteFilms;
