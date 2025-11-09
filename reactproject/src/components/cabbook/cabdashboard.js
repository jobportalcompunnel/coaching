import React from 'react';
import { Link } from "react-router-dom";
//import './Home.css'; // Import the CSS file

const categories = [
  { name: 'Book Cab', icon: '🚕' },
  { name: 'Book Bus', icon: '🚌' },
  { name: 'Book Pickup', icon: '🚚' },
  { name: 'Book Truck', icon: '🚛' },
];

const CabDashboard = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        <h1 className="logo">Classifieds</h1>
        <div className="nav-links">
          <a href="#">My Bookings</a>
          <a href="#">Login</a>
        </div>
      </header>

      <div className="main-content">
        <div className="search-bar">
          <input type="text" placeholder="Search for a service..." />
          <button>Search</button>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.name} className="category-card">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
              <button className="cta-button" type='button'>
                <Link to="list">Book Now</Link></button>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Classifieds Site</p>
        <p>
          <a href="#">About Us</a> | <a href="#">Contact</a> | <a href="#">FAQ</a>
        </p>
      </footer>
    </div>
  );
};

export default CabDashboard;