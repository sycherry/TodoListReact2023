const express = require('express');
const cors = require('cors');
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
      title: "First Item",
      id: "561287347_12345678",
    },
    {
      title: "Second Item",
      id: "561282347_90123456",
    },
    {
      title: "Third Item",
      id: "561287347_78901234",
    },
  ]

app.get('/api', cors(), (req, res) => {
    res.status(200);
    res.json(todoList);
});

app.post('/create', function (req, res) {
    const newTodo = req.body;
    todoList = [...todoList, newTodo];
    res.json(todoList);
})

app.delete('/delete', function (req, res) {
  const id = req.query.id;
  const deleteTodo = todoList.filter(todo => todo.id !== id);
  todoList = deleteTodo
  res.json(deleteTodo)
})

app.put('/edit', function (req, res) {
  const id = req.body.params.id;
  const title = req.body.params.title;

  const newTodo = todoList.map(item => {
    if (item.id == id) {
      return { id: id, title:title };
    }
    return item;
  });
  todoList = newTodo
  res.json(todoList)
})

const port = process.env.PORT || 3020;
app.listen(port, () => `Server running on port ${port}`);