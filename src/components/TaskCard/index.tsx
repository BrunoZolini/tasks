import check from "../../assets/check.svg";
import { useTasks } from "../../contexts";
import { Trash } from "../icons/Trash";
import * as S from "./styles";

interface Props {
  id: string;
  task: string;
  done: boolean;
}

export default function TaskCard({ id, task, done }: Props) {
  const { handleChangeStatus, handleDeleteTask } = useTasks();

  return (
    <S.Container
      tabIndex={0}
      key={id}
      onKeyDown={(e) => {     
        if (e.key === "Enter" || e.key === " ") handleChangeStatus(id);
      }}
      onClick={() => handleChangeStatus(id)}
    >
      <S.Delete
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteTask(id);
        }}
      >
        <Trash/>
      </S.Delete>
      <S.Task>{task}</S.Task>
      {done ? <S.Check src={check} alt="check" /> : <S.Invisible />}
    </S.Container>
  );
}
