// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className={`flex flex-col md:flex-row min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Sidebar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main className="w-full md:w-1/2 p-8 ml-auto"> {/* Ensures correct width distribution */}
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
