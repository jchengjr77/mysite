import React from 'react';
import Header from './Header.jsx'
import About from './About.jsx'
import './App.css';

function App() {
  
  const currentStatus = "Under Construction";
  
  return (
    // Status of the website is displayed as an alert
    <div onLoad={() => {
      alert("Site is currently: " + currentStatus);
    }}>
        <Header />
        <About/>
    </div>
  );
}

export default App;
