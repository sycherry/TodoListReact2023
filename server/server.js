const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let todoList = [
  {
    id: "561287347_12345678",
    title: "First Item",
    isDone: false,
  },
  {
    id: "561282347_90123456",
    title: "Second Item",
    isDone: false,
  },
  {
    id: "561287347_78901234",
    title: "Third Item",
    isDone: false,
  },
];

app.get("/api", cors(), (req, res) => {
  res.status(200);
  res.json(todoList);
});

app.post("/create", function (req, res) {
  const newTodo = req.body;
  todoList = [...todoList, newTodo];
  res.json(todoList);
});

app.delete("/delete", function (req, res) {
  const id = req.query.id;
  const deleteTodo = todoList.filter((todo) => todo.id !== id);
  todoList = deleteTodo;
  res.json(deleteTodo);
});

app.put("/update", function (req, res) {
  const item = req.body.params;

  for (let index = 0; index < todoList.length; index++) {
    if (todoList[index].id === item.id) {
      todoList[index] = {
        ...todoList[index],
        title: item.title,
        isDone: item.isDone,
      };
      break;
    }
  }

  res.json(todoList);
});

const port = process.env.PORT || 3020;
app.listen(port, () => `Server running on port ${port}`);
