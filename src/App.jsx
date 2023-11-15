import React from 'react';
import TaskList from './TaskList';
import { useState } from 'react';

function App() {

  const exampleTasks = [
    {
      name: "code",
      pomodoros: [{ time: 15 }, { time: 20 }]
    },
    {
      name: "read",
      pomodoros: [{ time: 10 }, { time: 30 }, { time: 15 }]
    }
  ];

  const addTask = (e) => {
    e.preventDefault();
    const newTask = { name: taskName, pomodoros: [] }
    setTasks((tasks) => [...tasks, newTask])
    setTaskName('');

  }

  const changeInputName = (e) => {
    setTaskName(e.target.value)
  }

  const [tasks, setTasks] = useState(exampleTasks)
  const [taskName, setTaskName] = useState('')

  return (
    <div className="App">

      <form onSubmit={(e) => { addTask(e) }}>
        <label htmlFor='taskName'>add task: </label>
        <input type='text' id='taskName' value={taskName} onChange={(e) => { changeInputName(e) }} />
        <button>submit</button>
      </form>

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
