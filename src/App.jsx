  import React, { useEffect } from "react";
  import "./App.css";
  import Particles from "react-tsparticles";
  import Skills from "./components/skills";
  import { ReactTyped } from "react-typed";


  function App() {
    
    // Grid hover effect (mouse & touch)
    useEffect(() => {
      const cells = document.querySelectorAll(".grid-cell");

      const handleMove = (x, y) => {
        cells.forEach(cell => {
          const rect = cell.getBoundingClientRect();
          const dx = x - (rect.left + rect.width / 2);
          const dy = y - (rect.top + rect.height / 2);
          const distance = Math.sqrt(dx*dx + dy*dy);

          if(distance < 80) {
            cell.classList.add("hovered");
          } else {
            cell.classList.remove("hovered");
          }
        });

        // Move custom cursor
        const cursor = document.getElementById("cursor");
        if(cursor){
          cursor.style.transform = `translate(${x}px, ${y}px)`;
        }
      };

      const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);

      const handleTouchMove = (e) => {
        Array.from(e.touches).forEach(touch => {
          handleMove(touch.clientX, touch.clientY);
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
      };
    }, []);

    return (
      <div className="app">
        {/* Full-page grid background */}
        <div className="grid-bg">
  {Array.from({ length: 1000 }).map((_, i) => (
    <div
      key={i}
      className="grid-cell"
      onClick={(e) => {
        const cell = e.currentTarget;
        cell.classList.add("fall");
        setTimeout(() => cell.classList.remove("fall"), 1000);
      }}
      onTouchStart={(e) => {
        const cell = e.currentTarget;
        cell.classList.add("fall");
        setTimeout(() => cell.classList.remove("fall"), 1000);
      }}
    ></div>
  ))}
</div>


        {/* Particles */}
        <Particles
          className="particles"
          options={{
            background: { color: { value: "transparent" } },
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
            <li><a href="#certifications">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Header */}
        <header className="header">
          <img src="/assets/me.jpeg" alt="Yogesh" className="profile-pic" />
          <h1>
          <ReactTyped
          strings={[
            "Hi, I’m Yogesh",
            "Pre-final year CSE Student",
            "Aspiring IT Professional",
            "Full-Stack Developer"
         ]}
          typeSpeed={70}
          backSpeed={50}
          loop
          />
          </h1>
          <div className="socials">
            <a href="https://www.linkedin.com/in/yogesh-v-a29666370/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/yogeshv07" target="_blank" rel="noreferrer">GitHub</a>
            <a href="/Resume/yogesh_resume.pdf" target="_blank" rel="noreferrer" download >Resume</a>
          </div>
        </header>

        {/* About */}
        <section id="about" className="card">
          <h2>About Me</h2>
          <p>
            Aspiring IT professional with strong expertise in programming and cloud technologies,
            eager to design and implement modern, scalable solutions in a dynamic environment.
          </p>
        </section>

       {/* Projects */}
<section id="projects" className="card">
  <h2>Projects</h2>

  <div className="projects-grid">

    <div className="project-card">
      <img src="/Project_photo/grocery.jpg" alt="Grocery Management System" />
      <div className="project-content">
        <h3>Grocery Management System</h3>
        <p className="project-year">2025 – Present</p>
        <p className="project-tech">MERN Stack</p>
        <p>
          Developed a responsive web application with dynamic pricing,
          real-time bill calculation, and efficient product management.
        </p>

        <a
          href="https://github.com/yogeshv07/amzonmart"
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
        >
          View Project
        </a>
      </div>
    </div>

    <div className="project-card">
      <img src="/Project_photo/ticket_book.jpg" alt="Airline Ticket Booking System" />
      <div className="project-content">
        <h3>Airline Ticket Booking System</h3>
        <p className="project-year">2024 – 2025</p>
        <p className="project-tech">Java, Oracle Database</p>
        <p>
          Built a desktop application for ticket booking, seat selection,
          and viewing booking history with database support.
        </p>

        <a
          href="https://github.com/yogeshv07/flight_ticket_booking_system"
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
        >
          View Project
        </a>
      </div>
    </div>

    <div className="project-card">
      <img src="/Project_photo/airline_cargo.jpg" alt="Airline Cargo Management System" />
      <div className="project-content">
        <h3>Airline Cargo Management System</h3>
        <p className="project-year">2023 – 2024</p>
        <p className="project-tech">Java, MySQL</p>
        <p>
          Designed a cargo booking and tracking system with delivery
          management and database integration.
        </p>

        <a
          href="https://github.com/yogeshv07/AirlinecargoManagementSystem"
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
        >
          View Project
        </a>
      </div>
    </div>

  </div>
</section>



        {/* Skills */}
        <section id="skills" className="card" style={{ position: "relative", overflow: "hidden", height: "150px" }}>
          <h2>Skills</h2>
          <Skills />
        </section>

{/* Certifications */}
{/* Certifications */}
<section id="certifications" className="card cert-section">
  <h2 className="section-title">Certifications</h2>

  <div className="cert-grid">

    <div className="cert-card">
      <h3>Associate in IT Foundation Skills (Java)</h3>
      <p className="cert-org">Infosys Springboard</p>
      <p className="cert-desc">
        Core Java fundamentals including OOP concepts, control flow,
        exception handling, and application development.
      </p>
      <a
        href="/Certificates/Associate in IT Foundation Skills (Java).pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cert-view"
      >
        View Credential →
      </a>
    </div>

    <div className="cert-card">
      <h3>AWS Academy Graduate – Data Engineering</h3>
      <p className="cert-org">AWS Academy</p>
      <p className="cert-desc">
        Data engineering pipelines, AWS storage solutions,
        analytics services, and cloud-based data processing.
      </p>
      <a
        href="/Certificates/AWS_Academy_Graduate___Data_Engineering___Training_Badge_Badge20251220-32-hk392i.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cert-view"
      >
        View Credential →
      </a>
    </div>

    <div className="cert-card">
      <h3>Machine Learning for Engineering & Science Applications</h3>
      <p className="cert-org">NPTEL / Online Certification</p>
      <p className="cert-desc">
        Regression, classification, model evaluation,
        and real-world engineering use cases.
      </p>
      <a
        href="/Certificates/Machine Learning for Engineering and science applications.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cert-view"
      >
        View Credential →
      </a>
    </div>

  </div>
</section>






        {/* Contact */}
        <section id="contact" className="card">
          <h2>Contact Me</h2>
          <p>📧 yogesh3207k@gmail.com</p>
          <p>📞 9488543826</p>
          <p>🏠 12-4-44, Sastha Nagar 2nd Street, S.Alangualam, Madurai-17</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d610.3062853930185!2d78.11718187509923!3d9.951891561822771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1758481924764!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </section>

        <footer className="footer">
          2026_Yogesh V
        </footer>

        {/* Custom cursor */}
        <div className="cursor" id="cursor"></div>
      </div>
    );
  }

  export default App;
