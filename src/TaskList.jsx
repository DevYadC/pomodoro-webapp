import TaskItem from "./TaskItem"

export default function TaskList({ setCurrentSession, tasks, setTasks }) {



    return (
        <div className="TaskList">
            <ul>
                {tasks.map((task) => (
                    <TaskItem
                        tasks={tasks} setTasks={setTasks}
                        setCurrentSession={setCurrentSession}
                        task={task}
                    />
                ))}
            </ul>
        </div>
    )



}