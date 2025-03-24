import React from 'react';
import { motion } from 'framer-motion';
import { Play, Award, Scroll, ExternalLink } from 'lucide-react';
import GradientButton from './common/GradientButton';
import nptel from '../../public/assets/nptel1.jpg';

const Certificates = () => {
    const certificates = [
        {
            title: "Oracle Certified Foundation Associate",
            issuer: "Oracle",
            date: "2024",
            image: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg",
            driveLink: "https://drive.google.com/file/d/11fkLB9DpViJSLyZUe1YF5jHiEdG4DhXN/view"
        },
        {
            title: "NPTEL Cloud Computing",
            issuer: "NPTEL",
            date: "2019",
            image: nptel,
            driveLink: "https://drive.google.com/file/d/1U48C2KamBveRPo4hm4RYnkUnM15xTRYy/view"
        },
    ];
    //handle click on view certificate
    const handleClick = (link: string) => {
        window.open(link, '_blank');
    };
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a192f] dark:to-[#112240] relative overflow-hidden">
            {/* Animated background shapes */}
            <div className="absolute inset-0 -z-10">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen"
                        style={{
                            width: Math.random() * 300 + 100,
                            height: Math.random() * 300 + 100,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: `radial-gradient(circle, rgba(109, 127, 209, 0.1) 0%, rgba(108, 143, 209, 0.05) 50%, transparent 70%)`,
                        }}
                        animate={{
                            x: [0, Math.random() * 50 - 25],
                            y: [0, Math.random() * 50 - 25],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent"
                >
                    Achievements & Certifications
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Award Video Section */}
                    <motion.div
                        className="relative rounded-2xl overflow-hidden shadow-2xl group"
                    >
                        <div className="aspect-video bg-gray-900 relative">
                            {/* Award Image/Video Placeholder */}
                            <img
                                src="/assets/Award.jpg"
                                alt="Award Ceremony"
                                className="w-full h-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                onClick={() => window.open('https://youtu.be/your-youtube-video-id', '_blank')}
                            />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative cursor-pointer"
                                    onClick={() => window.open('https://youtu.be/your-youtube-video-id', '_blank')}
                                >
                                    {/* Ripple Effect */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-primary-light to-primary-dark rounded-full animate-ping opacity-75" />
                                    <div className="relative bg-gradient-to-r from-primary-light to-primary-dark p-4 rounded-full">
                                        <Play className="w-8 h-8 text-white" onClick={() => window.open('https://youtu.be/your-youtube-video-id', '_blank')} />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Award Details Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="w-6 h-6 text-primary-light" />
                                    <h3 className="text-xl font-bold text-white">Recognition for outstanding contributions in technology innovation - 2024</h3>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <GradientButton
                                        onClick={() => handleClick("https://drive.google.com/file/d/1yi9VZTGNv489aiItoecnpz3ZCU3uJ_5R/view?usp=drive_link")}
                                        className="transition-transform hover:scale-105"
                                    >
                                        <span className="flex items-center gap-2">
                                            View Award
                                            <ExternalLink className="w-4 h-4" />
                                        </span>
                                    </GradientButton>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certificates Grid */}
                    <div className="space-y-6">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative"
                            >
                                {/* Animated border */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-light to-primary-dark rounded-xl opacity-75 blur group-hover:opacity-100 transition duration-300" />

                                <div className="relative bg-white dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl">
                                    <div className="flex items-center gap-6">
                                        <div className="relative">
                                            <motion.div
                                                className="w-16 h-16 rounded-xl overflow-hidden"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <img
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </motion.div>
                                            <motion.div
                                                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary-light to-primary-dark p-1.5 rounded-full"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                <Scroll className="w-4 h-4 text-white" />
                                            </motion.div>
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                                {cert.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {cert.issuer} - {cert.date}
                                            </p>
                                        </div>

                                        <GradientButton
                                            href={cert.driveLink}
                                            onClick={() => handleClick(cert.driveLink)}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        //   size="sm"
                                        >
                                            <span className="flex items-center gap-2">
                                                View Certificate
                                                <ExternalLink className="w-4 h-4" />
                                            </span>
                                        </GradientButton>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;