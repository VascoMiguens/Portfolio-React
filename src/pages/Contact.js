import React, { useState } from "react";

function Contact() {
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
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    } else {
      alert("Please fill out all input fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="name-container">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="email-container">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        {!isEmailValid && (
          <p className="warning">Please enter a valid email address</p>
        )}
      </div>
      <div className="message-container">
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={handleMessageChange} />
      </div>
      <button className="form-btn" type="submit">
        Send
      </button>
      {!isFormValid && (
        <p className="warning">Please fill out all input fields.</p>
      )}
    </form>
  );
}

export default Contact;
