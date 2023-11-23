import TaskItem from "./TaskItem"

export default function TaskList({ setSessionTime, setSessionTaskId, tasks, setTasks, refresh, setRefresh }) {



    return (
        <div className="TaskList">
            <ul>
                {tasks.map((task) => (
                    <TaskItem
                        tasks={tasks} setTasks={setTasks}
                        setSessionTime={setSessionTime}
                        setSessionTaskId={setSessionTaskId}
                        task={task}
                        refresh={refresh} setRefresh={setRefresh} />
                ))}
            </ul>
        </div>
    )



}