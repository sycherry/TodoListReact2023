import React from "react";
import { InputPanelProps } from "./InputPanelProps";
import Button from "./Button";
import Input from "./Input";

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
