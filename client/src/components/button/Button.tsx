import React from "react";
import { ButtonProps } from "./Button.props";

const Button: React.FC<ButtonProps> = ({ createTodo }) => {
  return (
    <button
      onClick={createTodo}
      className="rounded-lg ml-2 px-8 py-2 border border-gray-600 
  text-white bg-gray-600 focus:outline-none hover:bg-gray-500"
    >
      Add
    </button>
  );
};
export default Button;
