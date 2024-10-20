// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 border-b border-gray-200 mb-6">
      <h1 className="text-xl font-semibold">Welcome to my Portfolio</h1>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded">Download Resume</button>
    </header>
  );
};

export default Header;
