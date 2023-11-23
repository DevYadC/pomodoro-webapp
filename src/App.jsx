import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TaskApp from './TaskApp';



function App() {

  //starter task data 
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


  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from localStorage or set default
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : exampleTasks;
  });

  useEffect(() => {
    // Save tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);




  return (
    <div className="App">
      <TaskApp tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
