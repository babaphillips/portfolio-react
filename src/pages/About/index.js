import React from "react";
import profileImage from "../../assets/IMG_1454.JPG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <Container fluid className=" mb-5 pb-5 ">
      <Row className="p-2">
        <Col>
          <img
            height={400}
            className="rounded mx-auto d-block"
            alt="profile"
            img
            src={profileImage}
          />
        </Col>
      </Row>
      <Row className="p-2">
        <Col>
          <p>
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
    </Container>
  );
}

export default About;
