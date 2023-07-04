

import React from 'react'
import './HeroSection.css';
import { Button } from './button';
import '../App.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-9.mp4" autoPlay loop muted />
      <h1>akwaaba!</h1>
      <p>temet nosce...</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          target="/contactme"
        >
          PROJECTS
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          target="/https://docs.google.com/document/d/1YiUyqN8e2PP3I0Ull5adHzXLGnzxquqBk7svaSkk7aA/edit"
          onClick={console.log("hey")}
        >
          RESUME <i className="far fa " />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection
