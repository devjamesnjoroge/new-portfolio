// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366f1', // Tailwind Indigo-600
          dark: '#4f46e5', // Darker variation
        },
        background: {
          light: '#f3f4f6', // Light gray background
          dark: '#1f2937', // Dark gray background
        }
      }
    },
  },
  plugins: [],
};
