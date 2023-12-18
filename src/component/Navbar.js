// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="search-bar">
          {/* Add your search bar component here */}
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="middle">
        <div className="logo">FreeCodeCamp</div>
      </div>
      <div className="right">
        <button className="sign-in">Menu</button>
        <Link to="/auth">
          <button className="sign-in" style={{ marginLeft: '10px' }}>Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;