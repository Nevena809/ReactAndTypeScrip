import React, { useContext } from "react";
import TodoItems from "./TodoItems";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/TodosContext";

const Todos: React.FC = () => {
  const { items, removeTodo: deleteHandler } = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItems
          key={item.id}
          text={item.text}
          deleteHandler={deleteHandler.bind(null, item.id)}
        ></TodoItems>
      ))}
    </ul>
  );
};

export default Todos;
