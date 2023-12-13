import React, { useEffect, useRef } from "react";
import "./HeroSection.css";
import { Button } from "./button";
import "../App.css";
import Typed from "typed.js";
import { Link } from "react-router-dom";


import colorstack from "./images/cstack.jpeg";
import nslf from "./images/nslf.png";
import nsbe from "./images/nsbe.jpeg";
import yaf from "./images/yaf.png";
import codepath from "./images/cpath.jpeg";
import qiskit from "./images/qiskit.png"; // Update with the correct path

function HeroSection() {
  document.addEventListener("scroll", function () {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    const scrollFraction = scrollTop / (documentHeight - windowHeight);
    const scrollPercentage = Math.min(100, scrollFraction * 100);

    document.querySelector(
      ".scroll-indicator"
    ).style.height = `${scrollPercentage}%`;
  });

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "hey!",
        "you",
        "welcome to my humble abode.",
        "enjoy your stay",
        ":)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero-container">
      {/* <video src="/videos/video-10.mp4" autoPlay muted /> */}

      <h2>akwaaba</h2>
      <p>temet nosce...</p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          target="/projects"
        >
          PROJECTS
        </Button>

        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          target="/resume"
        >
          RESUMÉ <i className="far fa" />
        </Button>  */}

        <Link to="/resume" className="btn-mobile">
          <button
            className="btns btn--primary btn--large"
            style={{ cursor: "pointer" }}
            hover = "transparent"
          >
            RESUMÉ <i className="far fa" />
          </button>
        </Link>

        {/* <button
          className="btns btn--primary btn--large"
          onClick={() => (window.location.href = "/resume")}
          // onClick={() =>
          //   window.open(
          //     "/resume"

          //   )
          // }
          style={{ cursor: "pointer" }}
        >
          RESUMÉ <i className="far fa" />
        </button> */}
      </div>

      <div className="typed-text">
        <h3 ref={el}>.</h3>
      </div>

      {/* Work Experience Section */}
      <div className="work-experience-container">
        <h2
          style={{
            fontFamily: "'Roboto'",
            fontSize: "40px",
          }}
        >
          Communities
        </h2>
        <div className="work-experience-cards">
          {/* Card 1 */}
          <div className="work-experience-card">
            <img src={yaf} alt="YAF" className="work-experience-logo" />
            <div className="work-experience-info">
              <h4>Young Achievers' Foundation</h4>
              <p>Ghanaian Youth Development</p>
              <p>Jun 2019 - Present</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="work-experience-card">
            <img src={nsbe} alt="NSBE" className="work-experience-logo" />
            <div className="work-experience-info">
              <h4>National Society of Black Engineers</h4>
              <p>Culturally Responsible Black Engineers</p>
              <p>Jun 2022 - Present</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="work-experience-card">
            <img
              src={colorstack}
              alt="Colorstack"
              className="work-experience-logo"
            />
            <div className="work-experience-info">
              <h4>ColorStack</h4>
              <p>Black and Latinx Technologists</p>
              <p>Jun 2022 - Present</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="work-experience-card">
            <img
              src={codepath}
              alt="Codepath"
              className="work-experience-logo"
            />
            <div className="work-experience-info">
              <h4>CodePath</h4>
              <p>Tech Excellence for All</p>
              <p>Jun 2022 - Present</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="work-experience-card">
            <img src={qiskit} alt="Qiskit" className="work-experience-logo" />
            <div className="work-experience-info">
              <h4>IBM Qiskit Quantum School</h4>
              <p>Theory To Implementation</p>
              <p>Jun 2023 - Present</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="work-experience-card">
            <img src={nslf} alt="NSLF" className="work-experience-logo" />
            <div className="work-experience-info">
              <h4>National Student Leadership Forum</h4>
              <p>Leadership Forum on Faith & Values</p>
              <p>Sep 2023 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
