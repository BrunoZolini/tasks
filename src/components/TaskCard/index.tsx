
interface Props {
  id: string,
  task: string,
  done: boolean,
  handleDeleteTask: (id: string) => void
  handleChangeStatus: (id: string) => void
}

export default function TaskCard({id, task, done, handleDeleteTask, handleChangeStatus}: Props) {
  return (
    <div key={id}>
      <button onClick={() => handleDeleteTask(id)}>Delete</button>
      <p>{task}</p>
      <input type="checkbox" checked={done} onChange={() => handleChangeStatus(id)} />
    </div>
  );
}
