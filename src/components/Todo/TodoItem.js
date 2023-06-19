import React from "react";

import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const deleteHandler = () => {
    console.log(`Deleted ${props.id}`);

    props.onDelete(props.id);
  };

  const checkedHandler = () => {
    props.onChecked(props.id);
  };

  const titleClasses = `${classes.title} ${
    props.checked ? classes["line-through"] : ""
  }`;

  const input = props.checked ? (
    <input checked type="checkbox" onChange={checkedHandler} />
  ) : (
    <input type="checkbox" onChange={checkedHandler} />
  );

  return (
    <li className={classes.card}>
      {input}
      <p className={titleClasses}>{props.todo}</p>
      <button onClick={deleteHandler} className={classes["delete-btn"]}>
        remove
      </button>
    </li>
  );
};

export default TodoItem;
