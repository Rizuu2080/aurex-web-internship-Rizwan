import { useState } from 'react';

function TaskForm({ addTask }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setError(true);
      return;
    }
    
    addTask(inputValue);
    setInputValue('');
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          if (error) setError(false);
        }}
      />
      <button type="submit">Add Task</button>
      {error && <span className="error-msg">Task cannot be empty!</span>}
    </form>
  );
}

export default TaskForm;