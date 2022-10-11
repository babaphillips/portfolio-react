import React from "react";
import profileImage from "../../assets/IMG_1454.JPG";

function About() {
  return (
    <section className="about">
      <div>
        <img className="me" alt="profile" img src={profileImage} />
      </div>
      <div>
        <p className="summary">
          Full-stack web developer with a background in logistics and a passion
          for music. Recently earned a certificate in full stack development
          from the University of Richmond Coding Boot Camp. A problem solver who
          is very passionate about her work and enjoys being on a team that
          explores endless possibilities and pushes to innovate
          creatively—strengths in creativity, teamwork, and building projects
          from ideation to execution.
        </p>
      </div>
    </section>
  );
}

export default About;
