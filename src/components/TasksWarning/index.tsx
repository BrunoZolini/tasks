import tasksLady from "../../assets/tasks-lady.svg";
import { useTasks } from "../../contexts";
import * as S from "./styles";

export default function TasksWarning() {
  const { inputRef } = useTasks();
  return (
    <S.Container>
      <img src={tasksLady} alt="Tasks Lady" />
      <S.Heading2>Não há tarefas cadastradas ainda</S.Heading2>
      <S.Button
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        Cadastrar uma tarefa agora
      </S.Button>
    </S.Container>
  );
}
