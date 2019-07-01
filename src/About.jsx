import React, { Component } from "react";
import profilepic from "./img/profpic.jpg";

export class About extends Component {
  render() {
    return (
      <div className="about-cont">
        <h1 className="subheader">About Me:</h1>
        <p>
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
          This is the About Me section. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

export default About;
