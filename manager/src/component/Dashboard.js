import React from 'react';
import './component.css';

const Dashboard = ({ tasks, editTask, deleteTask, markTaskCompleted, changePriority }) => {
  const overdueTasks = tasks.filter(task => new Date(task.dueDate) < new Date() && !task.completed);
  const upcomingTasks = tasks.filter(task => new Date(task.dueDate) >= new Date() && !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="task-section">
          <h2>Overdue Tasks</h2>
          {overdueTasks.length > 0 ? (
            overdueTasks.map(task => (
              <div key={task.id} className={`task ${task.priority}`}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Due: {task.dueDate}</p>
                <button onClick={() => markTaskCompleted(task.id)}>
                  {task.completed ? 'Unmark' : 'Complete'}
                </button>
                <button onClick={() => editTask(task)} className="button-edit">Edit</button>
                <button onClick={() => deleteTask(task.id)} className="button-delete">Delete</button>
                <select onChange={(e) => changePriority(task.id, e.target.value)} value={task.priority}>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            ))
          ) : (
            <p>No overdue tasks</p>
          )}
        </div>
        <div className="task-section">
          <h2>Completed Tasks</h2>
          {completedTasks.length > 0 ? (
            completedTasks.map(task => (
              <div key={task.id} className={`task ${task.priority}`}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Due: {task.dueDate}</p>
                <button onClick={() => markTaskCompleted(task.id)}>
                  {task.completed ? 'Unmark' : 'Complete'}
                </button>
                <button onClick={() => editTask(task)} className="button-edit">Edit</button>
                <button onClick={() => deleteTask(task.id)} className="button-delete">Delete</button>
                <select onChange={(e) => changePriority(task.id, e.target.value)} value={task.priority}>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            ))
          ) : (
            <p>No completed tasks</p>
          )}
        </div>
      </div>
      <div className="main-content">
        <div className="task-section">
          <h2>Upcoming Tasks</h2>
          {upcomingTasks.length > 0 ? (
            upcomingTasks.map(task => (
              <div key={task.id} className={`task ${task.priority}`}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Due: {task.dueDate}</p>
                <button onClick={() => markTaskCompleted(task.id)}>
                  {task.completed ? 'Unmark' : 'Complete'}
                </button>
                <button onClick={() => editTask(task)} className="button-edit">Edit</button>
                <button onClick={() => deleteTask(task.id)} className="button-delete">Delete</button>
                <select onChange={(e) => changePriority(task.id, e.target.value)} value={task.priority}>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            ))
          ) : (
            <p>No upcoming tasks</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
