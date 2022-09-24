import React, { useState } from "react";
import NewTodo from "../../Components/Todo/NewTodo";
import TodoList from "../../Components/Todo/TodoList";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
const DUMMY_TODOS = [
  { id: "1", title: "Varius", content: "tincidunt arcu non sodales neque" },
  {
    id: "2",
    title: "Odvestibulum sedio",
    content: "turna condimentum mattis pellentesque",
  },
  // { id: "3", title: "Dignissim", content: "euismod elementum nisi" },
  // {
  //   id: "4",
  //   title: "Pellentesque eu tincidunt",
  //   content: "lectus proin nibh nisl",
  // },
];
const Todo = () => {
  const stateData = useSelector((state) => state.todolist);
  const [todos, setTodos] = useState(stateData);

  const [id, setId] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      fetch("http://localhost:3002/posts/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((resp) => setId(resp.length));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const addTodoHandler = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} id={id} />
      <TodoList todos={todos} id={id} />
    </div>
  );
};

export default Todo;
