import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCateory] = useState("All");
  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState("Code");

  function handleCategoryChange(event){
    setNewCategory(event.taret.value)
  }
  function handleFormSubmit(event){
    event.preventDefault();
    const newItem = {
      text: newTask,
      category: newCategory
    }

  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      selectedCategory={selectedCategory}
      setSelectedCateory={setSelectedCateory}
      CATEGORIES={CATEGORIES}/>
      <NewTaskForm TASKS={TASKS} newTask={newTask} 
      handleCategoryChange={handleCategoryChange}
      newCategory={newCategory}
      onTaskFormSubmit={handleFormSubmit}/>
      <TaskList taskList={TASKS} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
