// src/components/About/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a results-driven Data Architect with extensive experience in designing and implementing 
              enterprise-scale data solutions. My expertise lies in cloud-based architectures, specifically 
              Azure and AWS, and modern data lakehouse platforms such as Databricks and Microsoft Fabric.
            </p>
            <p>
              At Rackspace Technology, I lead data architecture initiatives that transform how organizations 
              collect, store, process, and derive value from their data assets. I specialize in creating 
              scalable, resilient, and secure data infrastructures that drive business intelligence and 
              support strategic decision-making.
            </p>
            <p>
              My approach is direct and decisive, with a strong focus on business outcomes and measurable 
              results. I believe in pushing boundaries and challenging conventional thinking to deliver 
              innovative solutions that create competitive advantages for my clients and employers.
            </p>
            <p>
              I am currently seeking to leverage my technical expertise and leadership abilities in a 
              management role within a product-focused organization, particularly in the fintech, banking, 
              or insurance technology sector.
            </p>
          </div>
          <div className="about-image">
            <div className="image-container">
              <div className="image-placeholder"></div>
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;