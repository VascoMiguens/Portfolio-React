import React, { useState, useEffect } from "react";
import social from "../assets/social-network-api.png";
import ecommerce from "../assets/e-commerce-api-image.png";
import team from "../assets/team-profile-generator.png";
import videoplayer from "../assets/video-player.png";
import FullCard from "../components/FullCard";
import RowCard from "../components/RowCards";
import HSbg from "../assets/hairy-styles-bg.png";

const cardData = [
  {
    id: 1,
    title: "Hairy Styles",
    img: "https://github.com/VascoMiguens/Hairy-Styles/blob/master/public/images/logo.png?raw=true",
    tools: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Handlebars.js",
      "Bootstrap",
      "Heroku",
      "Multer",
      "Moment.js",
    ],
    description:
      "A full stack application that allows users to search for the hair style that they are looking for, and find user posts with the related hairstyle and the information on the hairdresser, location and review of the cut, also including an image of the hair style",
    githubUrl: "https://github.com/VascoMiguens/Hairy-Styles",
    deployedUrl: "https://hairy-styles.herokuapp.com/",
    background: HSbg,
  },
  {
    id: 2,
    title: "PWA Text Editor",
    img: "https://github.com/VascoMiguens/PWA-Text-Editor/blob/master/client/src/images/logo.png?raw=true",
    tools: ["Node.js", "Express.js", "IndexedDb", "Workbox", "Webpack"],
    description:
      "A single-page application that functions as a text editor, allowing users to create notes or code snippets with or without an internet connection, this Progressive Web Application (PWA) includes data persistence techniques that provide redundancy in case one of the options is not supported by the browser ",
    githubUrl: "https://github.com/VascoMiguens/PWA-Text-Editor",
    deployedUrl: "https://pwa-jate-text-editor.herokuapp.com/",
  },
  {
    id: 3,
    title: "Social Network API",
    img: social,
    tools: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    description:
      "An API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list using a NoSQL database. The project aims to showcase the technologies commonly used in social networking platforms",
    githubUrl: "https://github.com/VascoMiguens/Social-Network-API",
    deployedUrl: "https://www.youtube.com/watch?v=OKnIwScJEXg&t=3s",
  },
  {
    id: 4,
    title: "MVC Tech Blog",
    img: "https://raw.githubusercontent.com/VascoMiguens/MVC-Tech-Blog/ce1aec552fe323f374c335afdc5bf358a995139c/public/assets/Tech_blog_logo.svg",
    tools: [
      "Node.js",
      "Express.js",
      "Sequelize",
      "MySQL",
      "Handlebars.js",
      "Bcrypt",
      "Heroku",
      "Dotenv",
      "Moment.js",
    ],
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
    tools: ["Node.js", "Express.js", "MySQL", "Sequelize"],
    description:
      "This project involved building the back end for an e-commerce site using Express.js API and Sequelize to interact with a MySQL database. As e-commerce is the largest sector of the electronics industry, developers need to understand the fundamental architecture of e-commerce sites, and this project provides an opportunity to do just that",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/E-Commerce-Back-End",
    deployedUrl: "https://www.youtube.com/watch?v=-5xdDkPGAdk",
  },
  {
    id: 6,
    title: "Team Profile Generator",
    img: team,
    tools: ["Node.js", "Inquirer", "Jest", "MySQL"],
    description:
      "In this project, I built a command-line application from scratch that manages a company's employee database. By using Node.js, Inquirer, and MySQL, I was able to create a powerful tool that simplifies the process of managing employee information",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/Team-Profile-Generator",
    deployedUrl: "https://www.youtube.com/watch?v=I0ftkBykpaccom",
  },
  {
    id: 7,
    title: "Custom Cravings",
    img: "https://github.com/VascoMiguens/custom-cravings/blob/main/assets/logo.png?raw=true",
    tools: ["Html", "CSS", "JavaScript", "API"],
    description:
      "This project was created primarily to answer the problem of food wastage. It does this by providing meal ideas for people who need to make use of ingredients that they have remaining at home and do not know what to do with. The app, true to name, also allows people to respond to their particular cravings for a certain ingredient or type of cuisine",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/custom-cravings",
    deployedUrl: "https://cherry-aisha.github.io/custom-cravings/",
  },
  {
    id: 8,
    title: "Video Player",
    img: videoplayer,
    tools: ["Html", "CSS", "JavaScript"],
    description:
      "I created a custom video player using HTML, CSS, and JavaScript. The player includes standard playback controls such as play, pause, volume, and progress bar.In addition, I added custom features such as playback and fullscreen mode.  I designed the interface using CSS to give it a modern, intuitive look and feel. The player is fully responsive and works on all modern web browsers.This project showcases my skills in front-end web development and my ability to create interactive, user-friendly interfaces",
    images: ["image3.jpg", "image4.jpg"],
    githubUrl: "https://github.com/VascoMiguens/VideoPLayer",
    deployedUrl: "https://vascomiguens.github.io/VideoPLayer/",
  },
];

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // fetch the project data here and set the state
    setProjects(cardData);
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <FullCard cardData={projects} />
      <RowCard cardData={projects} />
    </>
  );
}
