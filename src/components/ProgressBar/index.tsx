import { useTasks } from "../../contexts";
import * as S from "./styles";

export default function ProgressBar() {
  const { tasks } = useTasks();
  const done = tasks.filter(({ done }) => done).length;
  const tasksAmount = tasks.length;
  return (
    <S.Container>
      <S.SubContainer>
        <p>Concluídas</p>
        <p>{`${done}/${tasksAmount}`}</p>
      </S.SubContainer>
      <S.ProgressBorder>
        <S.ProgressBar percentage={done / tasksAmount * 100} />
      </S.ProgressBorder>
    </S.Container>
  );
}
