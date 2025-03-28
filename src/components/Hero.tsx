import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import GradientButton from './common/GradientButton';

// import pic1 from "../../public/assets/pic10.jpg";
// import pic2 from "/assets/pic2.jpg";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = Array.from({ length: 6 }, (_, i) => `pic${i + 1}.jpg`);
  // Gradient Button will redirect to projects section
  const handleViewProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const cvUrl = "https://drive.google.com/file/d/1jM4L59escNCucUSNJ9_ne9LjyAB_NspV/view?usp=sharing";
    window.open(cvUrl, '_blank');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);


  const emailBody = `
  Dear Aravinth,
  
  I came across your portfolio and would like to connect with you regarding a potential opportunity.  
  
  -- Replace this text with the actual message you want to send. --
  
  Best regards,
  -- Replace this text with your name. --
        `.trim();

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(109, 127, 209, 0.3) 0%, rgba(108, 143, 209, 0.2) 50%, rgba(107, 152, 211, 0.1) 100%)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-dark dark:text-primary-light mb-4"
            >
              Hello, I'm
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent"
            >
              Aravinth
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
            >
              {/* I build exceptional digital experiences. */}I create
              exceptional digital experiences as a Full stack developer.
            </motion.p>
            <div className="flex space-x-6 mb-12">
              {[
                {
                  icon: <Github className="w-6 h-6" />,
                  href: "https://github.com/aravinth2806",
                  color: "from-[#6e5494] to-[#24292e]",
                },
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  href: "https://www.linkedin.com/in/aravinth-s-fullstackdeveloper/",
                  color: "from-[#0077b5] to-[#00a0dc]",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  href: `mailto:aravinthselvaraj210@gmail.com?subject=Exciting Opportunity to Connect&body=${encodeURIComponent(emailBody)}`,
                  color: "from-[#EA4335] to-[#FBBC05]",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  href={item.href}
                  className={`p-4 rounded-full bg-gradient-to-r ${item.color} text-white shadow-lg hover:shadow-xl transform transition-all duration-300`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>

            <GradientButton
              onClick={downloadCV}
              className="mt-8"
              variant="primary"
            >
              <FileDown className="w-5 h-5" />
              <span className="relative z-10">View My Resume</span>
            </GradientButton>
          </motion.div>

          <Tilt
            className="hidden md:block"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={2000}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-full p-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark"
            >
              <div className="absolute inset-0 rounded-full animate-spin-slow bg-gradient-to-r from-primary-light via-primary to-primary-dark opacity-75" />
              <img
                src={`/assets/${images[currentIndex]}`}
                alt={`Slide ${currentIndex + 1}`}
                // src={pic1}
                // alt={"Profile"}
                className="w-[300px] h-[400px] md:w-[400px] md:h-[533px] lg:w-[500px] lg:h-[667px] object-cover rounded-full relative shadow-lg"
              />
            </motion.div>
          </Tilt>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-dark dark:text-primary-light"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </div>
  );
};

export default Hero;
