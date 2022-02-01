import React from "react";
import Task from "./Task";

function TaskList({ taskList, selectedCategory }) {
  return (
    <div className="tasks">
      {taskList.filter((task) => {
        if(selectedCategory === "All")
        {return task}
        else if (task.category === selectedCategory) {
          return task  
         }}).map((task) => (
        <Task key={task.text} category={task.category} text={task.text} />
      ))}
    </div>
  );
}

export default TaskList;
