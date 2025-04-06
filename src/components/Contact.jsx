import React, { useEffect, useRef, useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
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

  return (
    <section id="contact" ref={revealContainer} className="contact fade-up">
      <h2 className="section-heading">Get In Touch</h2>

      <div className="contact-inner">
        <p className="contact-intro">
          I'm currently open to new opportunities and collaborations in data architecture and analytics. 
          Feel free to reach out to me through any of the platforms below.
        </p>

        <div className="contact-methods">
          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>Email</h3>
            <p>The most direct way to contact me</p>
            <a href="mailto:trinhquocquang.buh@gmail.com" className="contact-link">
              trinhquocquang.buh@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <h3>LinkedIn</h3>
            <p>Let's connect professionally</p>
            <a href="https://www.linkedin.com/in/trinh-quoc-quang/" target="_blank" rel="noopener noreferrer" className="contact-link">
              linkedin.com/in/trinh-quoc-quang
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
            <h3>GitHub</h3>
            <p>Check out my code and projects</p>
            <a href="https://github.com/QuangTrinh1612" target="_blank" rel="noopener noreferrer" className="contact-link">
              github.com/QuangTrinh1612
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;