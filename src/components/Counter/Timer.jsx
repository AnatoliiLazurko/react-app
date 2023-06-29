import React, { useRef, useState } from 'react';

const Timer = () => {

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);

    let interval = useRef(null);
    let timerElem = useRef(null);

    const handlerStart = () => {
        
        timerElem.current.style.color = 'red';
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(interval.current);

        interval.current = setInterval(() => {
            setNow(Date.now());
        }, 100);
    }

    const handlerStop =  () => {
        clearInterval(interval.current);
    }

    let seconds = (now - startTime) / 1000;

    return (
        <div>
            <div ref={timerElem}> {seconds} </div>
            <button onClick={handlerStart}>Start</button>
            <button onClick={handlerStop}>Stop</button>
        </div>
    );
}

export default Timer;
