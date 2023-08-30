const express = require('express');
const cors = require('cors');
const app = express();
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let todoList = [
    {
      title: "First Item",
      id: "561287347_37383372"
    },
    {
      title: "Second Item",
      id: "561282347_37383371"
    },
    {
      title: "Third Item",
      id: "561287347_37383371"
    },
  ]

app.get('/api', cors(), (req, res) => {
    res.status(200)
    res.json(todoList)
});

app.post('/create', function (req, res) {
    console.log("req.body",req.body)
    const newTodolList = req.body;
    console.log("todolist", newTodolList);
    todoList = [...todoList, newTodolList];
    console.log("new todolist", todoList);
    res.json(todoList)
})

const port = process.env.PORT || 3020;
app.listen(port, () => `Server running on port ${port}`);