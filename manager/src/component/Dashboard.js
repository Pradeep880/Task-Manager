import React from 'react';
import './component.css';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { LuChevronsUp } from "react-icons/lu";
import { LuChevronsDown } from "react-icons/lu";
import { LuChevronsUpDown } from "react-icons/lu";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
const Dashboard = ({ tasks, editTask, deleteTask, markTaskCompleted, changePriority }) => {
  const overdueTasks = tasks.filter(task => new Date(task.dueDate) < new Date() && !task.completed);
  const upcomingTasks = tasks.filter(task => new Date(task.dueDate) >= new Date() && !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  const handleEdit = (task) => {
    editTask(task);
  };

  const handleDelete = (task) => {
    deleteTask(task.id);
  };

  const handleToggleComplete = (task) => {
    markTaskCompleted(task.id);
  };

  const handleChangePriority = (taskId, value) => {
    changePriority(taskId, value);
  };

  return (
    <div className="dashboard-container">
      <div className="overdue">
        <div className="task-section">
          <h2 className='task-title'>Overdue Tasks</h2>
          {overdueTasks.length > 0 ? (
            overdueTasks.map(task => (
              <div key={task.id} className={`task ${task.priority.toLowerCase()}`}>
                {console.log(task)}
                {task.priority==='High'?<p style={{color:"red",textAlign:"left",marginBottom:"10px"}}>
                <LuChevronsUp />High Priority</p>:task.priority==='Medium'?<p style={{color:"orange",textAlign:"left",marginBottom:"10px"}}>
                <LuChevronsUpDown />Medium Priority</p>:<p style={{color:"green",textAlign:"left",marginBottom:"10px"}}>
                    <LuChevronsDown/>Low Priority</p>}
                <h3 className='title'>{task.title}</h3>
                <p>{task.description}</p>
                <p>Due: {task.dueDate}</p>
                <button onClick={() => handleToggleComplete(task)} className='button-complete'>
                <IoCheckmarkDoneCircle/>{task.completed ? 'Unmark' :'Complete' }
                </button>
                <button onClick={() => handleEdit(task)} className="button-edit">
                  <CiEdit /> Edit
                </button>
                <button onClick={() => handleDelete(task)} className="button-delete">
                  <MdDeleteOutline /> Delete
                </button>
                <select onChange={(e) => handleChangePriority(task.id, e.target.value)} value={task.priority}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            ))
          ) : (
            <p>No overdue tasks</p>
          )}
        </div>
        </div>
        <div className='completed'>
        <div className="task-section">
          <h2 className='task-title'>Completed Tasks</h2>
          {completedTasks.length > 0 ? (
            completedTasks.map(task => (
              <div key={task.id} className={`task ${task.priority.toLowerCase()}`}>
                      {console.log(task)}
                 {task.priority==='High'?<p style={{color:"red",textAlign:"left",marginBottom:"10px"}}>
                <LuChevronsUp />High Priority</p>:task.priority==='Medium'?<p style={{color:"orange",textAlign:"left",marginBottom:"10px"}}>
                <LuChevronsUpDown />Medium Priority</p>:<p style={{color:"green",textAlign:"left",marginBottom:"10px"}}>
                    <LuChevronsDown/>Low Priority</p>}
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Due: {task.dueDate}</p>
                <button onClick={() => handleToggleComplete(task)} className='button-complete'>
                <IoCheckmarkDoneCircle/>{task.completed ? 'Unmark' :'Complete' }

                </button>
                <button onClick={() => handleEdit(task)} className="button-edit">
                  <CiEdit /> Edit
                </button>
                <button onClick={() => handleDelete(task)} className="button-delete">
                  <MdDeleteOutline /> Delete
                </button>
                <select onChange={(e) => handleChangePriority(task.id, e.target.value)} value={task.priority}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
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
          <h2 className='task-title'>Upcoming Tasks</h2>
          {upcomingTasks.length > 0 ? (
            upcomingTasks.map(task => (
              <div key={task.id} className={`task ${task.priority.toLowerCase()}`}>
                      {console.log(task)}
                 {task.priority==='High'?<p style={{color:"red",textAlign:"left",marginBottom:"10px"}}>
                <LuChevronsUp />High Priority</p>:task.priority==='Medium'?<p style={{color:"orange",textAlign:"left",marginBottom:"10px"}}>
                <LuChevronsUpDown />Medium Priority</p>:<p style={{color:"green",textAlign:"left",marginBottom:"10px"}}>
                    <LuChevronsDown/>Low Priority</p>}
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Due: {task.dueDate}</p>
                <button onClick={() => handleToggleComplete(task)} className='button-complete'>
                <IoCheckmarkDoneCircle/>{task.completed ? 'Unmark' :'Complete' }
                </button>
                <button onClick={() => handleEdit(task)} className="button-edit">
                  <CiEdit /> Edit
                </button>
                <button onClick={() => handleDelete(task)} className="button-delete">
                  <MdDeleteOutline /> Delete
                </button>
                <select onChange={(e) => handleChangePriority(task.id, e.target.value)} value={task.priority}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
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
