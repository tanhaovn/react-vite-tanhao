import React from "react";
import TodoAdd from "./components/todo/TodoAdd";
import TodoInformation from "./components/todo/TodoInformation";
import Imgage from "./assets/tanhao.png";
import "./components/todo/todo.css";

const App = () => {
  const myName = {
    name: "Phạm Tấn Hào",
    address: "Khánh Hòa",
  };

  return (
    <div className="container">
      <div className="title">Danh Sách</div>

      <TodoAdd />

      <TodoInformation myName={myName} address={myName.address} />

      {/* <div className="img">
        <img src={Imgage} alt="ảnh" />
      </div> */}
    </div>
  );
};

export default App;
