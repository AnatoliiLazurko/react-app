import React from 'react';
import FilmInfo from './FilmInfo';

const FilmItems = ({ data }) => {

    return (
        <div>
            <div className='row'>
                {data.map((item) => (
                    <FilmInfo item={item} />
                ))}
            </div>
        </div>
    );
}

export default FilmItems;