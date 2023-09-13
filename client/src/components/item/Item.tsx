import React, { useEffect, useState } from "react";
import { Todo } from "../../models/Todo";
import { ItemProps } from "./Item.props";
import CheckBox from "./check-box/CheckBox";
import TodoInput from "./todo-input/TodoInput";
import DeleteButton from "./delete-button/DeleteButton";
import EditButton from "./edit-button/EditButton";

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
    setItem({ ...item, isEditing: !item.isEditing });
  };

  const onFinishedEditing = (item: Todo) => {
    const updatedItem = { ...item, isEditing: !item.isEditing };
    setItem(updatedItem);
    onEditCompleted(updatedItem);
  };

  const onCompleted = (item: Todo) => {
    const updatedItem = { ...item, isDone: !item.isDone };
    setItem(updatedItem);
    onEditCompleted(updatedItem);
  };

  return (
    <li className="flex justify-between py-4">
      <div className="flex items-center">
        <CheckBox item={item} onCompleted={onCompleted} />
        <TodoInput item={item} setItem={setItem} />
      </div>
      <div className="flex gap-x-4">
        <DeleteButton deleteItem={deleteItem} item={item} />
        <EditButton
          item={item}
          onFinishedEditing={onFinishedEditing}
          onEditing={onEditing}
        />
      </div>
    </li>
  );
};
export default Item;
