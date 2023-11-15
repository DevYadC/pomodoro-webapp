

export default function TaskItem({ task, index }) {


    return (
        <div className="TaskItem">
            <li key={index}>
                <button>start</button>
                {task.name}:
                {task.pomodoros.map((pomodoro, pomodoroIndex) => (
                    <span key={pomodoroIndex}>🍅{pomodoro.time} minute, </span>
                ))}
            </li>
        </div>
    )



}