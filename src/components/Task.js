import React from "react";

function Task({text, category, handleDelete}) {
  function handleDeleteTask() {
    handleDelete(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteTask}>X</button>
    </div>
  );
}

export default Task;