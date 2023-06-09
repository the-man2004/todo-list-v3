import React, { useState } from "react";
import Form from "./components/form/Form";
import TodoWrapper from "./components/UI/TodoWrapper";
import TodoItem from "./components/Todo/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      todo: "Hire me!",
      checked: false,
      id: 0.1134366111343661,
    },
    {
      todo: "Eat a Donut",
      checked: true,
      id: 0.0027448200274482,
    },
  ]);

  console.log(todos);

  const addTodoHandler = (newTodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const deleteTodoHandler = (id) => {
    setTodos((todo) => {
      return todo.filter((filterTodo) => filterTodo.id !== id);
    });
  };

  return (
    <React.Fragment>
      <Form onSubmit={addTodoHandler} />
      <TodoWrapper>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            checked={todo.checked}
            id={todo.id}
            todo={todo.todo}
            onDelete={deleteTodoHandler}
          />
        ))}
      </TodoWrapper>
    </React.Fragment>
  );
}

export default App;
