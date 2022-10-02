import React from "react";

function Nav() {
  return (
    <header>
      <h1>AMANDA PHILLIPS</h1>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
            <a href="portfolio">Portfolio</a>
            <a href="resume">Resume</a>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
