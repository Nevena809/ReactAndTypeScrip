import React from "react";

const TodoItems: React.FC<{ text: string }> = ({ text }) => {
  return <li>{text}</li>;
};

export default TodoItems;
