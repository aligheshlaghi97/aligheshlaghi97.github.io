import React, { JSX } from "react";
import "../styles/ContactSection.css";

const ContactSection = (): JSX.Element => {
  return (
    <div className="contact-container" id="contact">
      {/* Gmail */}
      <a
        data-mdb-ripple-init
        className="btn btn-primary contact-button contact-gmail flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-transform transform hover:scale-110"
        href="mailto:aliigheshlaghi97@gmail.com"
        role="button"
        aria-label="Email Ali"
        style={{ textDecoration: "none" }}
      >
        <i className="fab fa-google text-3xl lg:text-4xl"></i>
      </a>

      {/* Github */}
      <a
        data-mdb-ripple-init
        className="btn btn-primary contact-button contact-github"
        href="https://github.com/aligheshlaghi97"
        role="button"
        aria-label="Visit Ali's GitHub"
      >
        <i className="fab fa-github text-3xl lg:text-4xl"></i>
      </a>

      {/* Linkedin */}
      <a
        data-mdb-ripple-init
        className="btn btn-primary contact-button contact-linkedin"
        href="https://linkedin.com/in/aligheshlaghi97"
        role="button"
        aria-label="Visit Ali's LinkedIn"
      >
        <i className="fab fa-linkedin text-3xl lg:text-4xl"></i>
      </a>
    </div>
  );
};

export default ContactSection;
