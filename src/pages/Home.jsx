import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4 text-center">
      <p className="text-blue-400 font-medium uppercase tracking-widest mb-4">Bienvenue sur mon portfolio</p>
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Bonjour, je suis <span className="text-blue-500">Ndeye Anna Diouf</span>, une développeuse web passionnée
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mb-10">
        Je crée des applications web modernes et performantes avec React et Tailwind CSS.
      </p>
      <div className="flex gap-4">
        <Link to="/projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition">
          Voir mes projets →
        </Link>
        <Link to="/contact" className="border border-gray-600 hover:border-white px-8 py-3 rounded-full font-medium transition">
          Me contacter
        </Link>
      </div>
    </section>
  );
};

export default Home;