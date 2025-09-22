import React from "react";
import "./project.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Grocery Management System (2025-Present)</h3>
          <p><strong>Tech:</strong> HTML, CSS, JS, NodeJS, MongoDB</p>
          <p>Created responsive web app with dynamic pricing and real-time bill calculation.</p>
        </div>

        <div className="project-card">
          <h3>Airline Ticket Booking System (2024–2025)</h3>
          <p><strong>Tech:</strong> Java, Oracle DB</p>
          <p>Desktop app for ticket booking, seat selection, and booking history.</p>
        </div>

        <div className="project-card">
          <h3>Airline Cargo Management System (2023–2024)</h3>
          <p><strong>Tech:</strong> Java, MySQL</p>
          <p>Desktop app for cargo booking, tracking, and delivery with database integration.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
