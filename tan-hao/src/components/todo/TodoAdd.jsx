import React from "react";

const TodoAdd = () => {
  const handleClick = () => {
    alert('xin chao hào')
  }
  const handleOnChange = (event) => {
    console.log(event.target.value)
  }
  return (
    <>
      <div className="add">
        <input type="text" onChange={handleOnChange}/>
        <button style={{cursor: "pointer"}} onClick={handleClick}>Thêm</button>
      </div>
    </>
  );
};

export default TodoAdd;
