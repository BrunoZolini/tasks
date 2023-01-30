interface Props {
  handleAddTask: (e: React.FormEvent<HTMLFormElement>) => void,
  inputRef: React.RefObject<HTMLInputElement>,
  setInputValue: (e:React.SetStateAction<string> ) => void
}

export default function addTaskInput({ handleAddTask, inputRef, setInputValue }: Props) {
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
