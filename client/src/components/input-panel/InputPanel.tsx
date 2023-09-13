import React from "react";
import { InputPanelProps } from "./InputPanel.props";
import Button from "../button/Button";
import Input from "../input/Input";

const InputPanel: React.FC<InputPanelProps> = ({
  setAddInputValue,
  addInputValue,
  createTodo,
  setModal,
}) => {
  return (
    <>
      <div className="">
        <div className="fixed inset-0 bg-gray-400 bg-opacity-75"></div>
        <div className="fixed inset-0">
          <div className="flex min-h-full justify-center items-center">
            <div className=" overflow-hidden rounded-lg bg-white shadow-xl  my-8 w-full max-w-lg">
              <div className="px-4 pt-5 p-6 pb-4">
                <p className="mb-4">Add new Todo</p>
                <Input
                  addInputValue={addInputValue}
                  setAddInputValue={setAddInputValue}
                />
              </div>
              <div className="py-3 flex flex-row-reverse px-6">
                <Button text={"ADD"} onClick={createTodo} />
                <Button text={"Close"} onClick={() => setModal(false)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InputPanel;
