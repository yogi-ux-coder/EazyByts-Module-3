import React from "react";
import "./Home.css"; // Create this CSS file if it doesn't exist

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-box">
        <h1>Welcome to Event Management System</h1>
        <p>Please login or register to manage your events.</p>
      </div>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Event Manager is your all-in-one platform to create, manage, and explore tech, business, and
          social events. We aim to streamline the event planning process for organizers and attendees alike.
        </p>
      </section>

      <section className="features-section">
        <h2>What You Can Do</h2>
        <ul>
          <li>✅ Create and manage your own events</li>
          <li>📅 View upcoming and past events easily</li>
          <li>🔒 Secure login and registration</li>
          <li>📈 Track event history effortlessly</li>
        </ul>
      </section>

      <section className="links-section">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/upcoming">Upcoming Events</a></li>
          <li><a href="/past">Past Events</a></li>
          <li><a href="/create">Create Event</a></li>
          <li><a href="https://github.com/your-project" target="_blank" rel="noreferrer">GitHub Repo</a></li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2025 Event Manager. All rights reserved.</p>
        <p>Contact us: <a href="mailto:info@eventmanager.com">info@eventmanager.com</a></p>
      </footer>
    </div>
  );
};

export default Home;
