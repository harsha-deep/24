import React from 'react';
import TicketCard from './TicketCard';
import { groupTickets, sortTickets } from '../utils/helpers';

const KanbanBoard = ({ tickets, grouping, sorting }) => {
    if (!Array.isArray(tickets)) return <div>No tickets available.</div>;

    const groupedTickets = groupTickets(tickets, grouping);
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
