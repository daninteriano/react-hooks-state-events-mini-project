import React from "react";

function NewTaskForm({ newTask, setNewTask, newCategory, setNewCategory, TASKS, onTaskFormSubmit }) {
  
  function handleCategoryChange(event){
    setNewCategory(event.target.value)
  }
  function handleInputChange(event){
    const value = event.target.value
    setNewTask(value)
  }
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={handleInputChange} />
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
