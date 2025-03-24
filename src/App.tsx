import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/common/ScrollProgress';

const App: React.FC = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white">
          <Navbar />
          <ScrollProgress />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <section id="home">
              <Hero />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <Footer />
          </motion.div>
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;