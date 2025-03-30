// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Database, Server, Code, LucideCloud, Moon, Sun } from 'lucide-react';

import TechStackComponent from '../components/TechStack';
import ExperienceComponent from '../components/Experience';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Handle dark mode toggle
  useEffect(() => {
    // Check system preference on initial load
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Set loaded state after a short delay for entrance animation
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Helper function to apply theme class
  const themeClass = (baseClass) => {
    return `${baseClass} ${darkMode ? 'dark-mode' : 'light-mode'}`;
  };

  return (
    <div className={themeClass('portfolio-container')}>
      {/* Header */}
      <header className={themeClass('header')}>
        <div className="logo">
          <Database className={themeClass('logo-icon')} size={24} />
          <span>DataArchitect</span>
        </div>
        <button 
          onClick={toggleDarkMode}
          className={themeClass('theme-toggle')}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Home Section */}
        <section className={`home-section ${loaded ? 'loaded' : ''}`}>
          <div className="home-content">
            <div className={`home-text ${loaded ? 'loaded' : ''}`}>
              <h1 className="home-title">
                <span className={darkMode ? 'dark-mode' : 'light-mode'}>Data Architect</span> at Rackspace Technology
              </h1>
              <p className="home-description">
                Transforming complex data challenges into elegant, efficient architectural solutions that drive business value.
              </p>
              <div className="cta-buttons">
                <button className={themeClass('cta-button cta-primary')}>
                  View Projects
                </button>
                <button className={themeClass('cta-button cta-secondary')}>
                  Contact Me
                </button>
              </div>
            </div>
            
            <div className={`profile-container ${loaded ? 'loaded' : ''}`}>
              <div className={themeClass('profile-circle')}>
                <div className="profile-bg">
                  <div className={themeClass('profile-bg-gradient')}></div>
                </div>
                
                {/* Floating icons around the circle */}
                <div className="floating-icon floating-icon-top bounce-slow">
                  <Database className={themeClass('icon-database')} size={36} />
                </div>
                <div className="floating-icon floating-icon-right pulse">
                  <Server className={themeClass('icon-server')} size={28} />
                </div>
                <div className="floating-icon floating-icon-left pulse">
                  <Code className={themeClass('icon-code')} size={28} />
                </div>
                <div className="floating-icon floating-icon-bottom bounce-slow">
                  <LucideCloud className={themeClass('icon-cloud')} size={36} />
                </div>
                
                {/* Profile image placeholder */}
                <div className={themeClass('profile-image')}>
                  <img src="/api/placeholder/240/240" alt="Data Architect" />
                </div>
              </div>
            </div>
          </div>

          {/* Skills cards */}
          <div className="skills-grid">
            {[
              { 
                icon: <Database className={themeClass('icon-database')} size={32} />, 
                title: "Data Architecture", 
                description: "Designing robust, scalable data infrastructures that support enterprise needs"
              },
              { 
                icon: <Server className={themeClass('icon-server')} size={32} />, 
                title: "Cloud Solutions", 
                description: "Implementing cloud-native data platforms on AWS, Azure, and Google Cloud"
              },
              { 
                icon: <Code className={themeClass('icon-code')} size={32} />, 
                title: "Data Integration", 
                description: "Creating seamless data pipelines and ETL processes for diverse systems"
              }
            ].map((skill, index) => (
              <div 
                key={index} 
                className={themeClass('skill-card')}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className={themeClass('skill-description')}>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        <TechStackComponent />
        <ExperienceComponent />

      </main>

      {/* Footer */}
      <footer className={themeClass('footer')}>
        <p>&copy; {new Date().getFullYear()} Data Architect Portfolio. All rights reserved.</p>
        <div className="social-links">
          {['GitHub', 'LinkedIn', 'Twitter'].map(social => (
            <a key={social} href="#" className={themeClass('social-link')}>
              {social}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default HomePage;