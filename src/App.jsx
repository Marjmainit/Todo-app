import React, { useState } from 'react';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="text-form container">
      <h1>Start the day with your New Task</h1>
      <div className='container'>
        <input
          id='input-field'
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task..."
        />
        <button className="addtask-btn" onClick={handleAddTask}>Add Task</button>
      </div>

      <h2>todo-List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className='delete-btn' onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
