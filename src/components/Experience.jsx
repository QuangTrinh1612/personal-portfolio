import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, Building, Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const ExperienceComponent = ({ darkMode }) => {
  const [visibleItems, setVisibleItems] = useState({});
  const [expandedJob, setExpandedJob] = useState(null);
  const experienceRef = useRef(null);

  // Helper function to apply theme class
  const themeClass = (baseClass) => {
    return `${baseClass} ${darkMode ? 'dark-mode' : 'light-mode'}`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animating items when section becomes visible
            animateItems();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const animateItems = () => {
    // Stagger animation for each experience item
    workExperience.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => ({
          ...prev,
          [index]: true,
        }));
      }, index * 200);
    });
  };

  const toggleJobExpand = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  // Work experience data
  const workExperience = [
    {
      company: "Rackspace Technology",
      role: "Lead Data Architect",
      period: "2021 - Present",
      location: "San Antonio, TX",
      description:
        "Leading data architecture initiatives across enterprise systems, designing scalable data solutions, and establishing data governance frameworks.",
      achievements: [
        "Redesigned the enterprise data warehouse architecture, reducing query times by 60% and enabling real-time analytics",
        "Led implementation of a cloud-native data lake on AWS, consolidating disparate data sources and enabling ML workloads",
        "Established data mesh architecture to enable domain-oriented data ownership and governance",
        "Created data quality framework reducing errors by 75% and improving downstream analytics reliability"
      ],
      technologies: ["AWS Redshift", "Snowflake", "dbt", "Apache Airflow", "Terraform", "Python", "Spark"],
      projects: [
        {
          name: "Customer 360 Platform",
          description: "Unified customer data platform with real-time analytics capabilities",
          link: "#"
        },
        {
          name: "Predictive Maintenance Solution",
          description: "IoT data pipeline for equipment monitoring and failure prediction",
          link: "#"
        }
      ]
    },
    {
      company: "Dell Technologies",
      role: "Senior Data Engineer",
      period: "2018 - 2021",
      location: "Austin, TX",
      description:
        "Architected and implemented data pipelines and analytics solutions for product usage metrics and customer insights.",
      achievements: [
        "Developed streaming data platform processing 2TB+ daily using Kafka and Spark Streaming",
        "Built CI/CD pipeline for data infrastructure, improving deployment time by 80%",
        "Implemented data catalog solution to improve data discovery across the organization",
        "Optimized ETL processes reducing daily processing time from 8 hours to 45 minutes"
      ],
      technologies: ["Apache Kafka", "Spark", "Azure Data Factory", "Databricks", "Python", "Docker", "Kubernetes"],
      projects: [
        {
          name: "Product Analytics Platform",
          description: "End-to-end telemetry and analytics solution for product usage insights",
          link: "#"
        },
        {
          name: "Sales Forecasting Engine",
          description: "ML-based forecasting system integrating multiple data sources",
          link: "#"
        }
      ]
    },
    {
      company: "Accenture",
      role: "Data Engineer",
      period: "2015 - 2018",
      location: "Chicago, IL",
      description:
        "Designed and implemented data integration solutions for Fortune 500 clients across finance, healthcare and retail sectors.",
      achievements: [
        "Delivered data migration project for healthcare client, moving 15+ years of patient data to cloud platform",
        "Built real-time dashboard solution for retail client, increasing operational efficiency by 35%",
        "Implemented data quality monitoring framework for financial services client",
        "Led team of 5 engineers in developing modular ETL framework using Python and Airflow"
      ],
      technologies: ["SQL Server", "PostgreSQL", "Python", "Talend", "AWS", "Tableau", "Docker"],
      projects: [
        {
          name: "Healthcare Data Migration",
          description: "Large-scale data migration and transformation project",
          link: "#"
        },
        {
          name: "Retail Analytics Platform",
          description: "Real-time analytics solution for inventory and sales optimization",
          link: "#"
        }
      ]
    },
    {
      company: "JP Morgan Chase",
      role: "Data Analyst",
      period: "2013 - 2015",
      location: "New York, NY",
      description:
        "Analyzed financial datasets to identify patterns, trends and opportunities for process optimization and risk reduction.",
      achievements: [
        "Developed predictive models for fraud detection, reducing false positives by 40%",
        "Created automated reporting system saving 20+ hours of manual work weekly",
        "Designed data visualization dashboards for executive decision making",
        "Optimized SQL queries across critical applications improving performance by 65%"
      ],
      technologies: ["SQL", "Python", "R", "Tableau", "Excel", "PowerBI", "SAS"],
      projects: [
        {
          name: "Fraud Detection System",
          description: "ML-based system for identifying potentially fraudulent transactions",
          link: "#"
        },
        {
          name: "Executive Dashboard Suite",
          description: "Comprehensive visualization platform for business KPIs",
          link: "#"
        }
      ]
    }
  ];

  return (
    <section ref={experienceRef} className={`experience-section ${themeClass('')}`}>
      <div className="experience-header">
        <h2 className="experience-title">Professional Experience</h2>
        <p className={themeClass('experience-subtitle')}>
          Over 10 years of experience designing and implementing data solutions for enterprise organizations
        </p>
      </div>

      <div className="experience-timeline">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className={`experience-item ${themeClass('')} ${
              visibleItems[index] ? 'visible' : ''
            }`}
          >
            <div className="timeline-connector">
              <div className={themeClass('timeline-dot')}></div>
              {index !== workExperience.length - 1 && <div className={themeClass('timeline-line')}></div>}
            </div>

            <div className={`experience-card ${themeClass('')} ${expandedJob === index ? 'expanded' : ''}`}>
              <div className="experience-header-section">
                <div className="experience-role-info">
                  <h3 className="job-role">{job.role}</h3>
                  <div className="company-info">
                    <Building size={16} className={themeClass('icon-company')} />
                    <span className="company-name">{job.company}</span>
                  </div>
                </div>

                <div className="job-meta">
                  <div className="job-period">
                    <Calendar size={16} className={themeClass('icon-calendar')} />
                    <span>{job.period}</span>
                  </div>
                  <div className="job-location">
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>

              <p className={themeClass('job-description')}>{job.description}</p>

              <div className="tech-tags">
                {job.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={themeClass('tech-tag')}>
                    {tech}
                  </span>
                ))}
              </div>

              <button
                className={themeClass('toggle-details-btn')}
                onClick={() => toggleJobExpand(index)}
                aria-expanded={expandedJob === index}
                aria-label={expandedJob === index ? "Hide details" : "Show details"}
              >
                {expandedJob === index ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    <span>Show More</span>
                    <ChevronDown size={16} />
                  </>
                )}
              </button>

              {expandedJob === index && (
                <div className="job-details">
                  <div className="achievements-section">
                    <h4 className="details-title">
                      <Award size={18} className={themeClass('icon-award')} />
                      Key Achievements
                    </h4>
                    <ul className="achievements-list">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className={themeClass('achievement-item')}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="projects-section">
                    <h4 className="details-title">
                      <Briefcase size={18} className={themeClass('icon-briefcase')} />
                      Notable Projects
                    </h4>
                    <div className="projects-list">
                      {job.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className={themeClass('project-card')}>
                          <h5 className="project-name">{project.name}</h5>
                          <p className={themeClass('project-description')}>{project.description}</p>
                          <a href={project.link} className={themeClass('project-link')}>
                            <span>View Project</span>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceComponent;