import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  onClick,
  className = '',
  children,
  variant = 'primary',
  href,
}) => {
  const gradients = {
    primary: 'from-blue-500 via-purple-500 to-pink-500',
    secondary: 'from-emerald-500 via-teal-500 to-cyan-500'
  };

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0.8 }}
      whileHover={{ 
        scale: 1.05,
        opacity: 1,
      }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative group
        px-6 py-3 rounded-full
        overflow-hidden
        ${className}
      `}
    >
      {/* Gradient background with animation */}
      <motion.div
        className={`
          absolute inset-0
          bg-gradient-to-r ${gradients[variant]}
          transition-all duration-300
          group-hover:scale-110
          opacity-90 group-hover:opacity-100
        `}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)',
        }}
      />

      {/* Button content */}
      <motion.div
        className="relative z-10 flex items-center justify-center gap-2 text-white font-medium"
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
      >
        {children}
      </motion.div>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-50"
        style={{
          background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
          top: 0,
          left: '-100%',
          width: '200%',
          transform: 'translateX(0)',
        }}
        animate={{
          transform: ['translateX(-100%)', 'translateX(100%)'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
    </motion.button>
  );
};

export default GradientButton;