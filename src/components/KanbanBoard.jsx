import React from 'react';
import TicketCard from './TicketCard';

const groupTickets = (tickets, grouping, users) => {
    if (!Array.isArray(tickets)) return {};
    return tickets.reduce((groups, ticket) => {
        let key = 'No Group';
        if (grouping === 'user' && users) {
            const user = users.find((u) => u.id === ticket.userId);
            key = user ? user.name : 'Unknown User';
        } else {
            key = ticket[grouping] || 'No Group';
        }
        if (!groups[key]) groups[key] = [];
        groups[key].push(ticket);
        return groups;
    }, {});
};

const sortTickets = (tickets, sorting) => {
    return tickets.sort((a, b) => {
        if (sorting === 'priority') return b.priority - a.priority;
        if (sorting === 'title') return a.title.localeCompare(b.title);
        return 0;
    });
};

const KanbanBoard = ({ tickets, grouping, sorting, users }) => {
    if (!Array.isArray(tickets)) return <div>No tickets available.</div>;

    const groupedTickets = groupTickets(tickets, grouping, users);
    const sortedTickets = Object.entries(groupedTickets).reduce((acc, [key, value]) => {
        acc[key] = sortTickets(value, sorting);
        return acc;
    }, {});

    return (
        <div className="kanban-board">
            {Object.keys(sortedTickets).map((group) => (
                <div key={group} className="kanban-column">
                    <h2>{group.toUpperCase()}</h2>
                    {sortedTickets[group].map((ticket) => (
                        <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default KanbanBoard;
