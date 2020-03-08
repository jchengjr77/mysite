import React, { Component } from "react";
import moments from "./img/moments.png";
import pokerimg from "./img/poker.png";

export class Projects extends Component {
  render() {
    return (
      <div className="project-cont">
        <p className="projects-anchor" id="projects" />
        <h1 className="subheader">Projects:</h1>
        <div id="proj1" className="proj-cell">
          <div className="text-area">
            <h3 className="small-header">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jchengjr77/moments-app"
                className="proj-link"
              >
                > Moments (Github)
              </a>
            </h3>
            <p className="about-text">
              Moments is a cross-platform mobile app for remebering events and
              good times. Record funny quotes from friends, certain times you
              felt good, milestones during your week, or anything worth
              remembering. Moments keeps those memories safe for you, and shows
              you one every day.
            </p>
            <p className="tech-desc">
              Built using React Native, with Expo for the workflow management.
              Database and user authentication is done with Firebase.
            </p>
          </div>
          <img className="moments-logo" src={moments} alt="moments-logo" />
        </div>
        <div id="proj2" className="proj-cell">
          <div className="text-area">
            <h3 className="small-header">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jchengjr77/3DGOL"
                className="proj-link"
              >
                > 3D Game of Life (Github)
              </a>
            </h3>
            <p className="about-text">
              Following of a hackathon project regarding multiplayer Game Of
              Life, I created a 3D version of Conway's Game Of Life. This
              version featured singleplayer and multiplayer modes, as well as
              rules customizations, evolution of cells in 3D space, and stat
              tracking.
            </p>
            <p className="tech-desc">
              This project was built in November of 2018, and is written in
              Python (tkinter, Panda3D).
            </p>
          </div>
          <iframe
            width="640px"
            height="360px"
            src="https://www.youtube.com/embed/hiVpmihZk9c"
            id="gol-vid"
            title="3DGOL"
          />
        </div>
        <div id="proj3" className="proj-cell">
          <div className="text-area">
            <h3 className="small-header">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jchengjr77/pokerstakes"
                className="proj-link"
              >
                > 1v1 Poker Stakes (Github)
              </a>
            </h3>
            <p className="about-text">
              Something I created just for fun. I don't own a set of poker
              chips, and my friends enjoy playing 1v1 poker matches on the go.
              Thus, I threw together a heads-up poker chip counter so that we
              could play wherever and whenever.
            </p>
            <p className="tech-desc">
              Created in July 2019, currently undergoeing bug-fixes and minor
              improvements. Built using React.
            </p>
          </div>
          <img src={pokerimg} id="poker-img" alt="poker-scrnshot" />
        </div>
      </div>
    );
  }
}

export default Projects;
