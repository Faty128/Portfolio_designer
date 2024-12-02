import React from 'react';

const Projects = () => {
  // Tableau contenant les données de chaque projet
  const projects = [
    {
      id: 1,
      title: "Projet 1",
      description: "Description du projet 1, mettant en avant mes compétences en design graphique et UX/UI.",
      image: "https://collegesalette.com/wp-content/uploads/2021/04/MEP_Anaelle1_CecileA-1-scaled.jpg", // Remplacer par l'image de ton choix
    },
    {
      id: 2,
      title: "Projet 2",
      description: "Description du projet 2, mettant en avant mes compétences en design graphique et UX/UI.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRKywHyMQS4euyxKmTWwNWU0SmbykWFC1Gg&s", // Remplacer par l'image de ton choix
    },
    {
      id: 3,
      title: "Projet 3",
      description: "Description du projet 3, mettant en avant mes compétences en design graphique et UX/UI.",
      image: "https://graphiste.com/blog/wp-content/uploads/sites/4/2020/12/Texas-Beard-Co.-e1608294148983.png", // Remplacer par l'image de ton choix
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Mes Projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
