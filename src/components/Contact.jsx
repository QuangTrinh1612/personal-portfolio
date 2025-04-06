import React, { useEffect, useRef } from 'react';
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
        <p>
          I'm currently open to new opportunities and collaborations. Whether you have a question or just
          want to say hi, I'll do my best to get back to you!
        </p>

        <a className="button contact-button" href="mailto:louis.quang@example.com">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;