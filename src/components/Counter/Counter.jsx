import React, { useState } from 'react';
import FavoriteFilms from '../Films/FavoriteFilms';
import Forma from '../Forms/Forma';
import Forms from '../Forms/Forms';

const Counter = () => {

    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1);
    }

    const increment = () => {
       setCount(count + 1);
    }

    return (
        <>
            <div>
                <button onClick={()=>{ decrement() }}>-</button>
                <span>{count}</span>
                <button onClick={() => { increment() }}>+</button>
                
            </div>

            {/* FORMIK */}

            <Forma />

            <Forms />

            <FavoriteFilms />
        </>
    );
}

export default Counter;
