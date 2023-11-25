import React, { useState } from "react";
import "./App.css";

function Portfolio() {
  const [filter, setFilter] = useState("");
  const projects = [
    { name: "OOP Chess using SFML", tech: "C++" },
    { name: "Maching Learning", tech: "Python" },
    { name: "Computer Networks", tech: "Node.js" },
    // Add more projects as needed
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Muhammad Zain Ul Abiddin</h1>
        <p>Web Developer | Software Engineer | DevOps Enthusiast</p>
      </header>

      <nav>
        <input
          type="text"
          placeholder="Filter projects by technology"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </nav>

      <section id="home">
        <h2>Home</h2>
        <p>
          Welcome to my portfolio website. I am a passionate web developer with
          experience in various technologies.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          {projects
            .filter((project) =>
              project.tech.toLowerCase().includes(filter.toLowerCase())
            )
            .map((project, index) => (
              <li key={index}>
                {project.name} ({project.tech})
              </li>
            ))}
        </ul>
      </section>

      <section id="education">
        <h2>Education</h2>
        <ul>
          <li>O-Levels - Bahria Foundation College</li>
          <li>A-Levels - Credo College</li>
          <li>BS Computer Science - FAST NUCES</li>
          {/* Add more education details as needed */}
        </ul>
      </section>

      <section id="education">
        <h2>Certifications</h2>
        <ul>
          <li>Annual Certificate for DevOps - FAST NUCES</li>
          <li>Coders Cup FAST NUCES</li>
          <li>DevOps Mastering Workshop - 10Pearls Cloud Con</li>

          {/* Add more education details as needed */}
        </ul>
      </section>
      <footer>
        <p>2023 Muhammad Zain Ul Abiddin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
