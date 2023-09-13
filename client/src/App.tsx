import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./components/todo-list/TodoList";
import { Todo } from "./models/Todo";
import InputPanel from "./components/input-panel/InputPanel";
import { baseURL } from "./constants";
import Title from "./components/title/Title";
import Loading from "./components/loading/Loading";
import { AiOutlinePlus } from "react-icons/ai";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [addInputValue, setAddInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState<boolean>(false);

  const showModal = () => {
    setModal(true);
  };

  useEffect(() => {
    (async () => {
      try {
        // fetching todo list
        const response = await axios.get(`${baseURL}/api`);
        setTodos(response.data);
      } catch (error) {
        console.error("error fetching todo list", error);
      }
      setIsLoading(false);
    })();
  }, []);

  const deleteTodo = async (id: string) => {
    try {
      // delete todo
      await axios.delete(`${baseURL}/delete`, {
        params: { id },
      });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error("error delete todo", err);
    }
  };

  const createTodo = async () => {
    const generateId = () => {
      return (
        Date.now().toString() +
        "_" +
        (Math.random() * 1e6).toFixed(0).toString()
      );
    };
    try {
      const newTodo: Todo = {
        title: addInputValue,
        id: generateId(),
        isDone: false,
        isEditing: false,
      };
      // create todo
      const response = await axios.post(`${baseURL}/create`, newTodo);
      setTodos(response.data);
      setAddInputValue("");
    } catch (err) {
      console.error("error create todo", err);
    }
  };

  const onTodosChange = (items: Todo[]) => {
    setTodos(items);
  };

  return (
    <div className="max-w-xl mx-auto py-20 bg-Zinc-50">
      <Title />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {modal && (
            <InputPanel
              addInputValue={addInputValue}
              setAddInputValue={setAddInputValue}
              createTodo={createTodo}
              setModal={setModal}
            />
          )}
          <TodoList
            onChange={onTodosChange}
            deleteItem={(id) => deleteTodo(id)}
            todos={todos}
          />

          <button
            onClick={showModal}
            className="group fixed bottom-12 right-12 p-0 
            w-16 h-16 bg-sky-200 
                rounded-full hover:bg-sky-500 
                mouse shadow focus:outline-none"
          >
            <AiOutlinePlus
              className="group-hover:text-white inline-block"
              size={24}
            />
          </button>
        </>
      )}
    </div>
  );
};
export default App;
