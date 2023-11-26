import TomatoIcon from "./TomatoIcon"

export default function TaskItemPomodoros({ task }) {



    return (
        <div className="TaskItemPomodoros">
            {task.pomodoros.map((pomodoro, pomodoroIndex) => (
                <TomatoIcon time={pomodoro.time} />
            ))}
        </div>
    )




}