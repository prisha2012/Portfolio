import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useTheme from './hooks/useTheme';

function App() {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;