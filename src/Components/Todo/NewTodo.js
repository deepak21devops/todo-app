import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import classes from "./NewTodo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getItems } from "../Redux/todoSlice";

const NewTodo = (props) => {
  // const dispatch = useDispatch();
  const stateData = useSelector((state) => state.todolist);
  const dispatch = useDispatch();
  console.log(stateData);
  const [isEditing, setIsEditing] = useState(false);
  const saveTodoDataHandler = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData,
      id: props.id + 1,
    };

    dispatch(addItem(todoData));

    props.onAddTodo(todoData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className={classes.new_todo}>
      <h1>Todo 📝</h1>
      {!isEditing && <button onClick={startEditingHandler}>Add</button>}
      {isEditing && (
        <TodoForm
          onSaveTodoData={saveTodoDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewTodo;
