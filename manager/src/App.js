import React, { useState, useEffect } from 'react';
import Dashboard from './component/Dashboard';
import TaskForm from './component/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (task) => {
    setTaskToEdit(task);
  };

  const markTaskCompleted = (taskId) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const changePriority = (taskId, newPriority) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, priority: newPriority } : task
    );
    setTasks(updatedTasks);
  };

  

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm 
        addTask={addTask} 
        updateTask={updateTask} 
        taskToEdit={taskToEdit} 
        setTaskToEdit={setTaskToEdit} 
      />
      
      <Dashboard 
      tasks={tasks} 
        editTask={editTask} 
        deleteTask={deleteTask} 
        markTaskCompleted={markTaskCompleted} 
        changePriority={changePriority} 
      />
    </div>
  );
};

export default App;
