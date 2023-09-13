import React from "react";
import { TodoInputProps } from "./TodoInput.props";

const TodoInput: React.FC<TodoInputProps> = ({
  item,
  setItem
  }) => {
  return <>
    {item.isEditing ? (
      <input
        className="bg-white focus:outline-none focus:shadow-outline 
        border border-gray-300 rounded-lg py-2 px-4 block appearance-none 
        leading-normal w-96"
        value={item.title}
        onChange={(evt) => {
          setItem({ ...item, title: evt.target.value });
        }} />
    ) : (
      <p className={`${item.isDone ? "line-through" : "no-underline"}`}>
        {item.title}
      </p>
    )}
  </>;
}
export default TodoInput