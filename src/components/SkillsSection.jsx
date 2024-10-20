// src/components/SkillsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skills = ['Java', 'React', 'Tailwind CSS', 'Python', 'AI/ML', 'Flutter'];

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 gap-4">
        {skills.map(skill => (
          <li key={skill} className="bg-indigo-50 dark:bg-gray-800 p-4 rounded shadow-sm text-center">{skill}</li>
        ))}
      </ul>
    </motion.section>
  );
};

export default SkillsSection;
