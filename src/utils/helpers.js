export const groupTickets = (tickets, grouping) => {
    if (!Array.isArray(tickets)) return {};
    return tickets.reduce((groups, ticket) => {
        const key = ticket[grouping] || 'No Group';
        if (!groups[key]) groups[key] = [];
        groups[key].push(ticket);
        return groups;
    }, {});
};

export const sortTickets = (tickets, sorting) => {
    return tickets.sort((a, b) => {
        if (sorting === 'priority') return b.priority - a.priority;
        if (sorting === 'title') return a.title.localeCompare(b.title);
        return 0;
    });
};
