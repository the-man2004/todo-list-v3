import React, { useState } from "react";
import Form from "./components/form/Form";
import TodoWrapper from "./components/UI/TodoWrapper";
import TodoItem from "./components/Todo/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      todo: "Hire me!",
      id: 0.1134366111343661,
    },
    {
      todo: "Eat a Donut",
      id: 0.0027448200274482,
    },
  ]);

  console.log(todos);

  const addTodoHandler = (newTodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  return (
    <React.Fragment>
      <Form onSubmit={addTodoHandler} />
      <TodoWrapper>
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} todo={todo.todo} />
        ))}
      </TodoWrapper>
    </React.Fragment>
  );
}

export default App;
