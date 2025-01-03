import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "TypeScript", level: 85, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
        { name: "Next.js", level: 80, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", level: 95, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 85, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
        { name: "Express", level: 80, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
        { name: "MongoDB", level: 75, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", level: 70, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" }
      ]
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git", level: 90, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
        { name: "Docker", level: 75, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
        { name: "AWS", level: 70, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "CI/CD", level: 80, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-[#0a192f] dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.2 }}
              className="gradient-border group"
            >
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl h-full">
                <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
                  {skillGroup.category}
                </h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (groupIndex * 0.2) + (index * 0.1) }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                          />
                          <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (groupIndex * 0.2) + (index * 0.1) }}
                          className="absolute h-full bg-gradient-to-r from-primary-light to-primary-dark rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;