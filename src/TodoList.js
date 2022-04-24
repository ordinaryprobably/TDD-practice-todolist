import React from "react";

function TodoList({ todos, handleDelete }) {
  if (todos.length === 0) {
    return <div>please add a todo</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.task}</p>
          <button onClick={() => handleDelete(todo.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
