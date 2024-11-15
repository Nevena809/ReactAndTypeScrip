import React from "react";
import Todo from "../models/todo";
import TodoItems from "./TodoItems";

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItems key={item.id} text={item.text}></TodoItems>
      ))}
    </ul>
  );
};

export default Todos;
