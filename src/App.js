import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";

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
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <React.Fragment>
      <Form onSubmit={addTodoHandler} />
    </React.Fragment>
  );
}

export default App;
