import React, { Component } from "react";

export class Hobbies extends Component {
  render() {
    return (
      <div className="hobbies-cont">
        <p className="hobbies-anchor" id="hobbies" />
        <h1 className="subheader">Hobbies:</h1>
        <div id="hobby1" className="proj-cell">
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
        </div>
      </div>
    );
  }
}

export default Hobbies;
