// src/pages/Home/Home.jsx
import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Skills from '../../components/skill/Skill';
import Career from '../../components/career/Career';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;