import React from "react";
import Task from "./Task";

function TaskList({ taskList }) {
  return (
    <div className="tasks">
      {taskList.map((task) => (
        <Task key={task.text} category={task.category} text={task.text} />
      ))}
    </div>
  );
}

export default TaskList;
