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
      title: 'Power BI API Framework',
      description: 'A comprehensive data integration platform that leverages the Power BI REST APIs to automate and streamline analytics workflows across the organization.',
      tech: ['Python', 'Power BI', 'Microsoft Fabrics'],
      links: {
        github: 'https://github.com/QuangTrinh1612/powerbi-api'
      }
    },
  ];

  return (
    <section id="myProjects" ref={revealContainer} className="myProjects fade-up">
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
                      <a href={project.links.github} aria-label="External Link" className="icon-link">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <h3 className="project-title">
                    <a href={project.links.github}>{project.title}</a>
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