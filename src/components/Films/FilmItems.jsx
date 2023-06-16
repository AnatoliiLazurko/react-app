import React from 'react';
import FilmInfo from './FilmInfo';

const FilmItems = ({ data }) => {

    const itemsPerColumn = Math.ceil(data.length / 3);
    const columns = [];

    for (let i = 0; i < 3; i++) {
        const columnItems = data.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn);

        columns.push(
        <div key={i} className="col-sm-4">
            {columnItems.map((item) => (
                <FilmInfo item={item} />
            ))}
        </div>
        );
    }

    return (
        <div>
            <div className='row'>
                {columns}  
            </div>
        </div>
    );
}

export default FilmItems;
