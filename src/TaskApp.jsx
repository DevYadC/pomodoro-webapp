
import CountdownTimer from "./CountDownTimer";
import TaskList from "./TaskList";
import { useState } from 'react';
import AddTaskForm from "./AddTaskForm";
import './TaskApp.css'

export default function TaskApp({ tasks, setTasks, setSessionComplete }) {


    const [currentSession, setCurrentSession] = useState(
        {
            time: 0,
            taskId: 1
        }
    )

    return (
        <div className="TaskApp">


            <div className="TaskColumn">
                <TaskList
                    setCurrentSession={setCurrentSession}
                    tasks={tasks} setTasks={setTasks}
                />

                <AddTaskForm
                    setTasks={setTasks} />
            </div>

            <CountdownTimer
                currentSession={currentSession} setCurrentSession={setCurrentSession}
                tasks={tasks} setTasks={setTasks}
                setSessionComplete={setSessionComplete} />

        </div>
    )


}