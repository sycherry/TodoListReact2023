import React from "react";
import { InputPanelProps } from "./InputPanelProps";
import Button from "../button/Button";
import Input from "../input/Input";

const InputPanel: React.FC<InputPanelProps> = ({
  setAddInputValue,
  addInputValue,
  createTodo,
}) => {
  return (
    <div className="flex justify-center">
      <Input
        addInputValue={addInputValue}
        setAddInputValue={setAddInputValue}
      />
      <Button createTodo={createTodo} />
    </div>
  );
};
export default InputPanel;
