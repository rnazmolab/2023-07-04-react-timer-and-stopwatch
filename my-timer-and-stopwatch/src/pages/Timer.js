import React, { useState, useEffect } from "react";

export function Timer() {
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setSeconds(30);
  };

  return (
    <div>
      <h1>Timer App</h1>
      <p>{seconds}s</p>
      {!isActive && seconds === 30 && (
        <button onClick={handleStart}>Start</button>
      )}
      {isActive && <button onClick={handleStop}>Stop</button>}
      {!isActive && seconds < 30 && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}
