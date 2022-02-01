import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCateory] = useState("All");
  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState("Code");
  const [tasks, setTask] = useState(TASKS)


  function handleFormSubmit(event){
    event.preventDefault();
    const newItem = {
      text: newTask,
      category: newCategory
    }
    setTask([...tasks, newItem])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      selectedCategory={selectedCategory}
      setSelectedCateory={setSelectedCateory}
      CATEGORIES={CATEGORIES}/>
      <NewTaskForm TASKS={tasks} newTask={newTask} 
      setNewCategory={setNewCategory}
      setNewTask={setNewTask}
      onTaskFormSubmit={handleFormSubmit}/>
      <TaskList tasks={tasks} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
