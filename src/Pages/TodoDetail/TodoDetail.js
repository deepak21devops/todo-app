import { Fragment } from "react";
import { useParams } from "react-router-dom";
import ViewTodo from "../../Components/Todo/ViewTodo";
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
const TodoDetail = () => {
  const params = useParams();
  const todo = DUMMY_TODOS.find((todo) => todo.id === params.todoId);
  if (!todo) {
    return <p>No todo found</p>;
  }
  return (
    <Fragment>
      <ViewTodo id={todo.id} title={todo.title} content={todo.content} />
    </Fragment>
  );
};

export default TodoDetail;
