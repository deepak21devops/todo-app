import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";
import { useSelector, useDispatch } from "react-redux";

const TodoList = (props) => {
  const todoItems = useSelector((state) => state.todolist);
  const [api, setApi] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = setInterval(() => {
      fetch("http://localhost:3002/posts/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((resp) => setApi(resp));
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);
  return (
    <div className="container">
      <ul className={classes.todos_list}>
        {todoItems?.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            content={todo.content}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
