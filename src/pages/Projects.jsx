import React from 'react';
import ProjectList from '../component/ProjectList'; // Importe le moteur d'affichage

const Projects = () => {
  return (
    <div className="py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Mes Réalisations
        </h1>

        {/* On affiche ici le composant qui contient la boucle .map() */}
        <ProjectList />
      </div>
    </div>
  );
};

export default Projects;