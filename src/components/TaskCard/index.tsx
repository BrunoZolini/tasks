import { useTasks } from "../../contexts";

interface Props {
  id: string;
  task: string;
  done: boolean;
}

export default function TaskCard({ id, task, done }: Props) {
  const { handleChangeStatus, handleDeleteTask } = useTasks();
  return (
    <div key={id}>
      <button onClick={() => handleDeleteTask(id)}>Delete</button>
      <p>{task}</p>
      <input type="checkbox" checked={done} onChange={() => handleChangeStatus(id)} />
    </div>
  );
}
