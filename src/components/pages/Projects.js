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

const skills = [
  { name: "Python", level: "Experienced" },
  { name: "Linear Algebra", level: "Experienced" },
  { name: "Jupyter", level: "Experienced" },
  
  // Add more skills as needed
];

export default function Projects() {
  return (
    <section id="projects">
      {/* <h5>Check Out</h5>
      <h2>My Projects</h2> */}

      <div className="skills">
        <h3 className="skills__title">GARB Development</h3>
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
        <h3 className="skills__title">Search Engine</h3>
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
        <h3 className="skills__title">Animation</h3>
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
        <h3 className="skills__title">Quantum Computing</h3>
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

      <div className="skills">
        <h3 className="skills__title">Neural Network Development</h3>
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

    </section>
  );

}
