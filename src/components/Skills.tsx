// import React from "react";
// import { motion } from "framer-motion";

// const Skills = () => {
//   const skills = [
//     {
//       category: "Frontend Core",
//       items: [
//         {
//           name: "React.js",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
//         },
//         {
//           name: "Next.js",
//           icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
//         },
//         {
//           name: "Redux",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
//         },
//         {
//           name: "JavaScript",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
//         },
//         {
//           name: "TypeScript",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
//         },
//         {
//           name: "HTML5",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
//         },
//       ],
//     },
//     {
//       category: "Styling & UI",
//       items: [
//         {
//           name: "CSS3",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
//         },
//         {
//           name: "Tailwind CSS",
//           icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
//         },
//         {
//           name: "Bootstrap",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
//         },
//         {
//           name: "SASS",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
//         },
//         {
//           name: "Material UI",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
//         },
//         {
//           name: "HubSpot",
//           icon: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
//         },
//       ],
//     },
//     {
//       category: "Backend & APIs",
//       items: [
//         {
//           name: "Node.js",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
//         },
//         {
//           name: "Express.js",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
//         },
//         {
//           name: "Nest.js",
//           icon: "https://nestjs.com/img/logo-small.svg",
//         },
//         {
//           name: "Spring Boot",
//           icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
//         },
//         {
//           name: "REST APIs",
//           icon: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
//         },
//         {
//           name: "GraphQL",
//           icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
//         },
//       ],
//     },
//     {
//       category: "Databases",
//       items: [
//         {
//           name: "MongoDB",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
//         },
//         {
//           name: "PostgreSQL",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
//         },
//         {
//           name: "MySQL",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
//         },
//         {
//           name: "Redis",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
//         },
//         {
//           name: "Kafka",
//           icon: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
//         },
//         {
//           name: "Microservices",
//           icon: "https://www.vectorlogo.zone/logos/microservices/microservices-icon.svg",
//         },
//       ],
//     },
//     {
//       category: "Mobile & Cross-Platform",
//       items: [
//         {
//           name: "React Native",
//           icon: "https://reactnative.dev/img/header_logo.svg",
//         },
//         {
//           name: "Flutter",
//           icon: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
//         },
//         {
//           name: "Android Studio",
//           icon: "https://developer.android.com/static/studio/images/new-studio-logo-1.png",
//         },
//         {
//           name: "Ionic",
//           icon: "https://www.vectorlogo.zone/logos/ionicframework/ionicframework-icon.svg",
//         },
//         {
//           name: "Expo",
//           icon: "https://www.vectorlogo.zone/logos/expo/expo-icon.svg",
//         },
//         {
//           name: "PWA",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pwa/pwa-original.svg",
//         },
//       ],
//     },
//     {
//       category: "DevOps & Cloud",
//       items: [
//         {
//           name: "AWS",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
//         },
//         {
//           name: "Docker",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
//         },
//         {
//           name: "Firebase",
//           icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
//         },
//         {
//           name: "Git",
//           icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
//         },
//         {
//           name: "CI/CD",
//           icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
//         },
//         {
//           name: "Netlify",
//           icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
//         },
//       ],
//     },
//   ];

//   return (
//     <section
//       id="skills"
//       className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-[#0a192f]"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
//         >
//           Technical Skills
//         </motion.h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skills.map((skillGroup, groupIndex) => (
//             <motion.div
//               key={groupIndex}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: groupIndex * 0.2 }}
//               className="relative group"
//             >
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
//               <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl h-full">
//                 <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
//                   {skillGroup.category}
//                 </h3>
//                 <div className="grid grid-cols-3 gap-4">
//                   {skillGroup.items.map((skill, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: groupIndex * 0.1 + index * 0.1 }}
//                       whileHover={{ scale: 1.05 }}
//                       className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
//                     >
//                       <img
//                         src={skill.icon}
//                         alt={skill.name}
//                         className="w-10 h-10 mb-2 object-contain"
//                       />
//                       <span className="text-sm text-center text-gray-700 dark:text-gray-300">
//                         {skill.name}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        {
          name: "React.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        },
        {
          name: "Redux",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
      ],
    },
    {
      category: "Backend Development",
      items: [
        {
          name: "Node.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        },
        {
          name: "Nest.js",
          icon: "https://nestjs.com/img/logo-small.svg",
        },
        {
          name: "Spring Boot",
          icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
        },
      ],
    },
    {
      category: "Mobile Development",
      items: [
        {
          name: "React Native",
          icon: "https://reactnative.dev/img/header_logo.svg",
        },
        {
          name: "Flutter",
          icon: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
        }
      ],
    },
    {
      category: "Databases & APIs",
      items: [
        {
          name: "MongoDB",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
        },
        {
          name: "GraphQL",
          icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
        },
        {
          name: "Kafka",
          icon: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
        },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        {
          name: "AWS",
          icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
        },
        {
          name: "Oracle Cloud",
          icon: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg",
        },
        {
          name: "Docker",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        },
        {
          name: "Netlify",
          icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
        },
        {
          name: "Vercel",
          icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
        }
      ],
    },
    {
      category: "Tools & Workflow",
      items: [
        {
          name: "HubSpot",
          icon: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        },
        {
          name: "Git",
          icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        },
        {
          name: "CI/CD",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
        },
        {
          name: "VS Code",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
        },
        {
          name: "Android Studio",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-[#0a192f]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl h-full">
                <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {skillGroup.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: groupIndex * 0.1 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 mb-2 object-contain"
                      />
                      <span className="text-sm text-center text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
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
