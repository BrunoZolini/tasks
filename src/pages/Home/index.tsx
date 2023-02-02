import AddTaskInput from "../../components/AddTaskInput";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import TaskCard from "../../components/TaskCard";
import TasksWarning from "../../components/TasksWarning";
import { useTasks } from "../../contexts";
import * as S from "./styles";

export default function index() {
  const { tasks } = useTasks();

  return (
    <S.Container>
      <Header />
      <AddTaskInput />
      <div>
        {tasks.length > 0 && <ProgressBar />}
        <S.Heading2>Todas tarefas</S.Heading2>
        {tasks.length > 0 ? (
          <S.TasksWrapper>
            {tasks.map(({ id, task, done }) => (
              <TaskCard id={id} task={task} done={done} />
            ))}
          </S.TasksWrapper>
        ) : (
          <TasksWarning />
        )}
      </div>
    </S.Container>
  );
}
