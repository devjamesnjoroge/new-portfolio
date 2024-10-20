// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      className="flex flex-col justify-center items-start h-screen mb-10 md:pl-8" // Adjusted padding for larger screens
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-xl text-indigo-600 mb-2">Hello, I'm</h2>
      <h1 className="text-5xl font-bold mb-4">James Njoroge</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Full-Stack Developer | AI Enthusiast | Mathematics & Computer Science Student</p>
      <a href="#projects" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">See My Work</a>
    </motion.section>
  );
};

export default HeroSection;
