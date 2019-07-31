import React, { Component } from "react";
import profilepic from "./img/profpic.jpg";

export class About extends Component {
  render() {
    return (
      <div className="about-cont">
        <p className="about-anchor" id="about" href=""/>
        <h1 className="subheader">About Me:</h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jonathan-cheng-7ab9b8141/"
          >
            <img
              src={profilepic}
              alt="Profile Pic"
              className="profile-pic-cont"
            />
          </a>
          <p className="about-text">
            My name is Jonathan Cheng, but people call me JJ. I'm currently a
            sophmore at Carnegie Mellon University, majoring in Electrical and
            Computer Engineering, and pursueing a double major in Computer
            Science. For more information, click on the picture to the left to
            visit my LinkedIn.
          </p>
          <p className="about-text">
            I love to learn. Picking up new skills is what I do in my free time.
            Whether it be something practical (such as learning React through
            this very site), or something more whimsical (like new magic
            tricks). I've learned to play the ukulele, guitar, and electric
            bass. I've learned to play Ultimate Frisbee, squash, and snowboard.
            I've learned to appreciate complex problems and elegant solutions in
            computer science. I've learned to enjoy a good deck of playing
            cards. To showcase these aspects of myself a little bit, I created this website.
          </p>
          <p className="about-text-big">
            I would love to show you a couple things! Keep scrolling...
          </p>
      </div>
    );
  }
}

export default About;
