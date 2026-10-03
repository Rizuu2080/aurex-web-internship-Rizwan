function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-text">{task.text}</span>
      <div className="task-actions">
        <button onClick={() => toggleComplete(task.id)} className="complete-btn">
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;