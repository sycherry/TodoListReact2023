import React from "react";
import { InputProps } from "./InputProps";

const Input: React.FC<InputProps> = ({ addInputValue, setAddInputValue }) => {
  return (
    <input
      className="w-full rounded-lg border border-gray-600 px-2 py-1 focus: outline-none"
      type="text"
      placeholder="Add Todo..."
      value={addInputValue}
      onChange={(e) => setAddInputValue(e.target.value)}
    />
  );
};
export default Input;
