import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const frontEndProficiencies = [
  "HTML",
  "CSS3",
  "JavaScript",
  "Responsive Design",
  "React",
  "Bootstrap",
];

const backEndProficiencies = [
  "APIs",
  "Node.js",
  "Express.js",
  "MySQL",
  "Sequelize",
  "MongoDB",
  "Mongoose",
  "REST",
  "GraphQL",
];

const TypingEffect = () => {
  // useState hook
  const [frontIndex, setFrontIndex] = useState(0);
  const [frontWord, setFrontWord] = useState("");
  const [frontLines, setFrontLines] = useState([]);

  const [backIndex, setBackIndex] = useState(0);
  const [backWord, setBackWord] = useState("");
  const [backLines, setBackLines] = useState([]);

  useEffect(() => {
    if (frontIndex >= frontEndProficiencies.length) {
      return;
    }

    // Set up an interval to simulate typing of each front-end proficiency
    const intervalId = setInterval(() => {
      //slice the current string rom 0 to the current word length
      setFrontWord((prev) =>
        frontEndProficiencies[frontIndex].slice(0, prev.length + 1)
      );

      //if the word is fully typed out
      if (frontWord === frontEndProficiencies[frontIndex]) {
        //clear the interval to stop typing
        clearInterval(intervalId);
        //update the front-end index
        setFrontIndex((prev) => prev + 1);
        // add the word to the "done" list
        setFrontLines((prev) => [...prev, frontWord]);
        // reset the frontWord to and empty string
        setFrontWord("");
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, [frontIndex, frontWord]);

  useEffect(() => {
    if (backIndex >= backEndProficiencies.length) {
      return;
    }
    // Set up an interval to simulate typing of each front-end proficiency
    const intervalId = setInterval(() => {
      //slice the current string from 0 to the current word length
      setBackWord((prev) =>
        backEndProficiencies[backIndex].slice(0, prev.length + 1)
      );

      //if the word is fully typed out
      if (backWord === backEndProficiencies[backIndex]) {
        //clear the interval to stop typing
        clearInterval(intervalId);
        //update the front-end index
        setBackIndex((prev) => prev + 1);
        // add the word to the "done" list
        setBackLines((prev) => [...prev, backWord]);
        // reset the frontWord to and empty string
        setBackWord("");
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, [backIndex, backWord]);

  return (
    <>
      <div className="resume-container">
        <div className="proficiencies">
          <div className="frontend">
            <h2>Front End proficiencies:</h2>
            <div>
              {frontLines.map((line) => (
                <div key={line}>
                  <span className="rendered-text">{line}</span>
                </div>
              ))}
              <div>{frontWord}</div>
            </div>
          </div>
          <div className="backend">
            <h2>Back End Proficiencies:</h2>
            <div>
              {backLines.map((line) => (
                <div key={line}>
                  <span className="rendered-text">{line}</span>
                </div>
              ))}
              <div>{backWord}</div>
            </div>
          </div>
        </div>
        <div className="resume">
          <Button
            variant="Link"
            href="https://drive.google.com/file/d/1dlMc4oS4hawZYHAvSZjaU_f4UyxHolTh/preview"
            target="_blank"
            rel="noreferrer"
            className="card-button"
          >
            View Resume
          </Button>
        </div>
      </div>
    </>
  );
};

export default TypingEffect;
