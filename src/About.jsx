import React, { Component } from "react";
import profilepic from "./img/profpic.jpg";
import Image from "react-graceful-image";

export class About extends Component {
  render() {
    return (
      <div className="about-cont-big">
        <p className="about-anchor" id="about" href="" />
        <h1 className="subheader">About Me:</h1>
        <div className="about-cont">
          <div id="text-area-about">
            <p className="about-text">
              My name is Jonathan Cheng, but people call me JJ. I'm a software
              engineer that has a passion for making awesome products to solve
              complex problems. I'm currently an undergraduate at Carnegie
              Mellon University, majoring in Electrical and Computer
              Engineering, with a minor in Computer Science.&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jchengjr77/"
              >
                Here's my LinkedIn.
              </a>
              &nbsp;Also,&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jchengjr77"
              >
                Here's my Github.
              </a>
            </p>
            <p className="about-text">
              I love to learn. I've learned to play the ukulele, guitar, and
              electric bass. I've learned to play Ultimate Frisbee, squash, and
              snowboard. I've learned to appreciate elegant solutions in and
              algorithms. I've learned to enjoy a good deck of playing cards. To
              showcase these aspects of myself, I created this website.
            </p>
            <p className="about-text">
              For a more formal overview of myself, &nbsp;
              <a
                href=""
                onClick={() =>
                  window.open(require("./img/jchengjr77.pdf"), "_none")
                }
              >
                Download my resume.
              </a>
            </p>
            <p className="about-text-big">
              I would love to show you a couple things! Keep scrolling...
            </p>
          </div>
          <Image
            src={profilepic}
            alt="profilepic"
            className="profile-pic-cont"
          />
        </div>
      </div>
    );
  }
}

export default About;
