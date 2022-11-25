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
  return (
    <Container className=" mb-5 pb-5">
      <Row className="p-2 hstack gap-7">
        <Col>
          <img
            height={300}
            className="rounded-circle"
            alt="profile"
            img
            src={profileImage}
          />
        </Col>
        <Col>
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
      <Col className="p-5 d-flex justify-content-center">
        <img
          src={html5}
          className="rounded-circle mx-auto "
          height={95}
          alt="html5"
        ></img>
        <img
          src={css3}
          className="rounded-circle mx-auto"
          height={95}
          alt="css3"
        ></img>
        <img
          src={github}
          className="rounded-circle mx-auto"
          height={95}
          alt="github"
        ></img>
        <img
          src={javascript}
          className="rounded-circle mx-auto"
          height={95}
          alt="javascript"
        ></img>
        <img
          src={webapi}
          className="rounded-circle mx-auto"
          height={95}
          alt="webapi"
        ></img>
        <img
          src={node}
          className="rounded-circle mx-auto"
          height={95}
          alt="node"
        ></img>
        <img
          src={express}
          className="rounded-circle mx-auto"
          height={95}
          alt="express"
        ></img>
        <img
          src={mySQL}
          className="rounded-circle mx-auto"
          height={95}
          alt="mySQL"
        ></img>
        <img
          src={mongoDB}
          className="rounded-circle mx-auto"
          height={105}
          alt="mongoDB"
        ></img>
        <img
          src={react}
          className="rounded-circle mx-auto"
          height={95}
          alt="react"
        ></img>
      </Col>
    </Container>
  );
}

export default About;
