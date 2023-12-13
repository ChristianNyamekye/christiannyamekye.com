import React from "react";
import "../../App.css";
import { BsEnvelopeFill } from 'react-icons/bs'; // Ensure you have react-icons installed



export default function ContactMe() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwkdgzed";
  return (
    <section id="contactme">
      <div className="contactme__container">
        <div className="contactme__options">
          <article className="contactme__option">
            <BsEnvelopeFill className="contactme__option-icon" />
            <h4>Email</h4>
            <a
              href="mailto:christiankingnyamekye@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          {/* Add other contact options if necessary */}
        </div>

        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          className="contactme__form"
        >
          <h3>Get in Touch; Let's work on a project together</h3>
          <h2>Contact Me</h2>
          <input type="text" placeholder="Your Full Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="7" required></textarea>
          <input
            type="hidden"
            name="_subject"
            value="New submission from your website!"
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        <p style={{ fontFamily: "'Roboto'", color: "#cbc6c6" }}>
          Currently seeking SWE summer internships, Engineering research and
          projects, as well as clients in web development.
        </p>
      </div>
    </section>
  );
}
