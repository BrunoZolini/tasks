import { useTasks } from "../../contexts";

export default function TasksWarning() {
  const { inputRef } = useTasks();
  return (
    <div>
      <p>Image</p>
      <p>Não há tarefas cadastradas ainda</p>
      <button
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        Cadastrar uma tarefa agora
      </button>
    </div>
  );
}
