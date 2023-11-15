import TaskItem from "./TaskItem"

export default function TaskList({ tasks }) {





    return (
        <div className="TaskList">
            <ul>
                {tasks.map((task, index) => (
                    <TaskItem key={index} task={task} index={index} />
                ))}
            </ul>
        </div>
    )


}