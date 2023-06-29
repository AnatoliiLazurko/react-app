import React, { useRef, useState } from 'react';
import FavoriteFilms from '../Films/FavoriteFilms';
import Forma from '../Forms/Forma';
import Forms from '../Forms/Forms';
import Timer from './Timer';
import Video from './Video';

const Counter = () => {

    const [count, setCount] = useState(0);
    const ref = useRef(0);


    const decrement = () => {
        setCount(count - 1);
    }

    const increment = () => {
       setCount(count + 1);
    }

    const handleClick = () => {
        ref.current = ref.current + 1;
        alert(ref.current);
    }

    return (
        <>
            <div>
                <button onClick={()=>{ decrement() }}>-</button>
                <span>{count}</span>
                <button onClick={() => { increment() }}>+</button>
                
            </div>

            <hr />

            <button ref={ref} onClick={handleClick}>Click me</button>

            <hr />

            <Timer />

            <hr />

            <Video />

            <hr />

            {/* FORMIK */}

            <Forma />

            <Forms />

            <FavoriteFilms />
        </>
    );
}

export default Counter;
