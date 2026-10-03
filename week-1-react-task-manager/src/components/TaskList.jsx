import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;