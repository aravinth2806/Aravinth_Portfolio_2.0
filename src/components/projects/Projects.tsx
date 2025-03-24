import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from './types';
import GradientButton from '../common/GradientButton';
import project1 from '/assets/project1.png';
import project2 from '/assets/project2.png';
import project3 from '/assets/project3.png';

const projects: Project[] = [
  {
    title: "Aravinth Portfolio (Latest Version)",
    description: "Designed and developed a professional portfolio website showcasing skills, projects, and certifications. Utilized React.js for fast performance, Tailwind CSS for responsive design, and Netlify for hosting and database integration.",
    image: project1,
    technologies: ["React JS", "TypeScript", "Tailwind CSS", "Netlify"],
    role: "Full Stack Developer",
    live: "https://aravinth-portfolio-v2.netlify.app/"
  },
  {
    title: "NerTekPod (Company Website - IT Solutions)",
    description: " Developed and optimized the official company website for NerTekPod, an IT solutions provider. Designed a responsive and SEO-friendly website using React.js and integrated HubSpot's HUBL language for content management and automation",
    image: project2,
    technologies: ["React JS", "HubSpot (HUBL)"],
    role: "Full Stack Developer",
    live: "https://www.nertekpod.com/"
  },
  {
    title: "Chosen Care Group - Availability Planner (Care Management - UK Market)",
    description: "A feature-rich e-commerce platform with real-time inventory management and secure payment processing.",
    image: project3,
    technologies: ["React JS", "React Native", "Redux", "Node JS", "Express JS", "MongoDB",],
    role: "Full Stack Developer",
    live: "https://play.google.com/store/apps/details?id=com.availability.planner&hl=en"
  }
];

export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-xl"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <motion.img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-64 md:h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <motion.h3
                    className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent"
                  >
                    {projects[currentIndex].title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {projects[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[currentIndex].technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-primary-light/10 to-primary-dark/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <span className="px-4 py-2 rounded-md bg-gradient-to-r from-primary-light/10 to-primary-dark/10 text-gray-700 dark:text-gray-300">
                      {projects[currentIndex].role}
                    </span>
                    <a
                      href={projects[currentIndex].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <GradientButton>
                        Live Demo
                      </GradientButton>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === currentIndex
                ? 'bg-primary'
                : 'bg-gray-300 dark:bg-gray-700'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};