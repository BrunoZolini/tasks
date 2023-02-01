import { createContext, ReactNode, SetStateAction, useContext, useRef, useState } from "react";

type Task = {
  id: string;
  task: string;
  done: boolean;
};

type ContextProps = {
  tasks: Task[];
  setTasks: (value: Task[]) => void;
  inputValue: string;
  setInputValue: (e: SetStateAction<string>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  handleAddTask: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChangeStatus: (value: string) => void;
  handleDeleteTask: (value: string) => void;
};

export const Context = createContext({} as ContextProps);

export function TasksProvider({ children }: { children: ReactNode }) {
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

  const initialState = {
    tasks,
    setTasks,
    inputValue,
    setInputValue,
    inputRef,
    handleAddTask,
    handleChangeStatus,
    handleDeleteTask,
  };

  return <Context.Provider value={initialState}>{children}</Context.Provider>;
}

export const useTasks = () => {
  const context = useContext(Context);
  return context;
};
