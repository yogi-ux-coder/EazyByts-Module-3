import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateEvent from "./pages/CreateEvent";
import UpcomingEvents from "./pages/UpcomingEvents";
import PastEvents from "./pages/PastEvents";
import Dashboard from "./pages/Dashboard";
import EventDetails from "./pages/EventDetails";
import Navbar from "./components/Navbar";

import "./style.css";
import "./App.css";

function App() {
  const [events, setEvents] = useState([
    // Upcoming Events
    {
      id: "1",
      title: "React Developers Meetup",
      date: "2025-06-25",
      description: "A gathering for frontend enthusiasts to share React knowledge.",
    },
    {
      id: "2",
      title: "AI & Machine Learning Conference",
      date: "2025-07-10",
      description: "Explore advancements in artificial intelligence and machine learning.",
    },
    {
      id: "3",
      title: "Next.js Performance Workshop",
      date: "2025-08-05",
      description: "Hands-on session to optimize web performance with Next.js.",
    },
    {
      id: "4",
      title: "Startup Pitch Night",
      date: "2025-09-15",
      description: "Upcoming startups showcase their ideas to investors.",
    },

    // Past Events
    {
      id: "5",
      title: "CSS Design Masterclass",
      date: "2025-03-01",
      description: "Advanced CSS tricks and layout systems explained.",
    },
    {
      id: "6",
      title: "JavaScript Essentials Bootcamp",
      date: "2025-04-10",
      description: "A complete beginner’s bootcamp for JavaScript.",
    },
    {
      id: "7",
      title: "Open Source Contribution Day",
      date: "2025-05-01",
      description: "Hands-on session on how to contribute to open-source projects.",
    },
    {
      id: "8",
      title: "Web Accessibility Webinar",
      date: "2025-02-20",
      description: "Ensuring your websites are accessible to everyone.",
    },
  ]);

  // Function to add a new event
  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  return (
    <Router>
      <div className="dashboard">
        <main className="content">
          {/* Optional Additional Navbar */}
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<CreateEvent addEvent={addEvent} />} />
            <Route path="/upcoming" element={<UpcomingEvents events={events} />} />
            <Route path="/past" element={<PastEvents events={events} />} />
            <Route path="/events/:id" element={<EventDetails events={events} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
