import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({
  onAddTodo,
}) => {
  const todoRef = useRef<HTMLInputElement>(null);

  const submitHandle = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandle}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
