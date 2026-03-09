import React from 'react';
import ProjectList from '../component/ProjectList';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="py-20 bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-12">Mes Projets</h1>

        <Link to="/dashboard" className="mb-8 inline-block text-blue-400 hover:underline">
          Voir le Dashboard
        </Link>

        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;
