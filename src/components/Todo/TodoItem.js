import React from "react";

import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const deleteHandler = () => {
    console.log(`Deleted ${props.id}`);

    props.onDelete(props.id);
  };

  return (
    <li className={classes.card}>
      <input type="checkbox" />

      <p className={classes.title}>{props.todo}</p>
      <button onClick={deleteHandler} className={classes["delete-btn"]}>
        remove
      </button>
    </li>
  );
};

export default TodoItem;
