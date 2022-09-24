import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Todo from "./Pages/Todo/Todo";
import Doing from "./Pages/Doing/Doing";
import Done from "./Pages/Done/Done";
import Home from "./Pages/Home/Home";
import TodoDetail from "./Pages/TodoDetail/TodoDetail";
import NotFound from "./Pages/NotFound/NotFound";
import MainNavigation from "./Components/Layout/MainNavigation";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
            <Route path="/doing" element={<Doing />}></Route>
            <Route path="/done" element={<Done />}></Route>
            <Route path="/todo/:todoId" element={<TodoDetail />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
