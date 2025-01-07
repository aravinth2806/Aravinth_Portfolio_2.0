import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Experience = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Java Developer",
      " Mobile App Developer",
      " Spring Boot Specialist",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
    typeSpeed: 70,
  });

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#0a192f] dark:via-[#112240] dark:to-[#1a365d]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center relative"
      >
        {/* Animated background shapes */}
        <div className="absolute inset-0 -z-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen"
              style={{
                width: 300 + i * 100,
                height: 300 + i * 100,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: `radial-gradient(circle, rgba(109, 127, 209, 0.1) 0%, rgba(108, 143, 209, 0.05) 50%, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          I am a{" "}
          <motion.span
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              {text}
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-light/20 via-primary/20 to-primary-dark/20 rounded-lg -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.span>
          <Cursor cursorColor="rgb(109, 127, 209)" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about crafting exceptional digital experiences with clean
          code and innovative solutions.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Experience;
