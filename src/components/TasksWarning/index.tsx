import React from "react";

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function TasksWarning({ inputRef }: Props) {
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
