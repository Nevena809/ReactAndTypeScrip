import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/TodosContext";

const NewTodo: React.FC = () => {
  const { addTodo: onAddTodo } = useContext(TodosContext);
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
    <form className={classes.form} onSubmit={submitHandle}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
