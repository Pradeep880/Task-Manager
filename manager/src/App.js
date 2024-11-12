import React, { useState, useEffect, useRef } from 'react';
import Dashboard from './component/Dashboard';
import TaskForm from './component/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const tasksRef = useRef(tasks);

  const [taskToEdit, setTaskToEdit] = useState(null);

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    tasksRef.current = storedTasks;
  }, []);

  // Save tasks to local storage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksRef.current));
  }, [tasks]);

  const addTask = (task) => {
    const updatedTasks = [...tasksRef.current, task];
    setTasks(updatedTasks);
    tasksRef.current = updatedTasks;
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasksRef.current.map(task => task.id === updatedTask.id ? updatedTask : task);
    setTasks(updatedTasks);
    tasksRef.current = updatedTasks;
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasksRef.current.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    tasksRef.current = updatedTasks;
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const editTask = (task) => {
    setTaskToEdit(task);
  };

  const markTaskCompleted = (taskId) => {
    const updatedTasks = tasksRef.current.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    tasksRef.current = updatedTasks;
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const changePriority = (taskId, newPriority) => {
    const updatedTasks = tasksRef.current.map(task => 
      task.id === taskId ? { ...task, priority: newPriority } : task
    );
    setTasks(updatedTasks);
    tasksRef.current = updatedTasks;
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
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
