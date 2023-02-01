import AddTaskInput from "../../components/AddTaskInput";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import TaskCard from "../../components/TaskCard";
import TasksWarning from "../../components/TasksWarning";
import { useTasks } from "../../contexts";

export default function index() {
  const { tasks } = useTasks();

  return (
    <>
      <Header />
      <AddTaskInput />
      <div>
        {tasks.length > 0 && <ProgressBar />}
        <h2>Todas as tarefas</h2>
        {tasks.length > 0 ? (
          <div>
            {tasks.map(({ id, task, done }) => (
              <TaskCard id={id} task={task} done={done} />
            ))}
          </div>
        ) : (
          <TasksWarning />
        )}
      </div>
    </>
  );
}
