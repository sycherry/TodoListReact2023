import React from "react";
import { Todo } from "./model";
import axios from "axios";
import Item from "./Item";
import { TodoListProps } from "./TodoListProps";

const TodoList: React.FC<TodoListProps> = ({ todos, onChange, deleteItem }) => {
  const updateItemValue = async (item: Todo) => {
    const nonUpdatedItems = todos.filter((i) => i.id !== item.id);
    const updatedTodos = [...nonUpdatedItems, item];
    console.log("todos", updatedTodos);

    const baseURL = "http://localhost:3020";

    try {
      console.log("item.id", item.id);
      const response = await axios.put(`${baseURL}/edit`, {
        params: { id: item.id, title: item.title },
      });
      console.log("response", response.data);
    } catch (err) {
      console.error("login error", err);
    }

    onChange(todos);
  };

  return (
    <div className="pt-8 pb-12">
      {todos.length === 0 ? (
        <p className="italic text-gray-600">No todos found.</p>
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-medium text-gray-600">Your list</h2>
            <p className="text-sm font-light text-gray-500">
              {todos.length} item{todos.length > 1 && "s"}
            </p>
          </div>
          <ul className="pt-5">
            {todos.map((item,i) => (
              <Item
                key={i}
                deleteItem={() => deleteItem(item.id)}
                onEditCompleted={updateItemValue}
                todoItem={item}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default TodoList;
