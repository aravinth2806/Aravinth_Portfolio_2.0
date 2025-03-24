import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Experience = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "MERN Stack Specialist",
      "React Native Developer",
      "HubSpot Developer",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
    typeSpeed: 70,
  });

  return (
    <section className="h-[70vh] relative flex items-center justify-center bg-gradient-to-br from-white to-blue-100 dark:from-[#0a192f] dark:via-[#112240] dark:to-[#1a365d] overflow-hidden">
      {/* Animated floating balls */}
      <div className="absolute inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full shadow-lg"
            style={{
              width: `${Math.random() * 50 + 30}px`,
              height: `${Math.random() * 50 + 30}px`,
              background: `radial-gradient(circle at 30% 30%, 
                ${[
                  'rgba(59, 130, 246, 0.3)', // bright blue
                  'rgba(139, 92, 246, 0.3)', // bright purple
                  'rgba(236, 72, 153, 0.3)', // bright pink
                  'rgba(16, 185, 129, 0.3)',  // bright green
                ][Math.floor(Math.random() * 4)]},
                rgba(255, 255, 255, 0.1))`,
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, Math.random() * 200 - 100],
              x: [0, Math.random() * 200 - 100],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing lines */}
      <div className="absolute inset-0 -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[3px]"
            style={{
              background: `linear-gradient(90deg, 
                transparent,
                rgba(59, 130, 246, 0.3),
                rgba(139, 92, 246, 0.3),
                transparent
              )`,
              width: '300px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(2px)',
            }}
            animate={{
              x: [-300, 300],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content container with glass effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative px-6 py-8 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-gray-900/10 shadow-xl"
      >
        <div className="text-center space-y-6">
          <motion.h2
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            I am a{" "}
            <motion.span
              className="inline-block relative"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {text}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg -z-10"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.span>
            <Cursor cursorColor="rgb(139, 92, 246)" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-lg mx-auto leading-relaxed"
          >
            Passionate about crafting exceptional digital experiences with clean
            code and innovative solutions.
          </motion.p>
        </div>

        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-2xl"
          style={{
            background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15), transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Experience;
