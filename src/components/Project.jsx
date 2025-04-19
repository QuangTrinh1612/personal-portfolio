import React, { useEffect, useRef } from 'react';
import '../styles/Project.css';

const Projects = () => {
  const revealContainer = useRef(null);

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

  const otherProjects = [
    {
      title: 'Multi-cloud Data Integration',
      description: 'Seamless data integration solution across AWS, Azure, and GCP environments.',
      tech: ['Terraform', 'Python', 'Airflow', 'Kubernetes'],
      links: {
        github: '#',
        external: '#',
      }
    },
    {
      title: 'Data Mesh Implementation',
      description: 'Designed architecture for transitioning from monolithic data warehouse to domain-oriented data mesh.',
      tech: ['AWS', 'Snowflake', 'dbt', 'Docker'],
      links: {
        github: '#',
        external: '#',
      }
    },
    {
      title: 'IoT Data Processing Pipeline',
      description: 'Scalable pipeline for processing and analyzing data from thousands of IoT devices in real-time.',
      tech: ['Kafka', 'Spark Streaming', 'MongoDB', 'Python'],
      links: {
        github: '#',
        external: '#',
      }
    },
    {
      title: 'Data Quality Monitoring',
      description: 'Automated system for monitoring data quality metrics and alerting on anomalies.',
      tech: ['Great Expectations', 'Airflow', 'Prometheus', 'Grafana'],
      links: {
        github: '#',
        external: '#',
      }
    },
    {
      title: 'Customer 360 Data Platform',
      description: 'Unified customer data platform providing a single view of customer interactions across channels.',
      tech: ['Snowflake', 'dbt', 'Fivetran', 'Tableau'],
      links: {
        github: '#',
        external: '#',
      }
    },
    {
      title: 'ML Model Deployment Framework',
      description: 'Infrastructure for deploying and monitoring machine learning models in production.',
      tech: ['MLflow', 'Docker', 'Kubernetes', 'Python'],
      links: {
        github: '#',
        external: '#',
      }
    },
  ];

  return (
    <section id="projects" ref={revealContainer} className="projects fade-up">
      <h2 className="section-heading">Personal Projects</h2>

      <div className="other-projects">
        <ul className="projects-grid">
          {otherProjects.map((project, i) => (
            <li key={i} className="project other-project">
              <div className="project-inner">
                <header>
                  <div className="project-top">
                    <div className="folder-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="project-links">
                      <a href={project.links.github} aria-label="GitHub Link" className="icon-link">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a href={project.links.external} aria-label="External Link" className="icon-link">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <h3 className="project-title">
                    <a href={project.links.external}>{project.title}</a>
                  </h3>
                  
                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>
                </header>
                
                <footer>
                  <ul className="project-tech-list">
                    {project.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;