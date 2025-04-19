import React, { useState, useEffect } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import EnterpriseProject from './components/EnterpriseProject';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader">
          <div className="loader-content">
            <h1>LQ</h1>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="main-content">
            <Hero />
            <About />
            <Experience />
            <EnterpriseProject />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;