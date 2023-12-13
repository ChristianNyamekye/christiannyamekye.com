import React from "react";
import "./Footer.css";
import { Button } from "./button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Reach out; let's connect!</p>

        <div className="input-areas">
          <form>
            <Button
              buttonStyle="btn--outline"
              target="/contactme"
              style={{ border: "1px solid black", color: "black" }}
            >
              Connect
            </Button>
          </form>
        </div>
      </section>

      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>
              <Link to="/about">About</Link>
            </h2>
          </div>
          <div class="footer-link-items">
            <h2>
              <Link to="/contactme">Contact</Link>
            </h2>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>
              <Link to="/adventures">Adventures</Link>
            </h2>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              CHRISTIAN
              <i className="fa fa-bat" />
            </Link>
          </div>
          <small class="website-rights">christian © 2023</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="//www.facebook.com/christian.nyamekye.547"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="//www.instagram.com/_chr.st.an_/?hl=en#"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link github"
              to="//github.com/ChristianNyamekye"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </Link>

            <Link
              class="social-icon-link twitter"
              to="//twitter.com/printlnXristian"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="//linkedin.com/in/christian-k-nyamekye"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
