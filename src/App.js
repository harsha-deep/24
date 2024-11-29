import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Filters from './components/Filters';
import { fetchTickets } from './utils/api';
import './styles/styles.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTickets();
        setTickets(data.tickets);
        setUserData(data.users);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
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
      <KanbanBoard tickets={tickets} grouping={grouping} sorting={sorting} users={userData} />
    </div>
  );
};

export default App;
