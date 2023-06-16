import React from 'react';

const FilmInfo = ({item}) => {
    return (
        <div className="col-sm-4">
            <div className='film-poster'>
                <img className='film-img' src={item.image} alt={item.name} />
                <div className='film-line'></div>
                <div className='film-info'>
                    <p className='filmName'>{item.name}</p>
                    <p className='filmYear'>{item.year}</p>
                </div>
            </div>
        </div>
    );
}

export default FilmInfo;
