import React, { useState } from "react";
import classes from "./TodoItem.module.css";

const TodoItems: React.FC<{
  text: string;
  deleteHandler: () => void;
}> = ({ text, deleteHandler }) => {
  return (
    <>
      <li className={classes.item} onClick={deleteHandler}>
        {text}
      </li>
    </>
  );
};

export default TodoItems;
