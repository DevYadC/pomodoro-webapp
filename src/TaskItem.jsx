
import { useState } from 'react';
import './TaskItem.css'
import TaskItemName from './TaskItemName';
import TaskItemForm from './TaskItemForm';
import TaskItemPomodoros from './TaskItemPomodoros';

import Button from '@mui/material/Button';

export default function TaskItem({ tasks, setTasks, task, setSessionTime, setSessionTaskId, refresh, setRefresh }) {

    // State to hold the selected time from the slider
    const [taskTime, setTaskTime] = useState(20);



    return (
        <div className="TaskItem">

            <div className="TaskItemLeft">

                <TaskItemName
                    taskName={task.name} />

                <TaskItemForm
                    taskTime={taskTime} setTaskTime={setTaskTime}
                    setSessionTaskId={setSessionTaskId}
                    setSessionTime={setSessionTime}
                    refresh={refresh} setRefresh={setRefresh}
                    tasks={tasks} setTasks={setTasks}
                    task={task} />

            </div>


            <TaskItemPomodoros
                task={task} />




        </div>
    );
}
