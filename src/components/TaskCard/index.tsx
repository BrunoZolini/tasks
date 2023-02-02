import check from "../../assets/check.svg";
import trash from "../../assets/trash.svg";
import { useTasks } from "../../contexts";
import * as S from "./styles";

interface Props {
  id: string;
  task: string;
  done: boolean;
}

export default function TaskCard({ id, task, done }: Props) {
  const { handleChangeStatus, handleDeleteTask } = useTasks();

  return (
    <S.Container>
      <S.Delete onClick={() => handleDeleteTask(id)}>
        <img src={trash} alt="deletar" />
      </S.Delete>
      <S.SubContainer key={id} onClick={() => handleChangeStatus(id)}>
        <S.Task>{task}</S.Task>
        {done ? <S.Check src={check} alt="check" /> : <S.Invisible />}
      </S.SubContainer>
    </S.Container>
  );
}
