import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Footer = ()=> {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Pradhuman Shrestha</h3>
          <p>Copyright © 2024 All rights reserved | From Pradhuman Shrestha</p>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          <div className="footer-social-icons">
            <a href="https://github.com/Shhres" className="footer-link">GitHub</a>
            <a href="https://www.linkedin.com/in/pradhuman-shrestha-0647312ab" className="footer-link">LinkedIn</a>
            <a href="https://www.instagram.com/_shrestha10.x/?hl=en" className="footer-link">Instagram</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <ul className="footer-links">
            <div>
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="/about">About</Link>
              <Link className="link" to="/detect">Detect</Link>
            </div>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Have a Question?</h4>
          <p>Itahari, Sunsari</p>
          <p>+9779742315155</p>
          <p>pradhuman10.x@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
