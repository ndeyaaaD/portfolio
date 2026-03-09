import React from 'react';
import projects from "../assets/data/Projects";
const ProjectList = () => {
  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Mes Projets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`p-6 rounded-xl shadow-lg bg-gradient-to-br ${project.color} text-white transition-transform hover:scale-105`}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm opacity-90 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((skill, index) => (
                <span key={index} className="bg-white/20 px-2 py-1 rounded text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-between mt-auto">
              <a href={project.github} target="_blank" rel="noreferrer" className="underline font-semibold">GitHub</a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="underline font-semibold">Demo Live</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;