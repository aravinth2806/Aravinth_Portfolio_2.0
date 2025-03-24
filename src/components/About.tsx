import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import GradientButton from './common/GradientButton';
import { ServiceCard } from './about/ServiceCard';
import { services } from './about/services.data';

const About: React.FC = () => {
  const downloadCV = () => {
    const cvUrl = "https://drive.google.com/file/d/1jM4L59escNCucUSNJ9_ne9LjyAB_NspV/view?usp=sharing";
    window.open(cvUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-[#0a192f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in building modern web and mobile applications.
            My journey in tech has equipped me with a diverse skill set and a problem-solving mindset.
          </p>

          {/* <GradientButton
            onClick={downloadCV}
            className="mt-8"
            variant="primary"
          >
            <FileDown className="w-5 h-5" />
            <span>Download CV</span>
          </GradientButton> */}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;