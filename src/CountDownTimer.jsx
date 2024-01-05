import React, { useState, useEffect, useRef } from 'react';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './CountDownTimer.css';

function CountdownTimer({ currentSession, setCurrentSession, tasks, setTasks, setSessionComplete }) {
    const [count, setCount] = useState(currentSession.time);
    const [isRunning, setIsRunning] = useState(false);
    const workerRef = useRef(null);



    const updateTasks = () => {
        setTasks(tasks.map(task => {
            if (task.id === currentSession.taskId) {
                return {
                    ...task,
                    pomodoros: [...task.pomodoros, { time: currentSession.time / 60 }]
                };
            }
            return task;
        }));
    };

    const timerComplete = () => {
        setIsRunning(false);
        setSessionComplete(true);
        updateTasks();
        sendNotification();
        console.log(`session complete: ${currentSession}`)
    };

    useEffect(() => {
        workerRef.current = new Worker('/timerWorker.js');

        workerRef.current.onmessage = (e) => {
            setCount(e.data);
            if (e.data === 0) {
                timerComplete();
            }
        }

        return () => {
            workerRef.current.terminate();
        };
    }, [currentSession]);

    useEffect(() => {
        setCount(currentSession.time);
        if (currentSession.time > 0) {
            setIsRunning(true);
            setSessionComplete(false);
            console.log(currentSession)
            workerRef.current.postMessage({ action: 'start', count: currentSession.time });
        }
        else {
            setIsRunning(false);
        }
    }, [currentSession, setSessionComplete]);

    const sendNotification = () => {
        if (Notification.permission === 'granted') {
            new Notification('Timer Finished🍅', {
                body: 'Your pomodoro session is complete!🍅',
                // Optional: Add an icon URL here
            });
        }
    };





    const handleStart = () => {
        if (count > 0 && !isRunning) {
            setCurrentSession(prevSession => ({ ...prevSession, time: prevSession.time, taskId: prevSession.taskId }))

        }
    };

    const handlePause = () => {
        if (isRunning) {
            setIsRunning(false);
            workerRef.current.postMessage({ action: 'stop' });
        }
    };

    const handleReset = () => {
        setIsRunning(false);
        setCount(currentSession.time);
        workerRef.current.postMessage({ action: 'reset', count: currentSession.time });
    };

    const progress = (count / currentSession.time) * 100;

    return (
        <div className='CountDownTimer'>
            <div className='ProgressCircle'>
                <Stack spacing={2} direction="row">
                    <CircularProgressWithLabel value={progress ? progress : 100} count={count} />
                </Stack>
            </div>

            <div className='CountDownTimerButtons'>
                <div className='CountDownTimerStartButton'>
                    <Button onClick={handleStart} disabled={isRunning} variant="contained" color="success" style={{ backgroundColor: '#92B6B1', fontSize: '18px' }}>
                        Start
                    </Button>
                </div>
                <div className='CountDownTimerPauseButton'>
                    <Button onClick={handlePause} disabled={!isRunning} variant="contained" color="error" style={{ backgroundColor: '#d1495b', fontSize: '18px' }}>
                        Pause
                    </Button>
                </div>
                <div className='CountDownTimerResetButton'>
                    <Button onClick={handleReset} variant="contained" color="secondary" style={{ backgroundColor: '#666A86', fontSize: '18px' }}>
                        Reset
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default CountdownTimer;
