import React from 'react';
import  {link,to} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <h1>Bima Insurance</h1>
          <p className="tagline">Secure Your Future, Today</p>
        </div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </nav>

        <div className="nav-buttons">
          <button className="login-btn">  Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
