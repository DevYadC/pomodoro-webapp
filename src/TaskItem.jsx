
import './TaskItem.css'
import TaskItemName from './TaskItemName';
import TaskItemForm from './TaskItemForm';
import TaskItemPomodoros from './TaskItemPomodoros';
import TomatoIcon from './TomatoIcon';


export default function TaskItem({ tasks, setTasks, task, setSessionTime, setSessionTaskId, refresh, setRefresh }) {




    return (
        <div className="TaskItem">

            <div className="TaskItemLeft">

                <TaskItemName
                    taskName={task.name} />


                <TaskItemForm
                    setSessionTaskId={setSessionTaskId}
                    setSessionTime={setSessionTime}
                    refresh={refresh} setRefresh={setRefresh}
                    tasks={tasks} setTasks={setTasks}
                    task={task} />

            </div>


            <TaskItemPomodoros
                task={task} />




        </div>
    );
}
