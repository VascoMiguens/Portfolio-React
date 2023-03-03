import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/VascoMiguens"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="www.linkedin.com/in/vasco-miguens-312a92115/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/VascoMaria3"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://stackoverflow.com/users/16318504/vasco"
          target="_blank"
          rel="noreferrer"
        >
          <FaStackOverflow />
        </a>
      </div>
    </footer>
  );
}
