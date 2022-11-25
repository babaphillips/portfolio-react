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
  return (
    <Container fluid className="wrapper">
      <h2 className="projects">Projects</h2>
      <h3 className="project-name">Project Choice</h3>
      <Row className="p-2 projectsbox">
        <figure className="snip0016">
          <img alt="projectchoice" img src={projectSevenImage} />
          <figcaption>
            <h2>
              Project Choice is a single page React Application that provides
              current information on Abortion Access by state. There is a
              contact form to get more information and an online shop with
              branded products available for purchase. All proceeds go the
              Planned Parenthood.
            </h2>
            <p>
              The technologies used in this project are: HTML5, CSS,
              TailwindCSS, Javascript, Express.js, Sequelize, Node.js, React,
              MongoDB and ApolloGraphQL.
            </p>
            <a href="https://github.com/babaphillips/projectChoice"></a>
          </figcaption>
        </figure>
      </Row>
      <h3 className="project-name">Weather Playlist</h3>
      <Row className="p-2 projectsbox">
        <figure className="snip0016">
          <img alt="Project1" img src={projectOneImage} />
          <figcaption>
            <h2>
              A project that uses an open API to display the current weather and
              displays three Spotify playlists to go with it. On the funnier
              side, it brings you a meme related to the current weather.
            </h2>
            <p>
              The technologies used in this project are: HTML5, CSS, Javascript
              and Bulma.
            </p>
            <a href="https://babaphillips.github.io/weather-playlist/"></a>
          </figcaption>
        </figure>
        <br />
      </Row>
      <h3 className="project-name">What's Cooking?</h3>
      <Row className="projectsbox">
        <figure className="snip0016">
          <img alt="Project2" img src={projectTwoImage} />
          <figcaption>
            <h2>
              A project that aimed to create a full stack application. An online
              cookbook recipe for your special recipes!
            </h2>
            <p>
              The technologies used in this project are: HTML5, CSS,
              TailwindCSS, Javascript, Sequelize, Express and MySQL.
            </p>
            <a href="https://rata-whats-cooking.herokuapp.com/"></a>
          </figcaption>
        </figure>
      </Row>
      <h3 className="project-name">Employee Tracker</h3>
      <Row className="projectsbox">
        <figure className="snip0016">
          <img alt="Project1" img src={projectThreeImage} />
          <figcaption>
            <h2>
              A command-line application from scratch to manage a company's
              employee database.
            </h2>
            <p>
              The technologies used in this project are: Javascript, NPM,
              Node.js and MySQL
            </p>
            <a href="https://github.com/babaphillips/employee-tracker"></a>
          </figcaption>
        </figure>
      </Row>
      <h3 className="project-name">Social Network API</h3>
      <Row className="projectsbox">
        <figure className="snip0016">
          <img alt="Project1" img src={projectFourImage} />
          <figcaption>
            <h2>
              A project where I builded an API for a social network web
              application where users can share their thoughts, react to friends
              thoughts, and create a friend list.
            </h2>
            <p>
              The technologies used in this project are: Javascript, Node.js,
              MongoDB and Express.js.
            </p>
            <a href="https://github.com/babaphillips/social-network-api"></a>
          </figcaption>
        </figure>
      </Row>
      <h3 className="project-name">E-Commerce</h3>
      <Row className="projectsbox">
        <figure className="snip0016">
          <img alt="Project1" img src={projectFifthImage} />
          <figcaption>
            <h2>
              A project where I builded the back end for an e-commerce site.
              Took a working Express.js API and configured it to use Sequelize
              to interact with a MySQL database.
            </h2>
            <p>
              The technologies used in this project are: NPM, Node.js, MySQL,
              Express.js and Sequelize.
            </p>
            <a href="https://github.com/babaphillips/e-commerce"></a>
          </figcaption>
        </figure>
      </Row>
      <h3 className="project-name">Timed Coding Quiz</h3>
      <Row className="projectsbox">
        <figure className="snip0016">
          <img alt="Project1" img src={projectSixImage} />
          <figcaption>
            <h2>
              A project where I builded a timed coding quiz using Javascript
              fundamentals.
            </h2>
            <p>
              The technologies used in this project are: HTML, CSS and
              Javascript.
            </p>
            <a href="https://babaphillips.github.io/timed-codingquiz/"></a>
          </figcaption>
        </figure>
      </Row>
    </Container>
  );
}

export default Portfolio;
