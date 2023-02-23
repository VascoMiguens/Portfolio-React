import React, { useState, useEffect } from "react";
import "../pages/Portfolio.css";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const cardData = [
  {
    id: 1,
    title: "Hairy Styles",
    img: "https://github.com/VascoMiguens/Hairy-Styles/blob/master/public/images/logo.png?raw=true",
    description:
      "a full stack application that allows users to search for the hair style that they are looking for, and find user posts with the related hairstyle and the information on the hairdresser, location and review of the cut, also including an image of the user final style.",
    images: ["image1.jpg", "image2.jpg"],
    githubUrl: "https://github.com/VascoMiguens/Hairy-Styles",
    deployedUrl: "https://hairy-styles.herokuapp.com/",
  },
  {
    id: 2,
    title: "PWA Text Editor",
    img: "https://github.com/VascoMiguens/PWA-Text-Editor/blob/master/client/src/images/logo.png?raw=true",
    description:
      "a single-page application that functions as a text editor, allowing users to create notes or code snippets with or without an internet connection, this Progressive Web Application (PWA) includes data persistence techniques that provide redundancy in case one of the options is not supported by the browser. The application also functions offline. ",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/PWA-Text-Editor",
    deployedUrl: "https://project2.com",
  },
  {
    id: 3,
    title: "Social Network API",
    img: "project2.jpg",
    description:
      "An API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list using a NoSQL database. The project aims to showcase the technologies commonly used in social networking platforms",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/Social-Network-API",
    deployedUrl: "",
  },
  {
    id: 4,
    title: "MVC Tech Blog",
    img: "https://github.com/VascoMiguens/MVC-Tech-Blog/blob/master/public/assets/Tech_blog_logo.svg",
    description:
      "A tech blog web application that allows users to publish posts, submit comments and view content in a dynamic and secure manner",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/MVC-Tech-Blog",
    deployedUrl: "https://mvc-techie-blog.herokuapp.com/",
  },
  {
    id: 5,
    title: "E-Commerce Backend",
    img: "project2.jpg",
    description: "This is the description of Project 2.",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/E-Commerce-Back-End",
    deployedUrl: "",
  },
  {
    id: 6,
    title: "E-Commerce Backend",
    img: "project2.jpg",
    description: "This is the description of Project 2.",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/Employee-Tracker",
    deployedUrl: "https://project2.com",
  },
  {
    id: 7,
    title: "Team Profile Generator",
    img: "project2.jpg",
    description: "This is the description of Project 2.",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/Team-Profile-Generator",
    deployedUrl: "https://project2.com",
  },
  {
    id: 8,
    title: "Custom Cravings",
    img: "project2.jpg",
    description:
      "This project was created primarily to answer the problem of food wastage. It does this by providing meal ideas for people who need to make use of ingredients that they have remaining at home and do not know what to do with. The app, true to name, also allows people to respond to their particular cravings for a certain ingredient or type of cuisine.",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/custom-cravings",
    deployedUrl: "https://cherry-aisha.github.io/custom-cravings/",
  },
  {
    id: 9,
    title: "Weather Dashboard",
    img: "project2.jpg",
    description:
      "A weather dashboard where the current weather and a forecast of the next 5 days is displayed",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/Weather-Dashboard",
    deployedUrl: "https://github.com/VascoMiguens/Weather-Dashboard",
  },
  {
    id: 10,
    title: "Daily Planner",
    img: "project2.jpg",
    description:
      "A daily planner where the current day is displayed when the user opens the page",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/Daily-Planner",
    deployedUrl: "https://vascomiguens.github.io/Daily-Planner/",
  },
  {
    id: 11,
    title: "Coding Quiz",
    img: "project2.jpg",
    description: "A timed coding quiz with multiple-choice questions",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/Coding-Quiz",
    deployedUrl: "https://vascomiguens.github.io/Coding-Quiz/",
  },
  {
    id: 12,
    title: "Password Generator",
    img: "project2.jpg",
    description: "A random password generator",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/Password-Generator",
    deployedUrl: "https://vascomiguens.github.io/Password-Generator/",
  },
  {
    id: 13,
    title: "Video Player",
    img: "project2.jpg",
    description: "An attempt at creating a video player",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/VideoPLayer",
    deployedUrl: "https://vascomiguens.github.io/VideoPLayer/",
  },
  // Add more card data as needed
];

export default function GridOfCards() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(null);

  const handleCardHover = (id) => {
    setIsHovering(id);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardData.map((card, index) => (
          <div key={card.id} className="col">
            <Card
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <Card.Img variant="top" src={card.img} />
              {isHovering === card.id && (
                <Card.Body className="card-body">
                  <Card.Title className="card-title">{card.title}</Card.Title>
                  <Button className="card-button" variant="primary">
                    View More
                  </Button>
                </Card.Body>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
