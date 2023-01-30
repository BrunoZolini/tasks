type Task = {
  id: string;
  task: string;
  done: boolean;
};

interface Props {
  tasks: Task[];
}

export default function ProgressBar({ tasks }: Props) {
  return (
    <div>
      <p>Concluídas</p>
      <p>{`${tasks.filter(({ done }) => done).length}/${tasks.length}`}</p>
      <div>progress bar</div>
    </div>
  );
}
