import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuickNav.css';

const QuickNav = () => {
  const navigate = useNavigate();

  return (
    <div className="quick-nav-container">
      <div className="nav-card" onClick={() => navigate('/create')}>
        <h2>Create Event</h2>
        <p>Start organizing a new event</p>
      </div>
      <div className="nav-card" onClick={() => navigate('/upcoming')}>
        <h2>Upcoming Events</h2>
        <p>See what's coming soon</p>
      </div>
      <div className="nav-card" onClick={() => navigate('/past')}>
        <h2>Past Events</h2>
        <p>View previously held events</p>
      </div>
    </div>
  );
};

export default QuickNav;
