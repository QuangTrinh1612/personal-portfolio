// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#hero">DA</a>
        </div>
        
        <div className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
            <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#career" onClick={() => setMobileMenuOpen(false)}>Career Vision</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            <li><a href="#" className="btn-resume" onClick={() => setMobileMenuOpen(false)}>Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;