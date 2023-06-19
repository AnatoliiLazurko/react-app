import React, { useState } from 'react';

const AddFilm = ({ addFilm }) => {
    
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [image, setImage] = useState('');
    const [director, setDirector] = useState('');
    const [description, setDescription] = useState('');
    const [errorData, setErrorData] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (name.trim().length && year.trim().length && image.trim().length
            && director.trim().length && description.trim().length) {
            addFilm(name, year, image, director, description);
            setName('');
            setYear('');
            setImage('');
            setDirector('');
            setDescription('');
            setErrorData('');
        }
        else {
            setErrorData('False data!');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        }
        if (name === "year") {
            setYear(value);
        }
        if (name === "image") {
            setImage(value);
        }
        if (name === "director") {
            setDirector(value);
        }
        if (name === "description") {
            setDescription(value);
        }
    }

    return (
        <div className='addFilm-block'>
            <form onSubmit={submitHandler}>
                <h2>Add new film</h2>

                <label>Name</label><br />
                <input type="text" name='name' value={name} onChange={handleChange}/><br />
                {/* ---- */}
                <label>Year</label><br />
                <input min={1900} max={2023} type="number" name='year' value={year} onChange={handleChange}/><br />
                {/* ---- */}
                <label>Image</label><br />
                <input type="text" name='image' value={image} onChange={handleChange}/><br />
                {/* ---- */}
                <label>Director</label><br />
                <input type="text" name='director' value={director} onChange={handleChange}/><br />
                {/* ---- */}
                <label>Description</label><br />
                <input type="text" name='description' value={description} onChange={handleChange} /><br />
                <p className='errorData'>{errorData}</p>

                <button>Add</button>
            </form>
        </div>
    );
}

export default AddFilm;
