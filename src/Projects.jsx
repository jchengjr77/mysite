import React, { Component } from "react";
import spark from "./img/sparklogo.png";
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
                href="https://github.com/sparknation/Spark"
                className="proj-link"
              >
                > Spark
              </a>
            </h3>
            <p className="about-text">
              Ever had a great idea and though, "If only someone would create
              that..." Spark looks to solve exactly that. Spark is a social
              platform designed to bridge the gap between great ideas and great
              creators. The platform makes interesting ideas easily accessible
              by engineers, designers, or even someone's curious aunt.
            </p>
            <p className="tech-desc">
              This project, as of August 2019, is in development. It is being
              built using React, Node.js, and MongoDB.
            </p>
          </div>
          <img src={spark} />
        </div>
        <div id="proj2" className="proj-cell">
          <div className="text-area">
            <h3 className="small-header">
              <a
                href="https://github.com/jchengjr77/3DGOL"
                className="proj-link"
              >
                > 3D Game of Life
              </a>
            </h3>
            <p className="about-text"> 
              In lieu of a hackathon project regarding multiplayer Game Of Life,
              I created a 3D version of Conway's Game Of Life. This version
              featured singleplayer and multiplayer modes, as well as rules
              customizations, evolution of cells in 3D space, and stat tracking.
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
          />
        </div>
        <div id="proj3" className="proj-cell">
          <div className="text-area">
            <h3 className="small-header">
              <a
                href="https://github.com/jchengjr77/pokerstakes"
                className="proj-link"
              >
                > 1v1 Poker Stakes
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
          <img src={pokerimg} id="poker-img" />
        </div>
      </div>
    );
  }
}

export default Projects;
