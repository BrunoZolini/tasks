import { useTasks } from "../../contexts";

export default function addTaskInput() {
  const { setInputValue, inputRef, handleAddTask } = useTasks();
  return (
    <form onSubmit={(e) => handleAddTask(e)}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Digite uma tarefa"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
}
