import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {

  const emailBody = `
  Dear Aravinth,
  
  I came across your portfolio and would like to connect with you regarding a potential opportunity.  
  
  -- Replace this text with the actual message you want to send. --
  
  Best regards,
  -- Replace this text with your name. --
        `.trim();
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/aravinth2806" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/aravinth-s-fullstackdeveloper/" },
    { icon: <Mail className="w-5 h-5" />, href: `mailto:aravinthselvaraj210@gmail.com?subject=Exciting Opportunity to Connect&body=${encodeURIComponent(emailBody)}` }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center text-gray-600 dark:text-gray-400"
          >
            Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> by Aravinth S.
          </motion.div>

          <div className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Aravinth S. | All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};