import React from 'react';
import { Link } from 'react-router-dom';
import "./UpcomingEvents.css"; // custom CSS for styling

const UpcomingEvents = ({ events = [] }) => {
  // Filter upcoming events (date in future)
  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());

  return (
        <div className="events-container">
      <h2 className="page-title">Upcoming Events</h2>

      {upcomingEvents.length === 0 ? (
        <p className="no-events">No upcoming events available.</p>
      ) : (
        <div className="events-list">
          {upcomingEvents.map(event => (
            <div className="event-card" key={event.id}>
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p>{event.description}</p>
              <Link to={`/events/${event.id}`} className="details-link">View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
