import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Bima Insurance</h2>
          <p>Secure Your Future, Today.</p>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Insurance Products</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bima Insurance Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
