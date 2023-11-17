import TaskItem from "./TaskItem";
import CountdownTimer from "./CountDownTimer";

import { useState } from 'react';
import AddTaskForm from "./AddTaskForm";

export default function TaskList({ tasks, setTasks }) {


    const [sessionTime, setSessionTime] = useState(20);
    const [sessionTaskId, setSessionTaskId] = useState(1);
    console.log(`tasks in list: ${tasks}`);

    return (
        <div className="TaskList">
            <h2>session time: {sessionTime}</h2>
            <h2>current session id: {sessionTaskId}</h2>
            <AddTaskForm setTasks={setTasks} />
            <ul>
                {tasks.map((task) => (
                    <TaskItem task={task} setSessionTime={setSessionTime} setSessionTaskId={setSessionTaskId} tasks={tasks} setTasks={setTasks} />
                ))}
            </ul>
            <CountdownTimer sessionTime={sessionTime} sessionTaskId={sessionTaskId} tasks={tasks} setTasks={setTasks} />
        </div>
    )


}