import React from "react";
import Header from "./Header.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Hobbies from "./Hobbies.jsx";
import Gallery from "./Gallery.jsx";
import Contact from "./Contact.jsx";

import "./App.css";

function App() {
  const readyStatus = true;
  let alerted = false;

  return (
    // Status of the website is displayed as an alert
    <div
      onLoad={() => {
        if (alerted === false & readyStatus === false) {
          alert("Site is currently: Under Construction");
          alerted = true;
        }
      }}
    >
      <header>
        <Header />
      </header>
      <div className="body-cont">
        <p className="top-anchor" id="top" href="" />
        <Gallery />
        <About />
        <Projects />
        <Hobbies />
        <Contact />
      </div>
    </div>
  );
}

export default App;
