// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Sidebar = ({ toggleDarkMode, isDarkMode }) => {
  const [activeLink, setActiveLink] = useState('Home'); // Track the active link

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <aside className="fixed top-0 left-0 h-full w-full md:w-1/2 bg-gray-100 dark:bg-gray-900 p-12 flex flex-col justify-center items-center shadow-lg">
      {/* User Information */}
      <div className="w-full flex flex-col items-start justify-center space-y-8 px-4">
        <h2 className="text-4xl font-bold mb-4">James Njoroge</h2>
        <p className="text-md mb-6 text-gray-600 dark:text-gray-300">
          I am a Full-Stack Developer specializing in AI-powered solutions with a passion for mathematics and computer science.
        </p>

        {/* Navigation Links */}
        <nav className="w-full">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <motion.li
                key={item}
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className={`h-0.5 w-${activeLink === item ? '16' : '8'} bg-indigo-500 dark:bg-indigo-300 transition-all duration-300`}
                />
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`hover:text-indigo-500 dark:hover:text-indigo-300 ${activeLink === item ? 'text-indigo-500 dark:text-indigo-300 font-semibold' : ''}`}
                  onClick={() => setActiveLink(item)} // Set the active link on click
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Dark/Light Mode Toggle */}
      <motion.button
        onClick={toggleDarkMode}
        className="self-start mt-6 p-3 rounded-full bg-indigo-500 dark:bg-indigo-300 text-white shadow-lg"
        whileHover={{ scale: 1.2, rotate: 180 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {isDarkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-gray-800" />}
      </motion.button>
    </aside>
  );
};

export default Sidebar;
