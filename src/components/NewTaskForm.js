import React, { useState } from "react";

function NewTaskForm({ newTask, newCategory, setNewCategory, TASKS, handleCategoryChange }) {
  
  function handleCategoryChange(event){
    const selected = event.taret.value
    setNewCategory(selected)
  }

  function handleFormSubmit(event){
    event.preventDefault();
    const newItem = {
      text: newTask,
      category: newCategory
    }
  }

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={newTask}/>
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={handleCategoryChange}>
          <option>Code</option>
          <option>Food</option>
          <option>Money</option>
          <option>Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
