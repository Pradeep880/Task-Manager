import React from 'react';
import Task from './Task';
import './component.css';

const Dashboard = ({ tasks, editTask, deleteTask, markTaskCompleted, changePriority }) => {
    console.log(tasks);
  const now = new Date();
  const upcomingTasks = tasks.filter(task => !task.completed && new Date(task.dueDate) > now);
  const overdueTasks = tasks.filter(task => !task.completed && new Date(task.dueDate) <= now);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="dashboard">
      <h2>Upcoming Tasks</h2>
      {upcomingTasks.length === 0 && <p>No upcoming tasks</p>}
      {upcomingTasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          editTask={editTask} 
          deleteTask={deleteTask} 
          markTaskCompleted={markTaskCompleted} 
          changePriority={changePriority} 
        />
      ))}

      <h2>Overdue Tasks</h2>
      {overdueTasks.length === 0 && <p>No overdue tasks</p>}
      {overdueTasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          editTask={editTask} 
          deleteTask={deleteTask} 
          markTaskCompleted={markTaskCompleted} 
          changePriority={changePriority} 
        />
      ))}

      <h2>Completed Tasks</h2>
      {completedTasks.length === 0 && <p>No completed tasks</p>}
      {completedTasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          editTask={editTask} 
          deleteTask={deleteTask} 
          markTaskCompleted={markTaskCompleted} 
          changePriority={changePriority} 
        />
      ))}
    </div>
  );
};

export default Dashboard;
