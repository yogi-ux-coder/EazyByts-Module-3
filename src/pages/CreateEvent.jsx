import React, { useState } from "react";
import "./CreateEvent.css";

const CreateEvent = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !description) {
      setMessage("All fields are required.");
      return;
    }

    const newEvent = {
      id: Date.now().toString(),
      title,
      date,
      description,
    };

    addEvent(newEvent);
    setTitle("");
    setDate("");
    setDescription("");
    setMessage("✅ Event added successfully!");
  };

  return (
    <div className="create-event-container">
      <h2 className="form-title">Create New Event</h2>
      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit} className="event-form">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Description</label>
        <textarea
          placeholder="Describe the event"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button type="submit" className="submit-btn">Add Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
