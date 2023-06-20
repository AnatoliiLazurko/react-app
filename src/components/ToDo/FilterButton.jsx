import React from 'react';

const FilterButton = ({ text, filter, setFilter }) => {
    
    const checkActive = filter === text ? 'active-filter' : '';

    return (
        <button onClick={()=>setFilter(text)} className={checkActive}>
            Show {text}
        </button>
    );
}

export default FilterButton;
