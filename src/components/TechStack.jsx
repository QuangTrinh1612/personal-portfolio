import React, { useState, useEffect } from 'react';
import { Database, Server, Code, LucideCloud, GitBranch, BarChart, PieChart, Layers, Cpu } from 'lucide-react';

const TechStackComponent = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('databases');
  const [animatedItems, setAnimatedItems] = useState({});

  // Helper function to apply theme class
  const themeClass = (baseClass) => {
    return `${baseClass} ${darkMode ? 'dark-mode' : 'light-mode'}`;
  };

  // Animate skills on tab change
  useEffect(() => {
    setAnimatedItems({});
    
    const timer = setTimeout(() => {
      const newAnimatedItems = {};
      
      // Stagger animation for each skill item
      techSkills[activeTab].forEach((_, index) => {
        setTimeout(() => {
          setAnimatedItems(prev => ({
            ...prev,
            [index]: true
          }));
        }, index * 100);
      });
      
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Tech stack categories
  const categories = [
    { id: 'databases', name: 'Databases', icon: <Database size={20} /> },
    { id: 'cloud', name: 'Cloud', icon: <LucideCloud size={20} /> },
    { id: 'dataEngineering', name: 'Data Engineering', icon: <Layers size={20} /> },
    { id: 'dataScience', name: 'Data Science', icon: <BarChart size={20} /> },
    { id: 'devOps', name: 'DevOps', icon: <GitBranch size={20} /> },
    { id: 'bigData', name: 'Big Data', icon: <Cpu size={20} /> }
  ];

  // Tech skills by category
  const techSkills = {
    databases: [
      { name: 'PostgreSQL', level: 90, description: 'Advanced optimization, partitioning, stored procedures' },
      { name: 'MongoDB', level: 85, description: 'Schema design, indexing, aggregation pipelines' },
      { name: 'SQL Server', level: 80, description: 'Performance tuning, T-SQL, SSIS packages' },
      { name: 'Redis', level: 75, description: 'Caching, pub/sub, data structures' },
      { name: 'Cassandra', level: 70, description: 'Distributed NoSQL, high availability design' },
      { name: 'Neo4j', level: 65, description: 'Graph databases, Cypher query language' }
    ],
    cloud: [
      { name: 'AWS', level: 90, description: 'RDS, S3, EC2, Lambda, Redshift, Glue' },
      { name: 'Azure', level: 85, description: 'Synapse, Data Factory, Cosmos DB, Azure SQL' },
      { name: 'GCP', level: 75, description: 'BigQuery, Cloud Storage, Dataflow, Pub/Sub' },
      { name: 'Snowflake', level: 80, description: 'Data warehousing, performance optimization' },
      { name: 'Databricks', level: 70, description: 'Unified analytics, Delta Lake' }
    ],
    dataEngineering: [
      { name: 'Apache Airflow', level: 90, description: 'DAG design, custom operators, monitoring' },
      { name: 'Spark', level: 85, description: 'Batch processing, streaming, optimizations' },
      { name: 'Kafka', level: 80, description: 'Event streaming, connect, KSQL' },
      { name: 'dbt', level: 85, description: 'Transformations, testing, documentation' },
      { name: 'Python', level: 90, description: 'Data processing, pandas, pyspark' }
    ],
    dataScience: [
      { name: 'Python', level: 85, description: 'Pandas, NumPy, SciPy, scikit-learn' },
      { name: 'R', level: 70, description: 'Statistical analysis, visualization' },
      { name: 'Tableau', level: 80, description: 'Data visualization, dashboard design' },
      { name: 'PowerBI', level: 75, description: 'Reports, DAX, data modeling' },
      { name: 'SQL', level: 90, description: 'Complex analytics queries, window functions' }
    ],
    devOps: [
      { name: 'Docker', level: 85, description: 'Containerization, custom images' },
      { name: 'Kubernetes', level: 75, description: 'Orchestration, stateful workloads' },
      { name: 'Terraform', level: 80, description: 'IaC, modules, state management' },
      { name: 'GitHub Actions', level: 85, description: 'CI/CD pipelines, workflow automation' },
      { name: 'Jenkins', level: 70, description: 'Pipeline automation, integration' }
    ],
    bigData: [
      { name: 'Hadoop', level: 75, description: 'HDFS, MapReduce, Hive' },
      { name: 'Apache Hive', level: 70, description: 'HiveQL, schema optimization' },
      { name: 'Apache Flink', level: 65, description: 'Stream processing, event time' },
      { name: 'Elasticsearch', level: 80, description: 'Search, analytics, monitoring' },
      { name: 'Apache Beam', level: 65, description: 'Unified batch & stream processing' }
    ]
  };

  return (
    <section className={`tech-stack-section ${themeClass('')}`}>
      <h2 className="tech-stack-title">Technical Skills</h2>
      <p className={themeClass('tech-stack-subtitle')}>
        Expertise across the full data ecosystem, from databases to cloud infrastructure and analytics
      </p>
      
      {/* Category Tabs */}
      <div className="tech-tabs">
        {categories.map(category => (
          <button 
            key={category.id}
            className={`tech-tab ${themeClass('')} ${activeTab === category.id ? 'active' : ''}`}
            onClick={() => setActiveTab(category.id)}
          >
            <span className="tab-icon">{category.icon}</span>
            <span className="tab-name">{category.name}</span>
          </button>
        ))}
      </div>
      
      {/* Skills List */}
      <div className="skills-container">
        {techSkills[activeTab].map((skill, index) => (
          <div 
            key={`${activeTab}-${index}`} 
            className={`skill-item ${themeClass('')} ${animatedItems[index] ? 'animated' : ''}`}
          >
            <div className="skill-header">
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-level">{skill.level}%</span>
            </div>
            
            <div className="skill-bar-container">
              <div 
                className={`skill-bar ${themeClass('')}`} 
                style={{ width: animatedItems[index] ? `${skill.level}%` : '0%' }}
              ></div>
            </div>
            
            <p className={themeClass('skill-description')}>
              {skill.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Certification Section */}
      <div className={`certifications ${themeClass('')}`}>
        <h3 className="certifications-title">Certifications</h3>
        <div className="certification-grid">
          {[
            { name: 'AWS Certified Solutions Architect', year: '2023' },
            { name: 'Azure Data Engineer Associate', year: '2022' },
            { name: 'Google Professional Data Engineer', year: '2023' },
            { name: 'Databricks Certified Data Engineer', year: '2022' }
          ].map((cert, index) => (
            <div key={index} className={`certification-card ${themeClass('')}`}>
              <div className="cert-icon">
                {index % 4 === 0 && <LucideCloud size={24} className={themeClass('icon-cloud')} />}
                {index % 4 === 1 && <Database size={24} className={themeClass('icon-database')} />}
                {index % 4 === 2 && <Server size={24} className={themeClass('icon-server')} />}
                {index % 4 === 3 && <Cpu size={24} className={themeClass('icon-code')} />}
              </div>
              <div className="cert-details">
                <h4 className="cert-name">{cert.name}</h4>
                <span className="cert-year">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackComponent;