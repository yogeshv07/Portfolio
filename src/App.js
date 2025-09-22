import React from "react";
import "./App.css";
import Particles from "react-tsparticles";
import Skills from "./components/skills";

function App() {
  return (
    <div className="app">
      {/* Background Particles */}
      <Particles
        className="particles"
        options={{
          background: { color: { value: "#0a0a2a" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          },
          particles: {
            color: { value: "#00f0ff" },
            links: { color: "#00f0ff", distance: 150, enable: true, opacity: 0.3, width: 1 },
            move: { direction: "none", enable: true, outMode: "bounce", random: true, speed: 1.5 },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { random: true, value: 3 },
          },
          detectRetina: true,
        }}
      />

      {/* Navbar */}
      <nav className="navbar">
        <h2>YOGESH V</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="header">
        <img src="/assets/me.jpeg" alt="Yogesh" className="profile-pic" />
        <h1>Hi, I’m Yogesh </h1>
        <p className="tagline">Pre-final year CSE Student | Aspiring IT Professional</p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/yogesh-v-a29666370/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/yogeshv07" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="card">
        <h2>About Me</h2>
        <p>
          Aspiring IT professional with strong expertise in programming and cloud technologies,
          eager to design and implement modern, scalable solutions in a dynamic environment.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="card">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Grocery Management System (2025-Present)</strong> – HTML, CSS, JS, NodeJS, MongoDB  
            Created responsive web app with dynamic pricing and real-time bill calculation.
          </li>
          <li>
            <strong>Airline Ticket Booking System (2024–2025)</strong> – Java, Oracle DB  
            Desktop app for ticket booking, seat selection, and booking history.
          </li>
          <li>
            <strong>Airline Cargo Management System (2023–2024)</strong> – Java, MySQL  
            Desktop app for cargo booking, tracking, and delivery with database integration.
          </li>
        </ul>
      </section>

      {/* Skills Section with floating skill icons */}
      <section
        id="skills"
        className="card"
        style={{ position: "relative", overflow: "hidden", height: "120px" }}
      >
            <h2 >Skills</h2>
        {/* Floating skill icons only in this section */}
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="card">
        <h2>Contact Me</h2>
        <p>📧 yogesh3207k@gmail.com</p>
        <p>📞 9488543826</p>
        <p>🏠 12-4-44, Sastha Nagar 2nd Street, S.Alangualam, Madurai-17</p>
        
  <div
  style={{
    position: "relative",
    width: "100%",
    paddingBottom: "56.25%", // 16:9 aspect ratio
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    marginTop: "20px",
  }}
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d610.3062853930185!2d78.11718187509923!3d9.951891561822771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1758481924764!5m2!1sen!2sin"
    style={{
      border: 0,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  ></iframe>
</div>


      </section>

      <footer className="footer">
        © 2025 Yogesh V. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
