import React from "react";
import "../../App.css";
import { BsPatchCheckFill } from "react-icons/bs";

const skills1 = [
  { name: "React JS", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Experienced" },
  // Add more skills as needed
];
const skills2 = [
  { name: "C / C++", level: "Experienced" },
  { name: "Bash", level: "Experienced" },
  { name: "Git", level: "Experienced" },
  { name: "Python", level: "Experienced" },

  // Add more skills as needed
];

const skills3 = [
  { name: "Python", level: "Experienced" },
  { name: "PyQt5", level: "Experienced" },
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  // Add more skills as needed
];

const skills4 = [
  { name: "Python", level: "Experienced" },
  { name: "Qiskit", level: "Experienced" },
  { name: "Linear Algebra", level: "Experienced" },

  // Add more skills as needed
];

const skills5 = [
  { name: "Java", level: "Experienced" },
  { name: "Python", level: "Experienced" },
  { name: "HMM", level: "Experienced" },
  { name: "IntelliJ", level: "Experienced" },

  // Add more skills as needed
];

const skills = [
  { name: "Python", level: "Experienced" },
  { name: "Linear Algebra", level: "Experienced" },
  { name: "Jupyter", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  { name: "HTML5", level: "Experienced" },
  { name: "Flask", level: "Experienced" },
  { name: "Pytorch", level: "Experienced" }

  // Add more skills as needed
];

export default function Projects() {
  return (
    <section id="projects">
      {/* <h5>Check Out</h5>
      <h2>My Projects</h2> */}
      <div className="page-wrapper" style={{ height: "200vh" }}>
        <div className="skills-container">
          <h2>
            {" "}
            SELECTED WORK{"   "}
            <a
              class="social-icon-link github"
              href="https://github.com/ChristianNyamekye"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </a>
          </h2>

          <div className="skills">
            <h3
              className="skills__title"
              style={{
                fontFamily: "'Pirata One', sans-serif",
                fontSize: "30px",
                color: "white",
              }}
            >
              AI-Driven Chatbot
            </h3>
            <div className="skills__list">
              {skills.map((skill, index) => (
                <article className="skills__details" key={index}>
                  <BsPatchCheckFill className="skills__icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small>{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="skills">
            <h3
              className="skills__title"
              style={{
                fontFamily: "'Pirata One', sans-serif",
                fontSize: "30px",
                color: "white",
              }}
            >
              Gaze Aware Reading Aid
            </h3>
            <div className="skills__list">
              {skills1.map((skill, index) => (
                <article className="skills__details" key={index}>
                  <BsPatchCheckFill className="skills__icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small>{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="skills">
            <h3
              className="skills__title"
              style={{
                fontFamily: "'Pirata One', sans-serif",
                fontSize: "30px",
                color: "white",
              }}
            >
              Tiny Search Engine
            </h3>
            <div className="skills__list">
              {skills2.map((skill, index) => (
                <article className="skills__details" key={index}>
                  <BsPatchCheckFill className="skills__icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small>{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="skills">
            <h3
              className="skills__title"
              style={{
                fontFamily: "'Pirata One', sans-serif",
                fontSize: "30px",
                color: "white",
              }}
            >
              Lossless Data Compression
            </h3>
            <div className="skills__list">
              {skills5.map((skill, index) => (
                <article className="skills__details" key={index}>
                  <BsPatchCheckFill className="skills__icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small>{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="skills">
            <h3
              className="skills__title"
              style={{
                fontFamily: "'Pirata One', sans-serif",
                fontSize: "30px",
                color: "white",
              }}
            >
              Interactive Navigation System
            </h3>
            <div className="skills__list">
              {skills3.map((skill, index) => (
                <article className="skills__details" key={index}>
                  <BsPatchCheckFill className="skills__icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small>{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="skills">
            <h3
              className="skills__title"
              style={{
                fontFamily: "'Pirata One', sans-serif",
                fontSize: "30px",
                color: "white",
              }}
            >
              Quantum Computing
            </h3>
            <div className="skills__list">
              {skills4.map((skill, index) => (
                <article className="skills__details" key={index}>
                  <BsPatchCheckFill className="skills__icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small>{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
