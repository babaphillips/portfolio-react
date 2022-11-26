import React from "react";
import profileImage from "../../assets/IMG_1454.JPG";
import javascript from "../../assets/javascript.png";
import html5 from "../../assets/html5.png";
import github from "../../assets/github.png";
import webapi from "../../assets/webapi.png";
import express from "../../assets/express.png";
import css3 from "../../assets/css3.png";
import react from "../../assets/react.png";
import mongoDB from "../../assets/mongodb.png";
import node from "../../assets/node.png";
import mySQL from "../../assets/mysql.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  const languagesBadges = [
    {
      languageLogo: html5,
    },
    {
      languageLogo: css3,
    },
    {
      languageLogo: github,
    },
    {
      languageLogo: javascript,
    },
    {
      languageLogo: webapi,
    },
    {
      languageLogo: node,
    },
    {
      languageLogo: mySQL,
    },
    {
      languageLogo: express,
    },
    {
      languageLogo: mongoDB,
    },
    {
      languageLogo: react,
    },
  ];
  return (
    <Container className=" mb-5 ">
      <Row>
        <Col md={4} className="d-flex justify-content-center">
          <img
            height={330}
            className="rounded-circle"
            alt="profile"
            src={profileImage}
          />
        </Col>
        <Col md={8}>
          <p style={{ fontSize: "20px" }}>
            Full-stack web developer with a background in logistics and a
            passion for music. Recently earned a certificate in full stack
            development from the University of Richmond Coding Boot Camp. A
            problem solver who is very passionate about her work and enjoys
            being on a team that explores endless possibilities and pushes to
            innovate creatively—strengths in creativity, teamwork, and building
            projects from ideation to execution.
          </p>
        </Col>
      </Row>
      <Col className="m-2 p-4 d-flex justify-content-center flex-wrap">
        {languagesBadges.map((logos, i) => (
          <div key={i} className="m-1">
            <img
              src={logos.languageLogo}
              className="rounded-circle mx-auto "
              height={95}
              alt="logos"
            />
          </div>
        ))}
      </Col>
    </Container>
  );
}

export default About;
