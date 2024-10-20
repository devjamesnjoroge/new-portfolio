// src/components/ProjectsSection.jsx
import React from 'react';

const projects = [
  {
    name: 'AI Procurement Fraud Detection Dashboard',
    description: 'An interactive dashboard to detect fraud in government procurement systems using AI.',
    link: '#',
  },
  {
    name: 'Flutter Mobile App',
    description: 'A mobile application developed with Flutter for seamless user experience.',
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-10">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 gap-6">
        {projects.map(project => (
          <div key={project.name} className="bg-white p-5 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-indigo-600 hover:underline">Learn more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
