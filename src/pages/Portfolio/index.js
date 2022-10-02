import React from "react";
import projectOneImage from "../../assets/Weather-playlistfinalscreenshot.png";
import projectTwoImage from "../../assets/Whatscooking.png";

function Portfolio() {
  return (
    <section className="my-5">
      <div className="my-2"></div>
      <h2 class="projects">PROJECTS</h2>
      <div class="flex-container">
        <h3 class="project-name">Weather Playlist</h3>
        <figure class="snip0016">
          <img alt="Project1" img src={projectOneImage} />
          <figcaption>
            <h2>
              A class project that uses an open API to display the current
              weather, a Spotify playlist and a gif.
            </h2>
            <p>The technologies used in this project are: </p>
            <a href="https://babaphillips.github.io/weather-playlist/"></a>
          </figcaption>
        </figure>
        <br />
        <a href="https://github.com/babaphillips/weather-playlist" id="link1">
          https://github.com/babaphillips/weather-playlist
        </a>
      </div>
      <div class="flex-container">
        <h3 class="project-name">What's Cooking?</h3>
        <figure class="snip0016">
          <img alt="Project2" img src={projectTwoImage} />
          <figcaption>
            <h2>
              In this group project we are creating a full stack application
              that can solve a real-world problem.
            </h2>
            <p>The technologies used in this project are: </p>
            <a href="https://babaphillips.github.io/weather-playlist/"></a>
          </figcaption>
        </figure>
        <br />
        <a href="https://github.com/babaphillips/whats-cooking" id="link2">
          https://github.com/babaphillips/whats-cooking
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
