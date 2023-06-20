import React from 'react';

const FilterButton = ({text, setFilter}) => {
    return (
        <button onClick={()=>setFilter(text)}>
            Show {text}
        </button>
    );
}

export default FilterButton;
