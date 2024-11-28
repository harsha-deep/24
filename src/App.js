import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Filters from './components/Filters';
import { fetchTickets } from './utils/api';
import './styles/styles.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTickets();
      setTickets(data);
    };
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Filters
        grouping={grouping}
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
      <KanbanBoard tickets={tickets} grouping={grouping} sorting={sorting} />
    </div>
  );
};

export default App;
