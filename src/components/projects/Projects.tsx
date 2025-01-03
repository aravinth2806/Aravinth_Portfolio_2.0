import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from './types';
import GradientButton from '../common/GradientButton';

const projects: Project[] = [
  {
    title: "Modern Web Application",
    description: "A full-stack application built with React and Node.js, featuring real-time updates and modern UI components.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://project1.com"
  },
  {
    title: "E-Commerce Platform",
    description: "Feature-rich e-commerce platform with real-time inventory management and secure payment processing.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    github: "https://github.com",
    live: "https://project2.com"
  },
  {
    title: "Team Collaboration Tool",
    description: "Real-time collaboration platform for remote teams with video conferencing and document sharing.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://project3.com"
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
                    <GradientButton href={projects[currentIndex].github}>
                      View Code
                    </GradientButton>
                    <GradientButton href={projects[currentIndex].live}>
                      Live Demo
                    </GradientButton>
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
              className={`w-3 h-3 rounded-full transition-colors ${
                i === currentIndex
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