import React from 'react';

const TodoItem = ({ task, deleteTask }) => {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li className="text-center m-5">
      <input type="checkbox" checked={task.completed} readOnly />
      <span id="task">{task.title}</span>
      <span id="task">{task.title.todo}</span>
      <button className="bg-dark text-white " onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
