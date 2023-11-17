import React, { useState, useEffect } from 'react';

function CountdownTimer({ sessionTime, sessionTaskId, tasks, setTasks }) {
    const [count, setCount] = useState(sessionTime);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        setCount(sessionTime);
        setIsRunning(false);
    }, [sessionTime]);

    useEffect(() => {
        let intervalId;

        if (isRunning && count > 0) {

            intervalId = setInterval(() => {
                setCount(prevCount => prevCount - 1);
            }, 1000);
        } else if (count === 0 && isRunning) {
            setIsRunning(false); // Stop the timer

            // Update tasks state to add a pomodoro
            setTasks(tasks.map(task => {
                if (task.id === sessionTaskId) {
                    return {
                        ...task,
                        pomodoros: [...task.pomodoros, { time: sessionTime }]
                    };
                }
                return task;
            }));


            alert("Time Is Up!");
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isRunning, count, sessionTaskId, tasks, setTasks, sessionTime]);


    const handleStart = () => {
        if (count > 0) {
            setIsRunning(true);
        }
    };

    const handleReset = () => {
        setIsRunning(false);
        setCount(sessionTime); // Reset the timer to the initial session time
    };

    return (
        <div>
            <h1>Countdown: {count} seconds</h1>
            <button onClick={handleStart} disabled={isRunning}>Start</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default CountdownTimer;

