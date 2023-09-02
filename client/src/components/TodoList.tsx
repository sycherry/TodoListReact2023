import React, { useState, useEffect } from "react";
import { Todo } from "./model";
import axios from "axios";
import Item from "./Item";
import { TodoListProps } from "./TodoListProps";
import { baseURL } from "./constants";

const TodoList: React.FC<TodoListProps> = ({ todos, onChange, deleteItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredItems, setFilteredItems] = useState<Todo[]>([]);
  const filterCategory = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (selectedCategory === "active") {
      const newPosts = todos.filter((e) => e.isDone === false);
      setFilteredItems(newPosts);
      console.log("newPosts active", newPosts);
    }
    if (selectedCategory === "completed") {
      const newPosts = todos.filter((e) => e.isDone === true);
      setFilteredItems(newPosts);
      console.log("newPosts completed", newPosts);
    }
    if (selectedCategory === "all") {
      setFilteredItems(todos);
    }
  }, [selectedCategory, todos]);

  const updateItemValue = async (item: Todo) => {
    const itemIdx = todos.findIndex((i) => i.id === item.id);
    todos[itemIdx] = item;
    try {
      await axios.put(`${baseURL}/update`, {
        params: { id: item.id, title: item.title, isDone: item.isDone },
      });
    } catch (err) {
      console.error("login error", err);
    }
    onChange(todos);
  };

  return (
    <div className="pt-8 pb-12">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-base font-medium text-gray-600">Your list</h2>
          <p className="text-sm font-light text-gray-500">
            {filteredItems.length} item{filteredItems.length > 1 && "s"}
          </p>
        </div>

        <ul className="flex items-center">
          <p className="py-2 mr-4">Filter:</p>
          <li>
            {" "}
            <button
              className="inline-flex items-center rounded-xl bg-gray-50 px-2 py-1 mr-4 border hover:bg-gray-100"
              onClick={() => filterCategory("all")}
            >
              All task
            </button>
          </li>
          <li>
            {" "}
            <button
              className="inline-flex items-center rounded-xl bg-gray-50 px-2 py-1 mr-4 border hover:bg-gray-100"
              onClick={() => filterCategory("active")}
            >
              Active task
            </button>
          </li>
          <li>
            {" "}
            <button
              className="inline-flex items-center rounded-xl bg-gray-50 px-2 py-1 border hover:bg-gray-100"
              onClick={() => filterCategory("completed")}
            >
              Completed task
            </button>
          </li>
        </ul>
        <ul className="pt-5">
          {filteredItems.map((item, i) => (
            <Item
              key={i}
              deleteItem={() => deleteItem(item.id)}
              onEditCompleted={updateItemValue}
              todoItem={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
