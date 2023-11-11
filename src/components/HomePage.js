// src/HomePage.js

import React from 'react';
import NavBar from './NavBar';
import './HomePage.css'; // Make sure to import your CSS file

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="image-overlay-container">
        <img src="/blog-hero.jpg" alt="A descriptive text for the image" className="full-width-image" />
        <div className="button-group">
          <button className="action-button">For Drivers</button>
          <button className="action-button">For Passengers</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
