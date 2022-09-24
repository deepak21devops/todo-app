import React from "react";
import { Link } from "react-router-dom";
import classes from "../../Components/Todo/TodoItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  delItem,
  editStatusToDo,
  editStatusToDone,
  editStatusToDoing,
} from "../../Components/Redux/todoSlice";
const Doing = (props) => {
  const doingData = useSelector((state) => state.todolist);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(delItem(id));
  };

  const moveToDone = (id) => {
    dispatch(editStatusToDone(id));
  };

  const moveToDo = (id) => {
    dispatch(editStatusToDo(id));
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Doing Page</h1>
      {doingData.length > 0 ? (
        doingData
          .filter((ele) => ele.status === "Doing")
          .map((ele, index) => (
            <div key={ele.id}>
              <li className={classes.item}>
                <p>{index + 1}</p>
                <div className={classes.todoitem__description}>
                  <h2>{ele.title}</h2>
                  <p>{ele.content}</p>
                </div>
                <div>
                  <button className="btn" onClick={() => moveToDo(ele.id)}>
                    Move To Do
                  </button>

                  <button className="btn" onClick={() => moveToDone(ele.id)}>
                    Move to Done
                  </button>

                  <button type="button" onClick={() => handleRemove(ele.id)}>
                    Remove
                  </button>
                </div>
              </li>
            </div>
          ))
      ) : (
        <p>No Items to Display</p>
      )}
    </div>
  );
};

export default Doing;
