import React, { useEffect } from 'react';
import './App.css';
import axios from "axios"

function App() {

  const baseURL = 'http://localhost:3020'

  useEffect(() => {
    (async () => {
      try {
        const todoList = await axios.get(`${baseURL}/api`)
        console.log("todoList data", todoList.data)
        return todoList.data
      } catch (error) {
        console.error("error fetching todo list", error)
        throw error
      }
    })();
  }, [])

  const createTodo = async () => {
    try {

      const article = {
        title: "Fifth Item",
        id: "561287347_33983372"
      }
      const response = await axios.post(`${baseURL}/create`, article) 
      console.log("response",response.data)
    } catch (err) {
      console.error("login error", err);
    }
  };

  return (
    <div className="App">
     <button onClick={createTodo}>Todo list</button>
    </div>
  );
}

export default App;
