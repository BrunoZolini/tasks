import { useTasks } from "../../contexts";

export default function ProgressBar() {
  const { tasks } = useTasks();
  return (
    <div>
      <p>Concluídas</p>
      <p>{`${tasks.filter(({ done }) => done).length}/${tasks.length}`}</p>
      <div>progress bar</div>
    </div>
  );
}
