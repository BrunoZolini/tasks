import { useRef, useState } from "react";

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
  }

  return (
    <div>
      <div>
        <p>logo</p>
        <h1>Tasks</h1>
      </div>
      <form onSubmit={(e) => handleAddTask(e)}>
        <input ref={inputRef} type="text" placeholder="Digite uma tarefa" onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">ADD</button>
      </form>
      <div>
        {tasks.length > 0 && (
          <>
            <p>Concluídas</p>
            <p>{`${tasks.filter(({ done }) => done).length}/${tasks.length}`}</p>
            <div>progress bar</div>
          </>
        )}
        <h2>Todas as tarefas</h2>
        {tasks.length > 0 ? (
          <div>
            {tasks.map(({ id, task, done }) => (
              <div key={id}>
                <button onClick={() => handleDeleteTask(id)}>Delete</button>
                <p>{task}</p>
                <input type="checkbox" checked={done} onChange={() => handleChangeStatus(id)} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p>Image</p>
            <p>Não há tarefas cadastradas ainda</p>
            <button onClick={() => {inputRef.current?.focus()}}>Cadastrar uma tarefa agora</button>
          </div>
        )}
      </div>
    </div>
  );
}
