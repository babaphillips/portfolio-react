import React from "react";
import projectOneImage from "../../assets/Weather-playlistfinalscreenshot.png";
import projectTwoImage from "../../assets/Whatscooking.png";
import projectThreeImage from "../../assets/employeetracker.png";
import projectFourImage from "../../assets/socialnetworkapi.png";
import projectFifthImage from "../../assets/ecommerce.png";
import projectSixImage from "../../assets/codingquiz.png";
import projectSevenImage from "../../assets/PC-Cover.png";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";

function Portfolio() {
  const projectsArray = [
    {
      projectTitle: "Project Choice",
      projectLink: "https://github.com/babaphillips/projectChoice",
      projectImage: projectSevenImage,
      projectCaption:
        "Project Choice is a single page React application that provides current information on Abortion Regulations and Laws by the state selected. There is a contact form to get more information and an online e-commerce with branded products available for purchase. All proceeds go to Planned Parenthood.",
      projectLanguages:
        "The technologies used in this project are: HTML5, CSS, TailWindCSS, JavaScript, Express.js, Sequelize, Node.js, React, MongoDB and ApolloGraphQL.",
    },
    {
      projectTitle: "Weather Playlist",
      projectLink: "https://babaphillips.github.io/weather-playlist/",
      projectImage: projectOneImage,
      projectCaption:
        "A project that uses an open API to display the current weather and display three Spotify playlists to go with it. On the funnier side, it brings you a meme related to the current weather",
      projectLanguages:
        "The technologies used in this project are: HTML5, CSS, Javascript, JQuery and Bulma.",
    },
    {
      projectTitle: "What's Cooking?",
      projectLink: "https://rata-whats-cooking.herokuapp.com/",
      projectImage: projectTwoImage,
      projectCaption:
        "A project aimed to create a full stack application. An online cookbook for your recipes!",
      projectLanguages:
        "The technologies used in this project are: HTML5, CSS, JavaScript, TailWindCSS, Sequelize, Express.js and MySQL.",
    },
    {
      projectTitle: "Employee Tracker",
      projectLink: "https://github.com/babaphillips/employee-tracker",
      projectImage: projectThreeImage,
      projectCaption:
        "A command-line application to manage a company's employee database.",
      projectLanguages:
        "The technologies used in this project are: JavaScript, NPM, Node.js and MySQL.",
    },
    {
      projectTitle: "Social Network API",
      projectLink: "https://github.com/babaphillips/social-network-api",
      projectImage: projectFourImage,
      projectCaption:
        "A project where I developed an API for a social network web application where users can share their thoughts, react to friends thoughts and create a friend list.",
      projectLanguages:
        "The technologies used in this project are: JavaScript, Node.js, MongoDB and Express.js.",
    },
    {
      projectTitle: "E-commerce",
      projectLink: "https://github.com/babaphillips/e-commerce",
      projectImage: projectFifthImage,
      projectCaption:
        "A project where I developed the back end for an e-commerce website. Used a working Express.js API and configured it to use Sequelize to interact with a MySQL database.",
      projectLanguages: "",
    },
    {
      projectTitle: "Timed Coding Quiz",
      projectLink: "https://babaphillips.github.io/timed-codingquiz/",
      projectImage: projectSixImage,
      projectCaption:
        "A project where I developed a timed coding quiz using JavaScript fundamentals.",
      projectLanguages:
        "The technologies used in this project are: HTML5, CSS and JavaScript.",
    },
  ];
  return (
    <Container fluid className="wrapper">
      <h2 className="projects">Projects</h2>
      {projectsArray.map((project) => (
        <Row className="p-2 projectsbox">
          <h3 className="project-name">{project.projectTitle}</h3>
          <figure className="rounded mx-auto d-block snip0016">
            <img alt="Projects" img src={project.projectImage} />
            <figcaption>
              <h2>{project.projectCaption}</h2>
              <p>{project.projectLanguages}</p>
            </figcaption>
          </figure>
          <a href={project.projectLink}>
            <span>GitHub Repository</span>
          </a>
        </Row>
      ))}
    </Container>
  );
}

export default Portfolio;
