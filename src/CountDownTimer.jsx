import React, { useState, useEffect } from 'react';
import CircularProgressWithLabel from './CircularProgressWithLabel'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import './CountDownTimer.css'

function CountdownTimer({ currentSession, tasks, setTasks, setSessionComplete }) {
    const [count, setCount] = useState(currentSession.time);
    const [isRunning, setIsRunning] = useState(false);




    useEffect(() => {
        setCount(currentSession.time);
        if (currentSession.time > 0) {
            setIsRunning(true);
            setSessionComplete(false);
        }
        else {
            setIsRunning(false);
        }
    }, [currentSession]);

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
                if (task.id === currentSession.taskId) {
                    return {
                        ...task,
                        pomodoros: [...task.pomodoros, { time: currentSession.time / 60 }]
                    };
                }
                return task;
            }));


            // Delay the alert to allow the state update and re-render
            setSessionComplete(true);

        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isRunning, count, tasks, setTasks, currentSession]);


    const handleStart = () => {
        if (count > 0) {
            setIsRunning(true);
        }
    };

    const handleReset = () => {
        setIsRunning(false);
        setCount(currentSession.time); // Reset the timer to the initial session time
    };

    const handlePause = () => {
        setIsRunning(false);
    };
    const progress = (count / currentSession.time) * 100;
    console.log(progress)
    return (
        <div className='CountDownTimer'>
            <div className='ProgressCircle'>
                <Stack spacing={2} direction="row">
                    <CircularProgressWithLabel value={progress ? progress : 100} count={count} />
                </Stack>
            </div>

            <div className='CountDownTimerButtons'>
                <div className='CountDownTimerStartButton'>
                    <Button onClick={handleStart} disabled={isRunning} variant="contained" color="success" style={{ backgroundColor: '#92B6B1' }}>
                        Start
                    </Button>
                </div>
                <div className='CountDownTimerPauseButton'>
                    <Button onClick={handlePause} disabled={!isRunning} variant="contained" color="error" style={{ backgroundColor: '#d1495b' }}>
                        Pause
                    </Button>
                </div>
                <div className='CountDownTimerResetButton'>
                    <Button onClick={handleReset} variant="contained" color="secondary" style={{ backgroundColor: '#666A86' }}>
                        Reset
                    </Button>
                </div>

            </div>
        </div>

    );
}

export default CountdownTimer;

