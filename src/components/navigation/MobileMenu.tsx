import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onLinkClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeSection,
  onLinkClick,
}) => {
  if (!isOpen) return null;

  const menuItems = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="md:hidden absolute top-full left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
    >
      <div className="px-4 py-2 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item}
            href={`#${item}`}
            isActive={activeSection === item}
            onClick={onLinkClick}
            isMobile
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};