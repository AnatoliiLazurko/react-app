import React from 'react';

const FilterToDo = () => {
    const hello = (event) => {
        // alert("Hello");
        console.log(event.target)
    }

    return (
        <div>
            <button onClick={() => {alert("Hello") }}>Show All</button>
            <button onClick={hello}>Show active</button>
            <button onClick={hello}>Show completed</button>
        </div>
    );
}

export default FilterToDo;