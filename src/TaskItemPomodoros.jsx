

export default function TaskItemPomodoros({ task }) {



    return (
        <div className="TaskItemPomodoros">
            {task.pomodoros.map((pomodoro, pomodoroIndex) => (
                <small key={pomodoroIndex}>🍅{pomodoro.time} sec, </small>
            ))}
        </div>
    )




}