import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  const displayTasks = tasks.map(task => {
    return <Task text={task.text} category={task.category} key={task.id} handleDelete={handleDelete} />;
  });
  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
