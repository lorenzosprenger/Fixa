import React, { useState, useEffect } from 'react';

function ClockComponent() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMessage('Hello, world!');
    }, 2000);

    setTimeout(() => {
      setMessage('');
    }, 4000);
  }, []);

  return (
    <div>
      <h1>{currentTime.toLocaleTimeString()}</h1>
      <p>{message}</p>
    </div>
  );
}

export default ClockComponent;