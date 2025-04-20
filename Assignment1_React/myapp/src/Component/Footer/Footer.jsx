import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2025 Harshit Pathak. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
