import React from "react";
import profileImage from "../../assets/IMG_1454.JPG";

function About() {
  return (
    <section class="about">
      <div>
        <img class="me" alt="profile" img src={profileImage} />
        <p>
          Hello there! My name is Amanda Philips, and I am thrilled to be in the
          beginning phase of my career as a full stack web developer. I am a
          problem solver who is very passionate about my work. I enjoy being on
          a team that explores endless possibilities and pushes to innovate
          creatively. Recently earned a certificate from University of Richmond
          where I developed skills in HTML, CSS, Git, Bootstrap, Javascript,
          jQuery, AJAX, React, APIs, the DOM, JSON, Node, ES6, OOP, Express,
          MySQL, MVC Paradigm, Sequelize, Testing, PWA, MongoDB, NoSQL, and
          React.
        </p>
      </div>
    </section>
  );
}

export default About;
