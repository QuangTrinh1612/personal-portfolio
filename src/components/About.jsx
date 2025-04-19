import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
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

  const skills = [
    'Programming (Python, Java)',
    'Cloud Architecture (Azure, AWS)',
    'Spark (Databricks)',
    'Microsoft Fabrics',
    'Airflow (Astronomer)',
    'Kafka (Confluent)',
    'IaC (Terraform)',
    'Data Quality (Great Expectation, Soda)',
    'dbt-core',
    'Power BI',
    'AI Agents (Autogen 0.4)',
    'LLM Orchestration (Langchain, llama-index)'
  ];

  return (
    <section id="about" ref={revealContainer} className="about fade-up">
      <h2 className="section-heading">About Me</h2>

      <div className="about-inner">
        <div className="about-text">
          <div>
            <p>
            Hello! I'm Louis, a Data Architect who blends deep technical expertise with strong business acumen.
            Since 2015, I've been passionate about turning complex, messy data into meaningful insights that drive strategic decisions.
            </p>

            <p>
            I specialize in designing scalable, future-proof data architectures that integrate diverse data sources across the enterprise.
            My work spans system design, Azure & AWS cloud computing, ETL Framwork Design, and implementing Data Governance frameworks to ensure
            data is secure, reliable, and actionable.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <a className="link-highlight"> Technical Skills </a>

          <ul className="skills-list">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="about-pic">
          <div className="wrapper">
            <div className="img-wrapper">
              <div className="img-placeholder"></div>
              <div className="img-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;