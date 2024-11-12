import React from 'react';
import './component.css';

const Task = ({ task, editTask, deleteTask, markTaskCompleted, changePriority }) => {
  const handleEdit = () => {
    editTask(task);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggleComplete = () => {
    markTaskCompleted(task.id);
  };

  const handleChangePriority = (e) => {
    changePriority(task.id, e.target.value);
  };

  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <p>Priority: 
        <select value={task.priority} onChange={handleChangePriority}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </p>
      <button className="edit" onClick={handleEdit}>Edit</button>
      <button className="delete" onClick={handleDelete}>Delete</button>
      <button className="complete" onClick={handleToggleComplete}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
    </div>
  );
};

export default Task;
