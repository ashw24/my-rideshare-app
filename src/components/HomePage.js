// src/HomePage.js

import React from 'react';
import NavBar from './NavBar';
import HeroBanner from './HeroBanner';
import './HomePage.css'; // Import CSS here


function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroBanner />
      <div className="button-group">
        <button onClick={() => window.location.href='/drivers'}>For Drivers</button>
        <button onClick={() => window.location.href='/passengers'}>For Passengers</button>
      </div>
    </div>
  );
}

export default HomePage;
