import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
}

const gradientVariants = {
  primary: 'from-primary-light via-primary to-primary-dark',
  secondary: 'from-[#FF6B6B] via-[#4ECDC4] to-[#3D84A8]',
  accent: 'from-[#FFD93D] via-[#FF6B6B] to-[#4ECDC4]'
};

const sizeVariants = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const GradientButton: React.FC<GradientButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  href,
  variant = 'primary',
  size = 'md'
}) => {
  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative group overflow-hidden rounded-lg
        ${sizeVariants[size]}
        ${className}
      `}
    >
      {/* Base gradient background */}
      <div className={`
        absolute inset-0 bg-gradient-to-r ${gradientVariants[variant]}
        group-hover:animate-gradient-shift
      `} />
      
      {/* Content container with glass effect */}
      <div className="
        relative flex items-center justify-center
        bg-white/10 dark:bg-black/10
        backdrop-blur-[2px]
        group-hover:bg-transparent
        transition-all duration-300
      ">
        <span className="relative z-10 text-white font-medium">
          {children}
        </span>
      </div>

      {/* Hover gradient overlay */}
      <div className={`
        absolute inset-0 opacity-0
        group-hover:opacity-100
        transition-opacity duration-300
        bg-gradient-to-r ${gradientVariants[variant]}
        rotate-180
      `} />
      
      {/* Shine effect */}
      <div className="
        absolute inset-0 opacity-0
        group-hover:opacity-20
        transition-opacity duration-300
        bg-gradient-to-r from-transparent via-white to-transparent
        -skew-x-12
        group-hover:animate-shine
      " />
    </motion.div>
  );

  return href ? (
    <a href={href} className="inline-block">{buttonContent}</a>
  ) : (
    <button onClick={onClick} className="inline-block">{buttonContent}</button>
  );
};

export default GradientButton;