import React from "react";
import { ButtonProps } from "./Button.props";

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        text === "ADD"
          ? "bg-sky-200 hover:bg-sky-500 hover:text-white"
          : "bg-white text-gray-900 ring-1 ring-inset ring-gray-300"
      } 
       rounded-md  px-3 py-2 text-sm font-semibold
       ml-2 mt-0 w-auto`}
    >
      {text}
    </button>
  );
};
export default Button;
