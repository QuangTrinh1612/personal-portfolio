// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#hero">DA</a>
            <p className="footer-tagline">Data Architecture Leadership</p>
          </div>
          
          <div className="footer-links">
            <ul className="footer-nav">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <a href="#" className="social-icon linkedin-icon" aria-label="LinkedIn"></a>
            <a href="#" className="social-icon github-icon" aria-label="GitHub"></a>
            <a href="#" className="social-icon twitter-icon" aria-label="Twitter"></a>
            <a href="#" className="social-icon medium-icon" aria-label="Medium"></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Data Architect. All rights reserved.
          </p>
          <p className="credits">
            Designed and built with ReactJS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;