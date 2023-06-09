import React from "react";

import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  return (
    <li className={classes.card}>
      <p>{props.todo}</p>
      <button className={classes["delete-btn"]}>remove</button>
    </li>
  );
};

export default TodoItem;
