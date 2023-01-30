import { useRef, useState } from "react";
import AddTaskInput from "../../components/AddTaskInput";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import TaskCard from "../../components/TaskCard";
import TasksWarning from "../../components/TasksWarning";

type Task = {
  id: string;
  task: string;
  done: boolean;
};

export default function index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 12),
        task: inputValue,
        done: false,
      },
    ]);
  };

  const handleChangeStatus = (id: string) => {
    const newTasks = tasks.map((item) => {
      if (id === item.id) {
        return {
          id: item.id,
          task: item.task,
          done: !item.done,
        };
      }
      return item;
    });
    setTasks(newTasks);
  };

  const handleDeleteTask = (id: string) => {
    const newTasks = tasks.filter((item) => id !== item.id);
    setTasks(newTasks);
  };

  return (
    <>
      <Header />
      <AddTaskInput handleAddTask={handleAddTask} inputRef={inputRef} setInputValue={setInputValue} />
      <div>
        {tasks.length > 0 && <ProgressBar tasks={tasks} />}
        <h2>Todas as tarefas</h2>
        {tasks.length > 0 ? (
          <div>
            {tasks.map(({ id, task, done }) => (
              <TaskCard
                id={id}
                task={task}
                done={done}
                handleDeleteTask={handleDeleteTask}
                handleChangeStatus={handleChangeStatus}
              />
            ))}
          </div>
        ) : (
          <TasksWarning inputRef={inputRef} />
        )}
      </div>
    </>
  );
}
