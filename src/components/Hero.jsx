import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Louis Quang.</h2>;
  const three = <h3 className="big-heading">I architect data solutions.</h3>;
  const four = (
    <p>
      I'm a Data Architect specializing in designing robust data systems and solutions. 
      Currently, I'm focused on building data architectures and analytics platforms at{' '}
      <a href="https://www.rackspace.com" target="_blank" rel="noreferrer" className="link-highlight">
        Rackspace Technology
      </a>
      .
    </p>
  );
  const five = (
    <a className="button hero-button" href="#projects">
      Check out my work
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {items.map((item, i) => (
          <div
            key={i}
            className={`hero-item ${isMounted ? 'fade-in' : 'fade-out'}`}
            style={{ transitionDelay: `${isMounted ? i * 100 : 0}ms` }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;