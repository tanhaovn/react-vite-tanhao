import React, { useState } from "react";

const TodoAdd = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      // sửa
      const newTodos = [...todos];
      newTodos[editIndex] = input;
      setTodos(newTodos);
      setEditIndex(null);
    } else {
      // thêm
      setTodos([...todos, input]);
    }
    setInput("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_,i) => i !== index));
  };

  const handleEdit = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>
        {editIndex !== null ? "Cập nhật" : "Thêm"}
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <div className="todo-actions">
              <button className="edit" onClick={() => handleEdit(index)}>
                Sửa
              </button>
              <button className="delete" onClick={() => handleDelete(index)}>
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoAdd;
