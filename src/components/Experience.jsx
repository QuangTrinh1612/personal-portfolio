import React, { useState, useEffect, useRef } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const revealContainer = useRef(null);
  const tabs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.25 }
    );

    if (revealContainer.current) {
      observer.observe(revealContainer.current);
    }

    return () => {
      if (revealContainer.current) {
        observer.unobserve(revealContainer.current);
      }
    };
  }, []);

  useEffect(() => {
    const focusTab = () => {
      if (tabs.current[activeTabId]) {
        tabs.current[activeTabId].focus();
      }
    };
    focusTab();
  }, [activeTabId]);

  const jobs = [
    {
      title: 'Data Architect',
      company: 'Rackspace Technology',
      url: 'https://www.rackspace.com',
      range: 'April 2021 - Present',
      duties: [
        'Design and implement scalable, modern data architecture solutions for enterprise clients',
        'Lead cross-functional teams in the development of data warehousing and data lake solutions',
        'Establish data governance frameworks and best practices for large-scale implementations',
        'Optimize ETL/ELT processes for improved performance and reliability',
        'Collaborate with stakeholders to translate business requirements into technical specifications',
      ],
    },
    {
      title: 'Senior Data Engineer',
      company: 'Shopee',
      url: 'https://shopee.vn/',
      range: 'June 2020 - April 2021',
      duties: [
        'Developed and maintained data pipelines for critical business operations',
        'Implemented real-time data processing solutions using streaming technologies',
        'Designed data models for analytical and operational data stores',
        'Integrated various data sources into a unified data platform',
        'Mentored junior engineers in data engineering best practices',
      ],
    },
    {
      title: 'Data Engineer',
      company: 'Athena System',
      url: 'https://unitedfintech.com/athena/',
      range: 'September 2018 - June 2020',
      duties: [
        'Built and optimized ETL workflows for business intelligence reporting',
        'Created data quality monitoring frameworks to ensure data accuracy',
        'Developed SQL queries and stored procedures for data transformation',
        'Configured and maintained database systems for optimal performance',
        'Collaborated with data analysts to support analytical requirements',
      ],
    },
  ];

  return (
    <section id="experience" ref={revealContainer} className="experience fade-up">
      <h2 className="section-heading">Where I've Worked</h2>

      <div className="experience-content">
        <div role="tablist" aria-label="Job tabs" className="tab-list">
          {jobs.map((job, i) => (
            <button
              key={i}
              className={`tab-button ${activeTabId === i ? 'active' : ''}`}
              onClick={() => setActiveTabId(i)}
              ref={(el) => (tabs.current[i] = el)}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
              id={`tab-${i}`}
            >
              <span>{job.company}</span>
            </button>
          ))}
          <div className="highlight" style={{ transform: `translateY(calc(${activeTabId} * 42px))` }}></div>
        </div>

        <div className="tab-panels">
          {jobs.map((job, i) => (
            <div
              key={i}
              className={`tab-panel ${activeTabId === i ? 'active' : ''}`}
              role="tabpanel"
              id={`panel-${i}`}
              aria-labelledby={`tab-${i}`}
              tabIndex={0}
              hidden={activeTabId !== i}
            >
              <h3>
                <span>{job.title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href={job.url} className="link-highlight">
                    {job.company}
                  </a>
                </span>
              </h3>

              <p className="range">{job.range}</p>

              <ul>
                {job.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;