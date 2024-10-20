// src/components/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="mb-10">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="bg-gray-100 p-5 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
