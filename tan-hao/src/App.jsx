import React from "react";
import "./components/todo/todo.css";
import TodoAdd from "./components/todo/TodoAdd";
import TodoInformation from "./components/todo/TodoInformation";
import Imgage from "./assets/tanhao.png";

const App = () => {
  const myName = {
    name: "Phạm Tấn Hào",
    address: "Khánh Hòa",
  };
  const address = "Khánh Hòa";
  return (
    <>
      <div className="container">
        <div className="title">Danh Sách</div>
        <TodoAdd />
        <TodoInformation myName={myName} address={address} />
        <div className="img">
          <img src={Imgage} />
        </div>
      </div>
    </>
  );
};

export default App;
