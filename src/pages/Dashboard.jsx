import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }} className="dashboard-container">
      <h1 className="dashboard-title">Welcome to Dashboard</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }} className="dashboard-buttons">
        <button onClick={() => navigate('/create')}>Create Event</button>
        <button onClick={() => navigate('/upcoming')}>Upcoming Events</button>
        <button onClick={() => navigate('/past')}>Past Events</button>
      </div>
    </div>
  );
};

export default Dashboard;
