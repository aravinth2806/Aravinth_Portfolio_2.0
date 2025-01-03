import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative group"
    >
      {/* Gradient border animation */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-light via-primary to-primary-dark rounded-xl opacity-50 group-hover:opacity-100 blur transition duration-500" />
      
      <div className="relative bg-white dark:bg-gray-900 p-8 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <motion.div
              className="relative overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>

          <div className="lg:w-1/2 space-y-4">
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              {project.title}
            </motion.h3>
            
            <p className="text-gray-600 dark:text-gray-400">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-primary-light/10 to-primary-dark/10 border border-primary-light/20 dark:from-primary-light/5 dark:to-primary-dark/5"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light"
              >
                <Github className="w-5 h-5" />
                <span>Code</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.live}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};