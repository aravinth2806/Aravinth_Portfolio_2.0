import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactInfo = () => {
  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "your.email@example.com",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 234 567 890",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Your City, Country",
      gradient: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <div className="space-y-8">
      {contactItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="group"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className={`bg-gradient-to-r ${item.gradient} p-3 rounded-full text-white transform group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};