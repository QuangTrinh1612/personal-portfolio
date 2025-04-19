import React, { useEffect, useRef } from 'react';
import '../styles/EnterpriseProject.css';

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

  const featuredProjects = [
    {
      title: 'Data Lakehouse Platform',
      description:
        'Designed and implemented a Data Lakehouse solution leveraging the Databricks ecosystem to enhance data processing and analytics capabilities. Integrated 118 raw tables from Oracle across 03 core modules: Finance, Procurement, and HR, into a unified data architecture.',
      tech: ['Oracle Fusion', 'Azure', 'Databricks', 'Delta Lake', 'Power BI', 'Azure Data Factory', 'Azure Devops'],
      img: 'src\\assets\\centralized.jpg',
      links: {
        github: 'https://github.com/QuangTrinh1612/erp-analytics-platform'
      }
    },
    {
      title: 'Power BI Security Build',
      description:
        'Security Auto Build is a framework that dynamically creates a tabular model and security model as RLS/OLS based on an Excel template. This framework is compatible for all destinations of tabular models - SQL Server Analysis Services, Azure Analysis Services and Power BI Premium (using the XMLA R/W endpoint). This framework is also viable for both Import and Direct Query models.',
      tech: ['C#', 'Power BI', 'SSAS', 'Fabrics'],
      img: 'src\\assets\\security.jpg',
      links: {
        github: 'https://github.com/QuangTrinh1612/SecurityAutoBuild'
      }
    },
    {
      title: 'ETL Framework',
      description:
        'A unified data engineering solution that standardizes and accelerates ETL processes across Databricks and Microsoft Fabric environments. This framework provides reusable components and patterns for efficient data extraction, transformation, and loading operations.',
      tech: ['Python', 'pytest', 'pyspark', 'msspark', 'SQL', 'Databricks', 'Fabrics'],
      img: 'src\\assets\\code.jpg',
      links: {
        github: 'https://github.com/QuangTrinh1612/vortex'
      }
    },
  ];

  return (
    <section id="projects" ref={revealContainer} className="projects fade-up">
      <h2 className="section-heading">Enterprise Projects</h2>

      <div className="featured-projects">
        <ul className="projects-grid">
          {featuredProjects.map((project, i) => (
            <li key={i} className="project featured-project">
              <div className="project-content">
                <div>
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">
                    <a href={project.links.external}>{project.title}</a>
                  </h3>
                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>
                  <ul className="project-tech-list">
                    {project.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
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
              </div>
              <div className="project-image">
                <div className="img-placeholder">
                  <img src={project.img} alt="" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;