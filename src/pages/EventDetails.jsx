import React from 'react';
import { useParams, Link } from 'react-router-dom';

const EventDetails = ({ events }) => {
  const { id } = useParams();

  // Find the event by ID
  const event = events.find(event => event.id === id);

  if (!event) {
    return <p>Event not found.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <p><strong>Description:</strong> {event.description}</p>

      <Link to="/" style={{ marginTop: '20px', display: 'inline-block' }}>
        ← Back to Upcoming Events
      </Link>
    </div>
  );
};

export default EventDetails;
