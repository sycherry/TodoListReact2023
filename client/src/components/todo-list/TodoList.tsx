import React, { useState, useEffect } from "react";
import { Todo } from "../../models/Todo";
import axios from "axios";
import Item from "../item/Item";
import { TodoListProps } from "./TodoList.props";
import { baseURL } from "../../constants";
import Category from "../category/Category";
import SubTitle from "../sub-title/SubTitile";

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
    }
    if (selectedCategory === "completed") {
      const newPosts = todos.filter((e) => e.isDone === true);
      setFilteredItems(newPosts);
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
        <SubTitle filteredItems={filteredItems} />
        <Category filterCategory={filterCategory} />
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
  );
};
export default TodoList;
