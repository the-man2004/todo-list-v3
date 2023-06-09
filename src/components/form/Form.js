import React, { useState } from "react";

import classes from "./Form.module.css";

const Form = (props) => {
  // State for remembering the input value
  const [todo, setTodo] = useState("");

  // input change handler function
  const changeHandler = (event) => {
    setTodo(event.target.value);
  };

  // form submit handler function
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (todo !== "") {
      props.onSubmit({
        todo: todo,
        checked: false,
        id: Math.random(),
      });

      setTodo("");
    }
  };

  return (
    <div className="container">
      <div className={classes["form-wrapper"]}>
        <h1>Hello from form!</h1>
        <form onSubmit={formSubmitHandler}>
          <input
            onChange={changeHandler}
            value={todo}
            type="text"
            placeholder="Add Todo"
          />
          <button className={classes.btn} type="submit">
            +
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
