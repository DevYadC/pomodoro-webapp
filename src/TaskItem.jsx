
import { useState } from 'react';

export default function TaskItem({ task, setSessionTime, setSessionTaskId }) {
    // State to hold the selected time from the slider
    const [taskTime, setTaskTime] = useState(20);

    const handleSliderChange = (event) => {
        setTaskTime(event.target.value);
    };

    const handleStartClick = () => {
        setSessionTime(taskTime);
        setSessionTaskId(task.id)
    };

    return (
        <div className="TaskItem">
            <div>
                <span>{task.name}/{task.id}</span>
                <input
                    type="range"
                    min="5"
                    max="60"
                    value={taskTime}
                    onChange={handleSliderChange}
                />
                <span>{taskTime} seconds</span>
                <button onClick={handleStartClick}>Start</button>
            </div>
            <div>
                {task.pomodoros.map((pomodoro, pomodoroIndex) => (
                    <span key={pomodoroIndex}>🍅{pomodoro.time} seconds, </span>
                ))}
            </div>
        </div>
    );
}
