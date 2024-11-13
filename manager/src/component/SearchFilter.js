import React from 'react';
import './component.css';

const SearchFilter = ({ setSearchQuery, setFilter }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      priority: e.target.value
    }));
  };

  const handleStatusChange = (e) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      status: e.target.value
    }));
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={handleSearchChange}
      />
      <select onChange={handlePriorityChange}>
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select onChange={handleStatusChange}>
        <option value="">All Statuses</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default SearchFilter;