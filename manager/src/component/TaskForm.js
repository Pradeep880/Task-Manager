import React, { useState, useEffect } from 'react';
import './component.css';

const TaskForm = ({ addTask, updateTask, taskToEdit, setTaskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.dueDate);
      setPriority(taskToEdit.priority);
    } else {
      resetForm();
    }
  }, [taskToEdit]);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Medium');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      description,
      dueDate,
      priority,
      completed: taskToEdit ? taskToEdit.completed : false,
    };

    if (taskToEdit) {
      updateTask(newTask);
    } else {
      addTask(newTask);
    }

    resetForm();
    setTaskToEdit(null);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
