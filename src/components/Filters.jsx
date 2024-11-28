import React from 'react';

const Filters = ({ grouping, setGrouping, sorting, setSorting }) => {
    return (
        <div className="filters">
            <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
                <option value="status">Group by Status</option>
                <option value="user">Group by User</option>
                <option value="priority">Group by Priority</option>
            </select>
            <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
                <option value="priority">Sort by Priority</option>
                <option value="title">Sort by Title</option>
            </select>
        </div>
    );
};

export default Filters;
