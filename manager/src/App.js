import React, { useState, useEffect, useRef } from 'react';
import Dashboard from './component/Dashboard';
import TaskForm from './component/TaskForm';
import SearchFilter from './component/SearchFilter';
import Header  from './component/Header';
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const tasksRef = useRef(tasks);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ priority: '', status: '' });
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isTaskFormVisible, setTaskFormVisible] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    tasksRef.current = storedTasks;
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksRef.current));
  }, [tasks]);

  const addTask = (task) => {
    const updatedTasks = [...tasksRef.current, task];
    setTasks(updatedTasks);
    tasksRef.current = updatedTasks;
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTaskFormVisible(false);
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
    setTaskFormVisible(true);
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

  const filteredTasks = tasks.filter(task => {
    const matchesPriority = filter.priority === '' || task.priority === filter.priority;
    const matchesStatus = filter.status === '' || 
      (filter.status === 'completed' ? task.completed : !task.completed);
    const matchesSearchQuery = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesPriority && matchesStatus && matchesSearchQuery;
  });

  return (
    <div className="App">
      <Header></Header>
      <button 
        onClick={() => setTaskFormVisible(!isTaskFormVisible)} 
        className="toggle-button"
      >
        {isTaskFormVisible ? <FaMinus /> : <IoMdAdd />}
      </button>
      {isTaskFormVisible && (
        <TaskForm 
          addTask={addTask} 
          updateTask={updateTask} 
          taskToEdit={taskToEdit} 
          setTaskToEdit={setTaskToEdit} 
        />
      )}
      <SearchFilter setSearchQuery={setSearchQuery} setFilter={setFilter} />
      <Dashboard 
        tasks={filteredTasks} 
        editTask={editTask} 
        deleteTask={deleteTask} 
        markTaskCompleted={markTaskCompleted} 
        changePriority={changePriority} 
      />
    </div>
  );
};

export default App;
