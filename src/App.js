import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

let lastId = 0;

function App() {
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (todo) => {
    setTodos((prev) => prev.concat({ id: ++lastId, task: todo }));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} handleDelete={handleDelete} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
