import React from "react";
import { InputProps } from "./Input.props";

const Input: React.FC<InputProps> = ({ addInputValue, setAddInputValue }) => {
  return (
    <input
      className="bg-white focus:outline-none focus:shadow-outline 
      border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none 
      leading-normal focus: outline-none min-w-0"
      type="text"
      placeholder="Add Todo..."
      value={addInputValue}
      onChange={(e) => setAddInputValue(e.target.value)}
    />
  );
};
export default Input;
