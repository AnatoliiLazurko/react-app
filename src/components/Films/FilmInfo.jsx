import React, { useState } from 'react';

const FilmInfo = ({ item }) => {
    
    const [details, setDetails] = useState('');
    const [textButton, setTextButton] = useState(false);
    const [buttonIcon, setButtonIcon] = useState(<i className='fa fa-chevron-circle-down'></i>);

    const showDetails = (director, description) => {
        const _director = `Director: ${director}`;
        const _description = `Description: ${description}`;
        if (details === '') {
            setDetails({ _director, _description });
            setTextButton(true);
            setButtonIcon(<i className='fa fa-chevron-circle-up'></i>);
        }
        else {
            setDetails('');
            setTextButton(false);
            setButtonIcon(<i className='fa fa-chevron-circle-down'></i>);
        }
    }

    let changeTextButton = textButton === false ? 'Show details' : 'Hide details';

    return (
        <div className="col-sm-4">
            <div className='film-poster'>
                <img className='film-img' src={item.image} alt={item.name} />
                <div className='film-line'></div>
                <div className='film-info'>
                    <p className='filmName'>{item.name}</p>
                    <p className='filmYear'>{item.year}</p>
                </div>
                <button className='btn-details' onClick={() => showDetails(item.director, item.description)}>{changeTextButton}{buttonIcon}</button>
                <div className='details-block'>
                    <h4>{details._director}</h4>
                    <h5>{details._description}</h5>
                </div>
            </div>
        </div>
    );
}

export default FilmInfo;