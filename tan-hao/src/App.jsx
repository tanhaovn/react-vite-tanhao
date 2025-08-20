import React from "react";
import "./components/todo/todo.css";
import TodoAdd from "./components/todo/TodoAdd";
import TodoInformation from "./components/todo/TodoInformation";
import Imgage from './assets/tanhao.png';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="title">Danh Sách</div>
        <TodoAdd />
        <TodoInformation />
        <div className="img">
          <img src={Imgage}/>
        </div>
      </div>
    </>
  );
};

export default App;
