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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="relative group rounded-xl overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-75 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative p-8 bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm">
        <div className="mb-6 overflow-hidden rounded-lg">
          <motion.img
            src={service.icon}
            alt={service.title}
            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
        <p className="text-gray-100">{service.description}</p>
      </div>
    </motion.div>
  );
};