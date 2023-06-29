import React, { useEffect, useRef, useState } from 'react';
import movie from './mov_bbb.mp4';

const Video = () => {
    const ref = useRef(null);
    const [isPlaying, setPlaying] = useState(false)

    //ref.current.play()

    useEffect(() => {
        ref.current.currentTime = localStorage.getItem("time");
        document.body.click();
    })

    const handleClick = () => { 
    setPlaying(!isPlaying);

    if (!isPlaying)
        ref.current.play();
    else
        ref.current.pause();
    }


  return (
    <div>
      <button onClick={handleClick}> {isPlaying ? "Pause" : "Play"}</button>

      <video
        loop
        ref={ref}
        onTimeUpdate={() =>
          localStorage.setItem("time", ref.current.currentTime)
        }
      >
        <source src={movie} />
      </video>
    </div>
  );
}

export default Video;