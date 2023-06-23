import React, { useState } from 'react';

const FilmInfo = ({ film }) => {
    
    // const [details, setDetails] = useState('');
    // const [textButton, setTextButton] = useState(false);

    // const showDetails = (director, description) => {
    //     const _director = `Director: ${director}`;
    //     const _description = `Description: ${description}`;
    //     if (textButton === false) {
    //         setDetails({ _director, _description });
    //         setTextButton(true);
    //     }
    //     else {
    //         setDetails('');
    //         setTextButton(false);
    //     }
    // }

    // let changeTextButton = textButton === false ? 'Show details' : 'Hide details';
    // let changeButtonIcon = textButton === false ? <i className='fa fa-chevron-circle-down'></i> : <i className='fa fa-chevron-circle-up'></i>;

    return (
        <div className="col-sm-4">
            <div className='film-poster'>
                <img className='film-img' src={film.Poster} alt={film.Title} />
                <div className='film-line'></div>
                <div className='film-info'>
                    <p className='filmName'>{film.Title}</p>
                    <p className='filmYear'>{film.Year}</p>
                </div>
                {/* <button className='btn-details' onClick={() => showDetails(item.director, item.description)}>{changeTextButton}{changeButtonIcon}</button>
                <div className='details-block'>
                    <h4>{details._director}</h4>
                    <h5>{details._description}</h5>
                </div> */}
            </div>
        </div>
    );
}

export default FilmInfo;