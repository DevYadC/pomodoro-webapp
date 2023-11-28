
import CountdownTimer from "./CountDownTimer";
import TaskList from "./TaskList";
import { useState } from 'react';
import AddTaskForm from "./AddTaskForm";
import './TaskApp.css'

export default function TaskApp({ tasks, setTasks, setSessionComplete }) {

    //timer length for task which is currently in session on countdown
    const [sessionTime, setSessionTime] = useState(0);
    //id of the task for which timer is running 
    const [sessionTaskId, setSessionTaskId] = useState(1);
    //to restart countdown even if sessionTime does not change
    const [refresh, setRefresh] = useState(0);

    const [currentSession, setCurrentSession] = useState(
        {
            currentSessionTime: 0,
            currentSessionTaskId: 1
        }
    )

    return (
        <div className="TaskApp">


            <div className="TaskColumn">
                <TaskList
                    setSessionTime={setSessionTime}
                    setSessionTaskId={setSessionTaskId}
                    tasks={tasks} setTasks={setTasks}
                    refresh={refresh} setRefresh={setRefresh} />

                <AddTaskForm
                    setTasks={setTasks} />
            </div>

            <CountdownTimer
                sessionTime={sessionTime}
                sessionTaskId={sessionTaskId}
                tasks={tasks} setTasks={setTasks}
                refresh={refresh}
                setSessionComplete={setSessionComplete} />

        </div>
    )


}