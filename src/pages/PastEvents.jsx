import React from 'react';
import { Link } from 'react-router-dom';
import "./UpcomingEvents.css";

const PastEvents = ({ events = [] }) => {
  // Get today's date
  const today = new Date();

  // Filter events that happened before today
  const pastEvents = events.filter(event => new Date(event.date) < today);

  return (
        <div className="events-container">
      <h2 className="page-title">Past Events</h2>

      {pastEvents.length === 0 ? (
        <p className="no-events">No past events available.</p>
      ) : (
        <div className="events-list">
          {pastEvents.map(event => (
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

export default PastEvents;
