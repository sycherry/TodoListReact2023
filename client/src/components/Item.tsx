import React, { useEffect, useState } from "react";
import { Todo } from "./model";
import { PiSquareLight, PiCheckSquareLight } from "react-icons/pi";
import {
  HiOutlineCheck,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi";
import { ItemProps } from "./ItemProps";

const Item: React.FC<ItemProps> = ({
  todoItem,
  deleteItem,
  onEditCompleted,
}) => {
  const [item, setItem] = useState<Todo>(todoItem);
  useEffect(() => {
    setItem(todoItem);
  }, [todoItem]);

  const onEditing = () => {
    console.log("onClick happened");
    setItem({ ...item, isEditing: !item.isEditing });
  };

  const onFinishedEditing = (item: Todo) => {
    const updatedItem = { ...item, isEditing: !item.isEditing };
    console.log('Item onFinishedEditing', updatedItem);
    setItem(updatedItem);
    onEditCompleted(updatedItem);
  };

  const onCompleted = (item: Todo) => {
    const updatedItem = { ...item, isDone: !item.isDone };
    console.log('Item onCompleted', updatedItem);
    setItem(updatedItem);
    onEditCompleted(updatedItem);
  };

  return (
    <li
      className="flex flex-row items-start justify-between py-2.5"
    >
      <div className="flex justify-between">
        <div>
          {item.isDone ? (
            <button
              type="button"
              className="transition duration-300 ease-in-out"
              onClick={() => onCompleted(item)}
            >
              <PiCheckSquareLight
                className="inline mr-1.5 text-gray-600"
                size={28}
              />
            </button>
          ) : (
            <button
              type="button"
              className="transition duration-300 ease-in-out"
              onClick={() => onCompleted(item)}
            >
              <PiSquareLight
                className="inline mr-1.5 text-gray-600"
                size={28}
              />
            </button>
          )}
        </div>

        <div
          className={`${
            item.isDone ? "text-gray-600" : "text-indigo-600"
          } hover:text-indigo-400 inline transition duration-300 ease-in-out text-base md:text-lg font-medium`}
        >
          {item.isEditing ? (
            <input
              className="w-full rounded-lg border border-gray-600 px-2 py-1 focus: outline-none"
              value={item.title}
              onChange={(evt) => {
                console.log("onchange happened");
                setItem({ ...item, title: evt.target.value });
              }}
            />
          ) : (
            <p className={item.isDone ? "line-through" : "no-underline"}>
              {item.title}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-row items-center gap-x-4">
        <button
          type="button"
          className="transition duration-300 ease-in-out"
          onClick={() => deleteItem(item.id)}
        >
          <HiOutlineTrash
            className="text-gray-600 transition duration-300 ease-in-out rounded-full hover:text-red-500"
            size={20}
          />
        </button>

        {item.isEditing ? (
          <button
            type="button"
            className="transition duration-300 ease-in-out"
            onClick={() => onFinishedEditing(item)}
          >
            <HiOutlineCheck
              className="text-gray-600 transition duration-300 ease-in-out rounded-full hover:text-red-500"
              size={20}
            />
          </button>
        ) : (
          <button
            type="button"
            className="transition duration-300 ease-in-out"
            onClick={() => onEditing()}
          >
            <HiOutlinePencil
              className="text-gray-600 transition duration-300 ease-in-out rounded-full hover:text-red-500"
              size={20}
            />
          </button>
        )}
      </div>
    </li>
  );
};
export default Item;
