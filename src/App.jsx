import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';


function App() {

  const exampleTasks = [
    {
      id: uuidv4(),
      name: "code",
      pomodoros: [{ time: 15 }, { time: 20 }]
    },
    {
      id: uuidv4(),
      name: "read",
      pomodoros: [{ time: 10 }, { time: 30 }, { time: 15 }]
    }
  ];

  const [tasks, setTasks] = useState(exampleTasks)
  const [taskName, setTaskName] = useState('')
  console.log(`tasks in app: ${tasks}`);
  return (
    <div className="App">

      <AddTaskForm setTasks={setTasks} setTaskName={setTaskName} taskName={taskName} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
