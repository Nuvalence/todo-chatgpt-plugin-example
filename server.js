// Todo API - server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let todoList = [];

app.get('/todos', (req, res) => {
    res.json(todoList);
});

app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todoList.push(newTodo);
    res.json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const updatedTodo = req.body;
    todoList = todoList.map(todo => todo.id === id ? updatedTodo : todo);
    res.json(updatedTodo);
});

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    todoList = todoList.filter(todo => todo.id !== id);
    res.json({ id });
});

app.get('/.well-known/ai-plugin.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/.well-known/ai-plugin.json'));
});

app.get('/openapi.yaml', (req, res) => {
    res.sendFile(path.join(__dirname, '/openapi.yaml'));
});

app.use('/public', express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

