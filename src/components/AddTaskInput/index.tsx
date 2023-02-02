import { useTasks } from "../../contexts";
import * as S from './styles';

export default function addTaskInput() {
  const { inputValue ,setInputValue, inputRef, handleAddTask } = useTasks();
  return (
    <S.Form onSubmit={(e) => handleAddTask(e)}>
      <S.Input
        ref={inputRef}
        type="text"
        placeholder="Digite uma tarefa"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <S.Button type="submit">ADD</S.Button>
    </S.Form>
  );
}
