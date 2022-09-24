import React from "react";
import classes from "../../Components/Todo/TodoItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  delItem,
  editStatusToDo,
  editStatusToDoing,
} from "../../Components/Redux/todoSlice";
const Done = () => {
  const doingData = useSelector((state) => state.todolist);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(delItem(id));
  };

  const moveToDoing = (id) => {
    dispatch(editStatusToDoing(id));
  };

  const moveToDo = (id) => {
    dispatch(editStatusToDo(id));
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Done Page</h1>
      {doingData.length > 0 ? (
        doingData
          .filter((ele) => ele.status === "Done")
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

                  <button className="btn" onClick={() => moveToDoing(ele.id)}>
                    Move to Doing
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

export default Done;
