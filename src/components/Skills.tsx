import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        {
          name: "React",
          level: 90,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        {
          name: "TypeScript",
          level: 85,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        },
        {
          name: "Next.js",
          level: 80,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Tailwind CSS",
          level: 95,
          icon: "data:image/png;base64,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",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          level: 85,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          level: 80,
          // icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
          icon:"https://blog.amt.in/wp-content/uploads/2017/12/e16da876-c2fd-4eb8-ae72-4b193c534938-Edited.png",
        },
        {
          name: "MongoDB",
          level: 75,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "PostgreSQL",
          level: 70,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      category: "Tools & DevOps",
      items: [
        {
          name: "Git",
          level: 90,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        },
        {
          name: "Docker",
          level: 75,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
        },
        {
          name: "AWS",
          level: 70,
          icon: "data:image/png;base64,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",
        },
        {
          name: "CI/CD",
          level: 80,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-[#0a192f] dark:to-gray-900"
    >
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
                      transition={{ delay: groupIndex * 0.2 + index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                          />
                          <span className="text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: groupIndex * 0.2 + index * 0.1,
                          }}
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
