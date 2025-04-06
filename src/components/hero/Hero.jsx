// src/components/Hero/Hero.jsx
import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <p className="intro">Hello, my name is</p>
          <h1 className="name">Data Architect</h1>
          <h2 className="title">Transforming Data into Enterprise Value</h2>
          <p className="description">
            I'm a specialized Data Architect with expertise in Cloud Computing and Data Lakehouse solutions. 
            Currently working at Rackspace Technology, I architect robust data solutions using 
            Azure, AWS, Databricks, and Fabrics that drive business decisions.
          </p>
          <div className="hero-cta">
            <a href="#career" className="btn btn-primary">My Career Vision</a>
            <a href="#contact" className="btn">Get In Touch</a>
          </div>
        </div>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;