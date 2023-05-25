import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input col-md-8 ms-5 p-3"
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="col-3 bg-dark text-white p-3" type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
