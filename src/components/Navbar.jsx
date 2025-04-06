import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo">
          <a href="#home" aria-label="home">
            <div className="logo-container">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="5" />
                <text x="50" y="62" dominantBaseline="middle" textAnchor="middle" fontSize="40" fill="currentColor">
                  LQ
                </text>
              </svg>
            </div>
          </a>
        </div>

        <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <ol>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                <span>01.</span> About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                <span>02.</span> Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                <span>03.</span> Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                <span>04.</span> Contact
              </a>
            </li>
          </ol>
          <div className="resume-button">
            <a href="/resume.pdf" className="button" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>

        <div className="menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;