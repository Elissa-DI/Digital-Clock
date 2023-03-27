import React  from "react";
import { useState, useEffect } from "react";
import './Timer.css';

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [timerOn, setTimeOn] = useState(false);
       useEffect(() => {
          let interval = null;
            if(timerOn) {
                interval = setInterval(() => {
                    setTimer(prevTime => prevTime + 10)
                }, 10)
            } else {
                clearInterval(interval);
            }
            return () => clearInterval(interval);
       }, [timerOn]);
     return (
       <div className="Timer">
           <div className="time-all">
            <span>{("0" + Math.floor(timer / 60000) % 60).slice(-2)}:</span>
            <span>{("0" + Math.floor(timer / 1000) % 60).slice(-2)}:</span>
            <span>{("0" + (timer / 10) % 100).slice(-2)}</span>
            </div>
           <div>
            {!timerOn && timer === 0 && (
              <button onClick={() => setTimeOn(true)} className="btn-1">Start</button>
            )}
            {timerOn && (
              <button onClick={() => setTimeOn(false)} className="btn-2">Stop</button>
            )}
            {!timerOn && timer !== 0 && (
              <button onClick={() => setTimeOn(true)} className="btn-3">Resume</button>
            )}
            {!timerOn && timer > 0 && (
              <button onClick={() => setTimer(0)} className="btn-4">Reset</button>
            )}
           </div>
       </div>
     );
}

export default Timer;