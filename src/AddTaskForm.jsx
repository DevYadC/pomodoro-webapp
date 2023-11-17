
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
export default function AddTaskForm({ setTasks }) {


    const addTask = (e) => {
        e.preventDefault();
        if (!taskName) {
            alert("cant submit empty task name");
            return;
        }
        const newTask = { id: uuidv4(), name: taskName, pomodoros: [] }
        setTasks((tasks) => [...tasks, newTask])
        setTaskName('');

    }

    const changeInputName = (e) => {
        setTaskName(e.target.value)
    }

    const [taskName, setTaskName] = useState('')
    return (

        <div className="AddTaskForm">

            <form onSubmit={addTask}>
                <label htmlFor='taskName'>add task here: </label>
                <input type='text' id='taskName' value={taskName} onChange={changeInputName} />
                <button>submit</button>
            </form>

        </div>
    )


}