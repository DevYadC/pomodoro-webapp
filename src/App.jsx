import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Alert from '@mui/material/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

import TaskApp from './TaskApp';
import PomodoroNavbar from './PomodoroNavbar';
import WhyPage from './WhyPage'; // Import WhyPage
import DonatePage from './DonatePage'; // Import DonatePage

function App() {
  const exampleTasks = [
    // ... your tasks
  ];

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : exampleTasks;
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [sessionComplete, setSessionComplete] = useState(false);

  return (
    <Router>
      <div className="App">
        <PomodoroNavbar />
        {sessionComplete ? (
          <Alert icon={false} style={{ backgroundColor: '#C66875', color: 'white' }} onClose={() => { setSessionComplete(false) }}>
            Time is up! — good job &#128516;
          </Alert>
        ) : null}

        <Routes>
          <Route path="/home" element={<TaskApp tasks={tasks} setTasks={setTasks} setSessionComplete={setSessionComplete} />} />
          <Route path="/why" element={<WhyPage />} />
          <Route path="/donate" element={<DonatePage />} />
          {/* You can add a default route to redirect to /home */}
          <Route path="*" element={<TaskApp tasks={tasks} setTasks={setTasks} setSessionComplete={setSessionComplete} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
