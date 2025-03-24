import React from 'react';
import { NavLink } from './NavLink';
import { ThemeToggle } from '../theme/ThemeToggle';

interface DesktopMenuProps {
  activeSection: string;
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ activeSection }) => {
  const menuItems = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];

  return (
    <div className="hidden md:flex items-center space-x-8">
      {menuItems.map((item) => (
        <NavLink
          key={item}
          href={`#${item}`}
          isActive={activeSection === item}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </NavLink>
      ))}
      <ThemeToggle />
    </div>
  );
};