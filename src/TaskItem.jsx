
import './TaskItem.css'
import TaskItemName from './TaskItemName';
import TaskItemForm from './TaskItemForm';
import TaskItemPomodoros from './TaskItemPomodoros';
import TomatoIcon from './TomatoIcon';


export default function TaskItem({ tasks, setTasks, task, setCurrentSession }) {




    return (
        <div className="TaskItem">

            <div className="TaskItemLeft">

                <TaskItemName
                    taskName={task.name} />


                <TaskItemForm
                    setCurrentSession={setCurrentSession}

                    tasks={tasks} setTasks={setTasks}
                    task={task} />

            </div>


            <TaskItemPomodoros
                task={task} />




        </div>
    );
}
