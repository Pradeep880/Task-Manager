import React from 'react'
import Dashboard from './component/Dashboard';
import Task from './component/Task'
import SearchFilter from './component/SearchFilter';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Task Manager</h1>
        <Dashboard></Dashboard>
        <Task></Task>
        <SearchFilter></SearchFilter>
    </div>
  );
}

export default App;
