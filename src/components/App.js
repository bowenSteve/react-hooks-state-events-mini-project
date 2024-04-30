import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [deletedList, setDeleted] = React.useState(tasks);
  

  const handleDelete = (deleteTask) => {
    console.log(deleteTask)
    const updatedTasks = tasks.filter(task => deleteTask !== task.text);
    setTasks(updatedTasks);
    setDeleted(updatedTasks)
  };
  const filteredTasks = tasks.filter((task) => selectedCategory === "All" || task.category === selectedCategory);

  function onTaskFormSubmit(newObj) {
    setTasks(prevVal => {
      setDeleted(prevVal => [...prevVal, newObj])
      return [...prevVal, newObj]
    })
    return newObj;
  }

return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
