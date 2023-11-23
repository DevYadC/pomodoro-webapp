import './TaskItemForm.css'

export default function TaskItemForm({ taskTime, setTaskTime, setSessionTaskId, setSessionTime, setRefresh, tasks, setTasks, task, refresh }) {

    const handleSliderChange = (event) => {
        setTaskTime(event.target.value);
    };

    const handleStartClick = () => {
        setSessionTime(taskTime);
        setSessionTaskId(task.id);
        setRefresh(prev => prev + 1);
    };


    const handleDeleteClick = () => {
        setTasks(tasks.filter(t => t.id !== task.id));
        console.log("delete button clicked!")
    }



    return (
        <div className="TaskItemForm">
            <div className="TaskFormSlider">
                <input
                    type="range"
                    min="5"
                    max="60"
                    value={taskTime}
                    onChange={handleSliderChange}
                />
                <span>{taskTime} s</span>
            </div>

            <div className="TaskFormButtons">
                <button onClick={handleStartClick}>Start</button>
                <button onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )



}