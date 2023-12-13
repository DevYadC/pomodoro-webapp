
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './AddTaskForm.css'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
export default function AddTaskForm({ setTasks }) {


    const addTask = (e) => {
        e.preventDefault();
        if (!taskName) {
            setInputError(true);
            return;
        }
        const newTask = { id: uuidv4(), name: taskName, pomodoros: [] }
        setTasks((tasks) => [...tasks, newTask])
        setTaskName('');
        setDisplayForm(!displayForm);
        setInputError(false);

    }

    const changeInputName = (e) => {
        setTaskName(e.target.value)
    }

    const toggleFormDisplay = () => {
        setDisplayForm(!displayForm);
    }

    const [taskName, setTaskName] = useState('')
    const [displayForm, setDisplayForm] = useState(false);
    const [inputError, setInputError] = useState(false);
    return (

        <div className="AddTaskForm">

            {displayForm ? null : <AddCircleIcon onClick={toggleFormDisplay} style={{ color: "#666A86", cursor: 'pointer', fontSize: '36px' }}></AddCircleIcon>}



            {displayForm ?
                <form onSubmit={addTask} className='taskForm' >
                    <div className='xButton'>
                        <Button onClick={toggleFormDisplay} style={{
                            backgroundColor: '#C66875',
                            color: 'white',
                            fontSize: '0.9rem',
                            padding: '3px 6px',// Reduced padding
                            minWidth: '0px', // Set minimum width
                            height: '20px'
                        }}>x</Button>
                    </div>
                    <input className='taskName' placeholder='task name' type='text' id='taskName' value={taskName} onChange={changeInputName} />
                    <div className='submitButton'>
                        <Button onClick={addTask} style={{
                            backgroundColor: '#b2c9ab', color: 'white',
                            fontSize: '0.9rem',
                            padding: '3px 6px', // Reduced padding
                            width: '20px', // Set minimum width
                            height: '20px'
                        }}>submit</Button>
                    </div>
                    <div className='errorAlert'>
                        {inputError ? <Alert severity="error" style={{ fontSize: '0.7rem', padding: '1px 8px', margin: '7px', fontWeight: 'bold', border: 'solid #C66875 1px' }} >empty input</Alert> : null}
                    </div>

                </form> : null}


        </div>
    )


}