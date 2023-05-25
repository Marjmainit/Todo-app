import React from 'react';
import TodoItem from './TodoItems';

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <div>
      <h2 className="text-center">Todo List</h2>
      {tasks.length === 0 ? (
        <p className="text-center">No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} deleteTask={deleteTask} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
