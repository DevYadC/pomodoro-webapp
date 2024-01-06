import TaskItem from "./TaskItem"

export default function TaskList({ setCurrentSession, tasks, setTasks }) {



    return (
        <div className="TaskList">
            <ul>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        tasks={tasks} setTasks={setTasks}
                        setCurrentSession={setCurrentSession}
                        task={task}
                    />
                ))}
            </ul>
        </div>
    )



}