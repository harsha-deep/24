import React from 'react';

const TicketCard = ({ ticket }) => {
    const { title, status, priority, user } = ticket;

    return (
        <div className="ticket-card">
            <h3>{title}</h3>
            <p>Status: {status}</p>
            <p>Priority: {priority}</p>
            <p>User: {user}</p>
        </div>
    );
};

export default TicketCard;
