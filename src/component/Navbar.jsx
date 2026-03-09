import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">Portfolio</Link>

        <div className="hidden md:flex space-x-8 text-gray-300">
          <Link to="/" className="hover:text-blue-500 transition">Accueil</Link>
          <Link to="/about" className="hover:text-blue-500 transition">À propos</Link>
          <Link to="/projects" className="hover:text-blue-500 transition">Projets</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
