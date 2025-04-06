// src/components/Career/Career.jsx
import React from 'react';
import './Career.css';

const Career = () => {
  return (
    <section id="career" className="section career-section">
      <div className="container">
        <h2 className="section-title">Career Vision</h2>
        
        <div className="career-content">
          <div className="career-mission">
            <h3 className="career-subtitle">My Mission</h3>
            <p>
              I aim to leverage my extensive technical expertise to drive innovation in data architecture at 
              the management level within a leading fintech, banking, or insurtech organization. 
              My goal is to transform data capabilities into strategic advantages that drive 
              measurable business outcomes and industry leadership.
            </p>
          </div>
          
          <div className="career-goals">
            <h3 className="career-subtitle">What I'm Looking For</h3>
            <ul className="goals-list">
              <li>
                <div className="goal-icon">
                  <i className="leadership"></i>
                </div>
                <div className="goal-content">
                  <h4>Management Position</h4>
                  <p>
                    Leading a team of data architects and engineers to deliver enterprise-scale 
                    data solutions that transform how financial organizations operate.
                  </p>
                </div>
              </li>
              <li>
                <div className="goal-icon">
                  <i className="product"></i>
                </div>
                <div className="goal-content">
                  <h4>Product-Centric Environment</h4>
                  <p>
                    Working within a product-focused company where data-driven features directly 
                    impact business success and create competitive advantages.
                  </p>
                </div>
              </li>
              <li>
                <div className="goal-icon">
                  <i className="fintech"></i>
                </div>
                <div className="goal-content">
                  <h4>Financial Technology</h4>
                  <p>
                    Applying my skills in the fintech, banking, or insurance technology sector where 
                    data architecture is critical to security, compliance, and business innovation.
                  </p>
                </div>
              </li>
              <li>
                <div className="goal-icon">
                  <i className="innovation"></i>
                </div>
                <div className="goal-content">
                  <h4>Strategic Impact</h4>
                  <p>
                    Directly influencing technical strategy and organizational direction, 
                    with the opportunity to drive significant transformation initiatives.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="career-approach">
            <h3 className="career-subtitle">My Approach</h3>
            <div className="approach-container">
              <div className="approach-item">
                <h4>Direct & Decisive</h4>
                <p>
                  I communicate clearly and make confident decisions based on data and experience, 
                  ensuring teams move forward with purpose and clarity.
                </p>
              </div>
              <div className="approach-item">
                <h4>Results-Focused</h4>
                <p>
                  I prioritize tangible outcomes and measurable impact, driving projects to 
                  successful completion with a focus on business value.
                </p>
              </div>
              <div className="approach-item">
                <h4>Strategic Vision</h4>
                <p>
                  I look beyond immediate technical challenges to understand how architecture 
                  decisions impact long-term business strategy and competitive positioning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;