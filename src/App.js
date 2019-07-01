import React from "react";
import Header from "./Header.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import "./App.css";

function App() {
  const currentStatus = "Under Construction";

  return (
    // Status of the website is displayed as an alert
    <div
      onLoad={() => {
        alert("Site is currently: " + currentStatus);
      }}
    >
      <Header />
      <div className="body-cont">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
