// src/components/Skills/Skills.jsx
import React from 'react';
import './Skill.css';

const Skills = () => {
  const skillCategories = [
    {
      name: "Cloud Platforms",
      skills: [
        { name: "Azure", proficiency: 95 },
        { name: "AWS", proficiency: 90 },
        { name: "Google Cloud", proficiency: 75 }
      ]
    },
    {
      name: "Data Technologies",
      skills: [
        { name: "Databricks", proficiency: 95 },
        { name: "Microsoft Fabric", proficiency: 90 },
        { name: "SQL/NoSQL", proficiency: 85 },
        { name: "Data Lake", proficiency: 90 },
        { name: "Data Warehouse", proficiency: 85 }
      ]
    },
    {
      name: "Architecture & Development",
      skills: [
        { name: "Solution Architecture", proficiency: 95 },
        { name: "Data Modeling", proficiency: 90 },
        { name: "API Design", proficiency: 80 },
        { name: "Python", proficiency: 85 },
        { name: "Scala", proficiency: 75 }
      ]
    },
    {
      name: "Leadership & Strategy",
      skills: [
        { name: "Technical Leadership", proficiency: 90 },
        { name: "Project Management", proficiency: 85 },
        { name: "Stakeholder Management", proficiency: 85 },
        { name: "Enterprise Architecture", proficiency: 90 },
        { name: "Digital Transformation", proficiency: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-footer">
          <p>And many more technologies and methodologies in the data and cloud ecosystem</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;