import React from "react";

import classes from "./TodoWrapper.module.css";

const TodoWrapper = (props) => {
  return (
    <section>
      <div className="container">
        <ul className={classes["todo-wrapper"]}>{props.children}</ul>
      </div>
    </section>
  );
};

export default TodoWrapper;
