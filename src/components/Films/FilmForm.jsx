import React from 'react';

const FilmFrom = () => {

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className='film-form'>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Film name...'/>
                <button className='btn-search'>Search</button>
            </form>
        </div>
    );
}

export default FilmFrom;
