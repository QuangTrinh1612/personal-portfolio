import React, { useState, useEffect } from 'react';
import { Code, Database, Server, LucideCloud, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Handle dark mode toggle
  useEffect(() => {
    // Check system preference on initial load
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Set loaded state after a short delay for entrance animation
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Database className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <span className="font-bold text-xl">DataArchitect</span>
        </div>
        <button 
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200`}
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Home Section */}
        <section className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <div className={`transform transition-all duration-700 ${loaded ? 'translate-y-0' : 'translate-y-10'}`}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Data Architect</span> at Rackspace Technology
                </h1>
                <p className="text-xl mb-6 leading-relaxed">
                  Transforming complex data challenges into elegant, efficient architectural solutions that drive business value.
                </p>
                <div className="flex gap-4">
                  <button className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white`}>
                    View Projects
                  </button>
                  <button className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}>
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
            
            <div className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className={`relative w-64 h-64 md:w-80 md:h-80 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-full shadow-xl flex items-center justify-center`}>
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${darkMode ? 'from-blue-600/30 to-purple-600/30' : 'from-blue-100 to-purple-100'}`}></div>
                </div>
                
                {/* Floating icons around the circle */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                  <Database className={`h-10 w-10 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div className="absolute top-1/4 -right-4 animate-pulse">
                  <Server className={`h-8 w-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                </div>
                <div className="absolute bottom-1/4 -left-4 animate-pulse">
                  <Code className={`h-8 w-8 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                  <LucideCloud className={`h-10 w-10 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                </div>
                
                {/* Profile image placeholder */}
                <div className={`relative z-10 w-48 h-48 md:w-60 md:h-60 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} border-4 ${darkMode ? 'border-gray-700' : 'border-white'} flex items-center justify-center overflow-hidden`}>
                  <img src="/api/placeholder/240/240" alt="Data Architect" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Skills cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: <Database className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />, 
                title: "Data Architecture", 
                description: "Designing robust, scalable data infrastructures that support enterprise needs"
              },
              { 
                icon: <Server className={`h-8 w-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />, 
                title: "Cloud Solutions", 
                description: "Implementing cloud-native data platforms on AWS, Azure, and Google Cloud"
              },
              { 
                icon: <Code className={`h-8 w-8 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />, 
                title: "Data Integration", 
                description: "Creating seamless data pipelines and ETL processes for diverse systems"
              }
            ].map((skill, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'}`}
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-6 mt-12 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Data Architect Portfolio. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-6">
            {['GitHub', 'LinkedIn', 'Twitter'].map(social => (
              <a key={social} href="#" className="hover:underline transition-colors duration-200">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

// Add custom animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  .animate-bounce-slow {
    animation: bounce-slow 3s infinite;
  }
`;
document.head.appendChild(style);

export default Portfolio;