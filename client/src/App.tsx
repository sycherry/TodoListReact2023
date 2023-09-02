import { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import { Todo } from "./components/model";
import InputPanel from "./components/InputPanel";
import { baseURL } from "./components/constants";
import Title from "./components/Title";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [addInputValue, setAddInputValue] = useState("");

  const [isLoading, setIsLoading] = useState(true);

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
    } catch (err) {
      console.error("error create todo", err);
    }
  };

  const onTodosChange = (items: Todo[]) => {
    setTodos(items);
  };

  return (
    <div className="max-w-xl mx-auto py-20">
      <Title />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <TodoList
            onChange={onTodosChange}
            deleteItem={(id) => deleteTodo(id)}
            todos={todos}
          />
          <InputPanel
            addInputValue={addInputValue}
            setAddInputValue={setAddInputValue}
            createTodo={createTodo}
          />
        </>
      )}
    </div>
  );
}

export default App;
