const express = require("express");
const cors = require("cors");
const app = express();
let { initialData } = require("./initialData");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", cors(), (req, res) => {
  res.status(200);
  res.json(initialData);
});

app.post("/create", function (req, res) {
  const newTodo = req.body;
  initialData = [...initialData, newTodo];
  res.json(initialData);
});

app.delete("/delete", function (req, res) {
  const id = req.query.id;
  const deleteTodo = initialData.filter((todo) => todo.id !== id);
  initialData = deleteTodo;
  res.json(deleteTodo);
});

app.put("/update", function (req, res) {
  const item = req.body.params;

  for (let index = 0; index < initialData.length; index++) {
    if (initialData[index].id === item.id) {
      initialData[index] = {
        ...initialData[index],
        title: item.title,
        isDone: item.isDone,
      };
      break;
    }
  }

  res.json(initialData);
});

const port = process.env.PORT || 3020;
app.listen(port, () => `Server running on port ${port}`);
