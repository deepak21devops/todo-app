import classes from "./ViewTodo.module.css";

const ViewTodo = (props) => {
  return (
    <figure className={classes.todo}>
      <div>
        <h1>Id: {props.id}</h1>
        <h2>Title: {props.title}</h2>
        <p>Content: {props.content}</p>
      </div>
    </figure>
  );
};

export default ViewTodo;
