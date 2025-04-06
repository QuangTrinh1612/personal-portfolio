// src/components/Contact/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitted: true, submitting: false, error: false });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Ready to discuss how I can contribute to your team?</h3>
            <p>
              I am actively seeking management opportunities in fintech, banking, or 
              insurtech companies where I can leverage my data architecture expertise 
              to drive business transformation and innovation.
            </p>
            <p>
              Whether you're looking to build a new data platform, modernize your existing 
              architecture, or strengthen your technical leadership, I'd be excited to discuss 
              how my experience aligns with your needs.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon email-icon"></div>
                <span>data.architect@example.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon location-icon"></div>
                <span>San Francisco, CA (Open to Relocation)</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon linkedin-icon"></div>
                <span>linkedin.com/in/data-architect</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`submit-btn ${formStatus.submitting ? 'submitting' : ''}`}
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus.submitted && (
                <div className="form-success">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {formStatus.error && (
                <div className="form-error">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;