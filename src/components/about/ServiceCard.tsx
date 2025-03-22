import React from 'react';
import { motion } from 'framer-motion';
import { Service } from './types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: index * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="relative group rounded-2xl overflow-hidden bg-white dark:bg-gray-900/5 backdrop-blur-xl border border-gray-200 dark:border-gray-800/10 shadow-lg dark:shadow-xl"
    >
      {/* Light/Dark mode specific gradient backgrounds */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-500/10 dark:via-blue-500/10 dark:to-pink-500/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Content container */}
      <div className="relative p-6 flex flex-col h-full">
        {/* Icon container with animation */}
        <motion.div 
          className="mb-6 relative w-full aspect-video"
          whileHover={{ scale: 1.02 }}
        >
          {/* Light/Dark mode specific image container */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-purple-500/20 dark:to-blue-500/20 rounded-xl overflow-hidden">
            <motion.img
              src={service.icon}
              alt={service.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Title with animation */}
        <motion.h3 
          className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-400 dark:to-blue-400"
          whileHover={{ x: 5 }}
        >
          {service.title}
        </motion.h3>

        {/* Description with fade effect */}
        <motion.p 
          className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {service.description}
        </motion.p>

        {/* Decorative elements - Light/Dark mode specific */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-purple-500 dark:to-blue-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};