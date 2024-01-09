import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Alert, Snackbar } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

import TaskApp from './TaskApp';
import PomodoroNavbar from './PomodoroNavbar';
import WhyPage from './WhyPage'; // Import WhyPage
import DonatePage from './DonatePage'; // Import DonatePage




function App() {
  const exampleTasks = [
    { id: uuidv4(), name: 'code', pomodoros: [{ time: 15 }, { time: 15 }, { time: 25 }, { time: 15 }, { time: 15 }, { time: 15 }, { time: 20 }, { time: 15 }] },
    { id: uuidv4(), name: 'study', pomodoros: [{ time: 25 }, { time: 15 }, { time: 25 }, { time: 25 }] }
  ];

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : exampleTasks;
  });

  useEffect(() => {

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [sessionComplete, setSessionComplete] = useState(false);

  // New state for notification alert
  const [showNotificationAlert, setShowNotificationAlert] = useState(true);

  // Close the notification alert
  const handleCloseNotification = () => {
    setShowNotificationAlert(false);
  };

  return (
    <Router>
      <div className="App">

        <PomodoroNavbar />
        {sessionComplete ? (
          <Alert icon={false} style={{ backgroundColor: '#C66875', color: 'white' }} onClose={() => { setSessionComplete(false) }}>
            Time is up! — good job &#128516;
          </Alert>
        ) : null}

        <Snackbar open={showNotificationAlert} autoHideDuration={15000} onClose={handleCloseNotification} anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          style={{ marginTop: '60px' }} >
          <Alert onClose={handleCloseNotification} severity="info" sx={{ width: '100%' }}>
            <p>Please enable notifications so Pomodoro Tracker can let you know when time is up! 🍅</p>
            <p>Step 1: Start the timer for your chosen task.</p>
            <p>Step 2: Once the timer ends, a tomato icon, labeled with the timer's duration, will appear next to your task.</p>

          </Alert>
        </Snackbar>

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
