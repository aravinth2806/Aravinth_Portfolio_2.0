import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  isActive: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  isMobile?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  isActive, 
  onClick, 
  children,
  isMobile = false 
}) => {
  if (isMobile) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors
          ${isActive
            ? 'bg-primary-light/10 text-primary-dark dark:text-primary-light'
            : 'text-gray-600 dark:text-gray-300'
          }`}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1 }}
      className={`text-sm font-medium transition-colors relative
        ${isActive 
          ? 'text-primary-dark dark:text-primary-light' 
          : 'text-gray-600 dark:text-gray-300'
        }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeSection"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-dark dark:bg-primary-light"
        />
      )}
    </motion.a>
  );
};