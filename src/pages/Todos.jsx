// src/pages/Todos.jsx
import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

function Todos({ todos, addTodo }) {
  return (
    <div>
      <h2>Todos</h2>
      <AddTodo addTodo={addTodo} /> {/* Passerer addTodo til AddTodo */}
      <TodoList todos={todos} /> {/* Sender todos til TodoList */}
    </div>
  );
}

export default Todos;
