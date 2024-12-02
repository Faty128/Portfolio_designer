import React from 'react';

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-gray-800 text-white shadow-lg z-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <a href="#home" className="text-2xl font-bold text-white">Portfolio</a>
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-white hover:text-blue-500">À propos</a></li>
          <li><a href="#projects" className="text-white hover:text-blue-500">Projets</a></li>
          <li><a href="#skills" className="text-white hover:text-blue-500">Compétences</a></li>
          <li><a href="#contact" className="text-white hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
