// src/components/Experience/Experience.jsx
import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      company: "Rackspace Technology",
      title: "Senior Data Architect",
      period: "2020 - Present",
      responsibilities: [
        "Lead end-to-end architecture design for data platform solutions leveraging Azure, AWS, Databricks, and Microsoft Fabric",
        "Develop scalable data lakehouse architectures that support advanced analytics and AI/ML capabilities",
        "Drive technical direction for data modernization initiatives with a focus on cloud adoption",
        "Collaborate with executive stakeholders to align data strategy with business objectives",
        "Mentor junior architects and data engineers on modern data architecture best practices"
      ]
    },
    {
      company: "Previous Company",
      title: "Cloud Data Engineer",
      period: "2018 - 2020",
      responsibilities: [
        "Designed and implemented data pipelines using Azure Data Factory and AWS Glue",
        "Migrated on-premises data warehouses to cloud-based solutions",
        "Created data models and ETL processes for business intelligence reporting",
        "Optimized query performance and data storage cost efficiency",
        "Implemented data governance and security protocols"
      ]
    },
    {
      company: "Earlier Company",
      title: "Database Administrator",
      period: "2015 - 2018",
      responsibilities: [
        "Managed SQL Server and Oracle database environments",
        "Maintained database performance, security, and availability",
        "Implemented backup and disaster recovery strategies",
        "Performed database tuning and optimization",
        "Collaborated with application teams to solve data-related issues"
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Where I've Worked</h2>
        
        <div className="experience-container">
          <div className="tabs-container">
            <div className="tab-list">
              {experiences.map((exp, index) => (
                <button 
                  key={index}
                  className={`tab-button ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          
          <div className="tab-content">
            <h3 className="job-title">
              {experiences[activeTab].title} <span className="company">@ {experiences[activeTab].company}</span>
            </h3>
            <p className="job-period">{experiences[activeTab].period}</p>
            <ul className="responsibilities-list">
              {experiences[activeTab].responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="experience-cta">
          <a href="#" className="btn">View Full Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Experience;