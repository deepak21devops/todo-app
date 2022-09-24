import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div>
      <h1 className="mt-5" style={{ textAlign: "center" }}>
        Welcome to To Do App
      </h1>
      <div className="home d-flex justify-content-center mt-3">
        <img
          src="https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Home;
