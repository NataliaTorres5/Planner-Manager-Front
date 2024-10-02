import React from "react";

function TasksComponent({ date, title, text, status, priority }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <p>{text}</p>
        <p>{date}</p>
      </div>
      <div>
        <p>{status}</p>
        <p>{priority}</p>
      </div>
    </div>
  );
}

export default TasksComponent;
