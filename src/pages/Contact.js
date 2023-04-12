import React, { useState, useRef } from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import {
  FaTwitter,
  FaStackOverflow,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setIsFormValid(event.target.value && email && message);
  };

  const handleEmailChange = (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(event.target.value);
    setIsEmailValid(emailRegex.test(event.target.value));
    setIsFormValid(name && event.target.value && message);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setIsFormValid(name && email && event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid) {
      emailjs
        .sendForm(
          `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
          `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
          form.current,
          `${process.env.REACT_APP_EMAILJS_USER_ID}`
        )
        .then(
          (result) => {
            console.log(result.text);
            event.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Please fill out all input fields.");
    }
  };

  return (
    <>
      <h1>Get in touch</h1>
      <div className="contact row gap-5 row-cols-1 d-flex row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="input-container">
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
              name="user_name"
            />
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              name="user_email"
            />
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              placeholder="Your message"
              name="message"
            />
          </div>
          <button className="form-button" type="submit">
            Send
          </button>
          {!isEmailValid && (
            <p className="warning">Please enter a valid email address</p>
          )}
          {!isFormValid && (
            <p className="warning">Please fill out all input fields.</p>
          )}
        </form>
        <div className="contact-info">
          <div className="contact-icon">
            <CiLocationOn /> <p>Brighton, UK</p>
          </div>
          <div className="contact-icon">
            <CiMail /> <p>v_miguens@hotmail.com</p>
          </div>
          <div className="horizontal-line"></div>
          <div className="social-icons">
            <a
              href="https://github.com/VascoMiguens"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vasco-miguens-312a92115/"
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
        </div>
      </div>
    </>
  );
}

export default Contact;
