import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import social from "../assets/social-network-api.png";
import ecommerce from "../assets/e-commerce-api-image.png";
import team from "../assets/team-profile-generator.png";
import videoplayer from "../assets/video-player.png";

const cardData = [
  {
    id: 1,
    title: "Hairy Styles",
    img: "https://github.com/VascoMiguens/Hairy-Styles/blob/master/public/images/logo.png?raw=true",
    description:
      "A full stack application that allows users to search for the hair style that they are looking for, and find user posts with the related hairstyle and the information on the hairdresser, location and review of the cut, also including an image of the user final style.",
    images: ["image1.jpg", "image2.jpg"],
    githubUrl: "https://github.com/VascoMiguens/Hairy-Styles",
    deployedUrl: "https://hairy-styles.herokuapp.com/",
  },
  {
    id: 2,
    title: "PWA Text Editor",
    img: "https://github.com/VascoMiguens/PWA-Text-Editor/blob/master/client/src/images/logo.png?raw=true",
    description:
      "A single-page application that functions as a text editor, allowing users to create notes or code snippets with or without an internet connection, this Progressive Web Application (PWA) includes data persistence techniques that provide redundancy in case one of the options is not supported by the browser. The application also functions offline. ",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/PWA-Text-Editor",
    deployedUrl: "https://project2.com",
  },
  {
    id: 3,
    title: "Social Network API",
    img: social,
    description:
      "An API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list using a NoSQL database. The project aims to showcase the technologies commonly used in social networking platforms",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/Social-Network-API",
    deployedUrl: "",
  },
  {
    id: 4,
    title: "MVC Tech Blog",
    img: "https://raw.githubusercontent.com/VascoMiguens/MVC-Tech-Blog/ce1aec552fe323f374c335afdc5bf358a995139c/public/assets/Tech_blog_logo.svg",
    description:
      "A tech blog web application that allows users to publish posts, submit comments and view content in a dynamic and secure manner",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/MVC-Tech-Blog",
    deployedUrl: "https://mvc-techie-blog.herokuapp.com/",
  },
  {
    id: 5,
    title: "E-Commerce Backend",
    img: ecommerce,
    description: "This is the description of Project 2.",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/E-Commerce-Back-End",
    deployedUrl: "",
  },
  {
    id: 6,
    title: "Team Profile Generator",
    img: team,
    description: "This is the description of Project 2.",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/Team-Profile-Generator",
    deployedUrl: "https://project2.com",
  },
  {
    id: 7,
    title: "Custom Cravings",
    img: "https://github.com/VascoMiguens/custom-cravings/blob/main/assets/logo.png?raw=true",
    description:
      "This project was created primarily to answer the problem of food wastage. It does this by providing meal ideas for people who need to make use of ingredients that they have remaining at home and do not know what to do with. The app, true to name, also allows people to respond to their particular cravings for a certain ingredient or type of cuisine.",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/custom-cravings",
    deployedUrl: "https://cherry-aisha.github.io/custom-cravings/",
  },
  {
    id: 8,
    title: "Video Player",
    img: videoplayer,
    description: "An attempt at creating a video player",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/VideoPLayer",
    deployedUrl: "https://vascomiguens.github.io/VideoPLayer/",
  },
  // Add more card data as needed
];

export default function GridOfCards() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleCardClick = (id) => {
    if (expandedCardId === id) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(id);
    }
  };

  useEffect(() => {
    // Remove the slideInUp class after the animation completes
    const timer = setTimeout(() => {
      const container = document.getElementById("portfolio-container");
      container.classList.remove("slideInUp");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="portfolio-container" className="animated slideInUp">
      <div className="row row-cols-2 row-cols-xs-1 row-cols-md-2 row-cols-lg-3 ">
        {cardData.map((card) => (
          <div className="" key={card.id}>
            <Card id={`card-${card.id}`} className="card">
              <Card.Img variant="top" src={card.img} />
              <h2 className="card-title">{card.title}</h2>
              <Card.Body className="card-body">
                <Card.Text className="card-description">
                  {" "}
                  {expandedCardId === card.id
                    ? card.description
                    : `${card.description.slice(0, 100)}...`}
                </Card.Text>
                <Button
                  variant="link"
                  className="card-button"
                  onClick={() => handleCardClick(card.id)}
                >
                  {expandedCardId === card.id ? "Hide" : "Read More"}
                </Button>
                <div className="card-buttons">
                  <FontAwesomeIcon
                    className="card-icon"
                    icon={faGithub}
                    size="2x"
                  />
                  <Button className="card-button">View More</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
