import React from 'react';

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
        Mes Projets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map(project => (
          <div
            key={project}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={`https://via.placeholder.com/300`}
              alt={`Projet ${project}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Projet {project}</h3>
              <p className="text-gray-600 mb-4">
                Description du projet {project}, mettant en avant mes compétences en design graphique et UX/UI.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
