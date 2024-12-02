import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Colonne 1 : Texte et boutons */}
        <div className="text-center md:text-left md:w-1/3">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Je suis un designer passionné avec une expérience en design graphique et UX/UI, cherchant à créer des expériences mémorables et fonctionnelles pour les utilisateurs.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold transition duration-300 hover:bg-indigo-500"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 rounded-full text-lg font-semibold transition duration-300 hover:bg-indigo-600 hover:text-white"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Colonne 2 : Photo */}
        <div className="w-1/3 flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIj4RK53xFD66PI8SwTkZ1BOey5McddM12g&s" // Remplacez par l'URL de votre photo
            alt="Votre photo"
            className="rounded-full shadow-lg w-80 h-80 object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
