import TaskItem from "./TaskItem";
import CountdownTimer from "./CountDownTimer";

import { useState } from 'react';

export default function TaskList({ tasks, setTasks }) {


    const [sessionTime, setSessionTime] = useState(20);
    const [sessionTaskId, setSessionTaskId] = useState(1);
    console.log(`tasks in list: ${tasks}`);

    return (
        <div className="TaskList">
            <h2>session time: {sessionTime}</h2>
            <h2>current session id: {sessionTaskId}</h2>
            <ul>
                {tasks.map((task, index) => (
                    <TaskItem task={task} setSessionTime={setSessionTime} setSessionTaskId={setSessionTaskId} />
                ))}
            </ul>
            <CountdownTimer sessionTime={sessionTime} sessionTaskId={sessionTaskId} tasks={tasks} setTasks={setTasks} />
        </div>
    )


}