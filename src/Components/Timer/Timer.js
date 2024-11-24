import React, { useState, useEffect } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        if(!isRunning)
            return;
        const interval = setInterval(()=>{
            setSeconds((prevCount) => prevCount + 1 );
        }, 1000);
        return() => {
            clearInterval(interval);
        };
    },[isRunning]);
    const startTimer = () => {
        setSeconds(0);
        setIsRunning(true);
    };

    const restartTimer = () => {
        setSeconds(0);
        setIsRunning(true);
    };

    const resumeTimer = () => {
        if(!isRunning && seconds == 0) return;
        setIsRunning(true);
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };
return (
    <div>
        <p>Seconds Elapsed: {seconds}</p>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={resumeTimer}>Resume Timer</button>
        <button onClick={pauseTimer}>Pause Timer</button>
        <button onClick={restartTimer}>Restart Timer</button>
    </div>
    );
    
    
};

export default Timer;