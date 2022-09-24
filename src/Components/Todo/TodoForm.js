import React, { useState } from "react";
import classes from "./TodoForm.module.css";
import swal from "sweetalert";
const TodoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredTitle.trim().length === 0 ||
      enteredContent.trim().length === 0
    ) {
      return swal("Invalid Input");
    }
    const todoData = {
      title: enteredTitle,
      content: enteredContent,
    };

    props.onSaveTodoData(todoData);
    setEnteredTitle("");
    setEnteredContent("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.new_todo__controls}>
        <div className={classes.new_todo__control}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes.new_todo__control}>
          <label>Content</label>
          <input
            type="text"
            value={enteredContent}
            onChange={contentChangeHandler}
          />
        </div>
      </div>
      <div className={classes.new_todo__actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default TodoForm;
