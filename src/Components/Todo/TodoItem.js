import { Link } from "react-router-dom";
import classes from "./TodoItem.module.css";
import { useDispatch } from "react-redux";
import { editStatusToDoing, delItem } from "../Redux/todoSlice";
const TodoItem = (props) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(delItem(id));
  };

  const moveToDoing = (id) => {
    dispatch(editStatusToDoing(id));
  };
  return (
    <li className={classes.item}>
      <p>{props.id}</p>
      <div className={classes.todoitem__description}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <div>
        <Link className="btn" to={`/todo/${props.id}`}>
          View
        </Link>

        <button className="btn" onClick={() => moveToDoing(props.id)}>
          Move to doing
        </button>

        <button type="button" onClick={() => handleRemove(props.id)}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
