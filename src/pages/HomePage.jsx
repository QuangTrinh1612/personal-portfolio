// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Database, Server, Code, LucideCloud, Moon, Sun, Briefcase, Mail, Globe, Zap } from 'lucide-react';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle dark mode toggle
  useEffect(() => {
    // Check system preference on initial load
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Set loaded state after a short delay for entrance animation
    setTimeout(() => {
      setLoaded(true);
    }, 100);

    // Add scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Helper function to apply theme class
  const themeClass = (baseClass) => {
    return `${baseClass} ${darkMode ? 'dark-mode' : 'light-mode'}`;
  };

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  // Project items
  const projects = [
    {
      title: "Enterprise Data Warehouse",
      description: "Designed and implemented a scalable data warehouse solution for a Fortune 500 company that processes over 5TB of data daily.",
      tech: ["AWS Redshift", "Snowflake", "Airflow"],
      icon: <Database size={40} />
    },
    {
      title: "Real-time Analytics Platform",
      description: "Built a real-time data processing system that reduced reporting latency from hours to seconds for critical business metrics.",
      tech: ["Apache Kafka", "Spark Streaming", "Elasticsearch"],
      icon: <Zap size={40} />
    },
    {
      title: "Cloud Migration Strategy",
      description: "Led the migration of legacy on-premises data systems to cloud-native architecture, reducing operational costs by 40%.",
      tech: ["Azure", "Terraform", "Kubernetes"],
      icon: <LucideCloud size={40} />
    }
  ];

  return (
    <div className={themeClass('portfolio-container')}>
      {/* Header */}
      <header className={themeClass('header')}>
        <div className="logo">
          <Database className={themeClass('logo-icon')} size={24} />
          <span className="logo-text">DataArchitect</span>
        </div>
        
        {/* Navigation */}
        <nav className="main-nav">
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.id} className="nav-item">
                <a 
                  href={`#${item.id}`} 
                  className={`nav-link ${activeSection === item.id ? 'active' : ''} ${darkMode ? 'dark-mode' : 'light-mode'}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          onClick={toggleDarkMode}
          className={themeClass('theme-toggle')}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className={`hero-section ${loaded ? 'loaded' : ''}`}>
          <div className="hero-content">
            <div className={`hero-text ${loaded ? 'loaded' : ''}`}>
              <div className="hero-intro">
                <span className="greeting">Hello, I'm</span>
                <h1 className="hero-title">
                  <span className={themeClass('highlight')}>Data Architect</span>
                </h1>
                <h2 className="hero-subtitle">at Rackspace Technology</h2>
              </div>
              <p className="hero-description">
                Transforming complex data challenges into elegant, efficient architectural solutions that drive business value.
              </p>
              <div className="cta-buttons">
                <a href="#projects" className={themeClass('cta-button cta-primary')}>
                  <Briefcase size={18} />
                  <span>View Projects</span>
                </a>
                <a href="#contact" className={themeClass('cta-button cta-secondary')}>
                  <Mail size={18} />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
            
            <div className={`profile-container ${loaded ? 'loaded' : ''}`}>
              <div className={themeClass('profile-circle')}>
                <div className="profile-bg">
                  <div className={themeClass('profile-bg-gradient')}></div>
                </div>
                
                {/* Floating icons around the circle */}
                <div className="floating-icon floating-icon-top bounce-slow">
                  <Database className={themeClass('icon-database')} size={36} />
                </div>
                <div className="floating-icon floating-icon-right pulse">
                  <Server className={themeClass('icon-server')} size={28} />
                </div>
                <div className="floating-icon floating-icon-left pulse">
                  <Code className={themeClass('icon-code')} size={28} />
                </div>
                <div className="floating-icon floating-icon-bottom bounce-slow">
                  <LucideCloud className={themeClass('icon-cloud')} size={36} />
                </div>
                
                {/* Profile image placeholder */}
                <div className={themeClass('profile-image')}>
                  <img src="/api/placeholder/240/240" alt="Data Architect" />
                </div>
              </div>
              
              {/* Experience badges */}
              <div className="experience-badges">
                <div className={themeClass('experience-badge')}>
                  <span className="badge-number">10+</span>
                  <span className="badge-text">Years Experience</span>
                </div>
                <div className={themeClass('experience-badge')}>
                  <span className="badge-number">50+</span>
                  <span className="badge-text">Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section">
          <div className="section-header">
            <h2 className="section-title">My <span className={themeClass('highlight')}>Expertise</span></h2>
            <p className="section-subtitle">Specialized skills that drive data excellence</p>
          </div>
          
          <div className="skills-grid">
            {[
              { 
                icon: <Database className={themeClass('icon-database')} size={38} />, 
                title: "Data Architecture", 
                description: "Designing robust, scalable data infrastructures that support enterprise needs"
              },
              { 
                icon: <LucideCloud className={themeClass('icon-cloud')} size={38} />, 
                title: "Cloud Solutions", 
                description: "Implementing cloud-native data platforms on AWS, Azure, and Google Cloud"
              },
              { 
                icon: <Code className={themeClass('icon-code')} size={38} />, 
                title: "Data Integration", 
                description: "Creating seamless data pipelines and ETL processes for diverse systems"
              },
              { 
                icon: <Server className={themeClass('icon-server')} size={38} />, 
                title: "Big Data Systems", 
                description: "Building distributed systems for processing and analyzing large-scale datasets"
              },
              { 
                icon: <Globe className={themeClass('icon-globe')} size={38} />, 
                title: "Data Governance", 
                description: "Establishing policies and procedures for effective data management"
              },
              { 
                icon: <Zap className={themeClass('icon-zap')} size={38} />, 
                title: "Performance Optimization", 
                description: "Tuning and optimizing data systems for maximum efficiency and throughput"
              }
            ].map((skill, index) => (
              <div 
                key={index} 
                className={themeClass('skill-card')}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className={themeClass('skill-description')}>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="section-header">
            <h2 className="section-title">Featured <span className={themeClass('highlight')}>Projects</span></h2>
            <p className="section-subtitle">Recent work that showcases my expertise</p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className={themeClass('project-card')}>
                <div className={themeClass('project-icon')}>
                  {project.icon}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className={themeClass('project-description')}>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={themeClass('tech-tag')}>{tech}</span>
                  ))}
                </div>
                <button className={themeClass('project-button')}>View Details</button>
              </div>
            ))}
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="section-header">
            <h2 className="section-title">Get in <span className={themeClass('highlight')}>Touch</span></h2>
            <p className="section-subtitle">Let's discuss your data architecture needs</p>
          </div>
          
          <div className="contact-container">
            <div className={themeClass('contact-card')}>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" className={themeClass('form-input')} placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className={themeClass('form-input')} placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className={themeClass('form-textarea')} rows="5" placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" className={themeClass('form-submit')}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={themeClass('footer')}>
        <div className="footer-content">
          <div className="footer-logo">
            <Database className={themeClass('logo-icon')} size={20} />
            <span>DataArchitect</span>
          </div>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Data Architect Portfolio. All rights reserved.</p>
          <div className="social-links">
            {['GitHub', 'LinkedIn', 'Twitter'].map(social => (
              <a key={social} href="#" className={themeClass('social-link')}>
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;