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
    'Data Architecture',
    'Big Data',
    'Cloud Solutions (AWS, Azure, GCP)',
    'Data Warehousing',
    'ETL/ELT',
    'Data Modeling',
    'SQL & NoSQL Databases',
    'Data Governance'
  ];

  return (
    <section id="about" ref={revealContainer} className="about fade-up">
      <h2 className="section-heading">About Me</h2>

      <div className="about-inner">
        <div className="about-text">
          <div>
            <p>
              Hello! I'm Louis, a Data Architect passionate about designing efficient and scalable data solutions. My
              journey in the data world began in 2015 when I discovered my fascination with transforming raw data
              into valuable insights that drive business decisions.
            </p>

            <p>
              I specialize in building comprehensive data architectures that connect various data sources and enable
              organizations to leverage their data assets effectively. My focus is on creating robust, future-proof
              solutions that adapt to evolving business needs.
            </p>

            <p>
              At Rackspace Technology, I work with cross-functional teams to design and implement modern data platforms
              that help our clients make data-driven decisions, optimize operations, and uncover new opportunities.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

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