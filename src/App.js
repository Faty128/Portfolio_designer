import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const App = () => {
  const skills = [
    { name: 'UX Research', icon: 'fas fa-sitemap', description: 'Analyse des besoins utilisateurs pour concevoir des solutions adaptées', mastery: 85 },
    { name: 'Wireframing & Prototyping', icon: 'fas fa-sitemap', description: 'Création de wireframes et prototypes interactifs pour tester les interfaces', mastery: 90 },
    { name: 'UI Design', icon: 'fas fa-laptop', description: 'Conception d\'interfaces attrayantes et fonctionnelles', mastery: 85 },
    { name: 'Interaction Design', icon: 'fas fa-random', description: 'Création d\'animations et interactions fluides', mastery: 80 },
    { name: 'Responsive Design', icon: 'fas fa-desktop', description: 'Conception d\'interfaces adaptées aux différents appareils', mastery: 90 },
    { name: 'User Testing', icon: 'fas fa-vial', description: 'Tester les interfaces avec des utilisateurs réels pour ajuster la conception', mastery: 80 },
  ];

  const projects = [
    {
      id: 1,
      title: "Projet 1",
      description: "Description du projet 1, mettant en avant mes compétences en design graphique et UX/UI.",
      image: "https://collegesalette.com/wp-content/uploads/2021/04/MEP_Anaelle1_CecileA-1-scaled.jpg",
    },
    {
      id: 2,
      title: "Projet 2",
      description: "Description du projet 2, mettant en avant mes compétences en design graphique et UX/UI.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRKywHyMQS4euyxKmTWwNWU0SmbykWFC1Gg&s",
    },
    {
      id: 3,
      title: "Projet 3",
      description: "Description du projet 3, mettant en avant mes compétences en design graphique et UX/UI.",
      image: "https://graphiste.com/blog/wp-content/uploads/sites/4/2020/12/Texas-Beard-Co.-e1608294148983.png",
    },
  ];

  return (
    <div>
      {/* Navbar */}
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

      {/* Home Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-indigo-800 text-white">
        <div className="text-center pb-10 space-y-2">
          <h1 className="text-4xl font-bold">Bienvenue dans mon Portfolio</h1>
          <p className="text-lg">Je suis un designer passionné par la création de projets uniques.</p>
         
        </div>
        <div>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8qlFjbBAYelPwTbfdPpCkh4tHMP-IXqlTA&s"
            alt="Designer"
            className="rounded-lg w-1/1 h-80 w-full"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <div className="text-center md:text-left md:w-1/3">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">À propos de moi</h2>
              <p className="text-lg text-gray-700 mb-4">
                Je suis un designer passionné avec une expérience en design graphique et UX/UI, cherchant à créer des expériences mémorables et fonctionnelles pour les utilisateurs.
              </p>
              <div className="flex justify-center md:justify-start space-x-6 mt-8">
                <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-500">
                  Voir mes projets
                </a>
                <a href="#contact" className="px-6 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 rounded-full text-lg font-semibold hover:bg-indigo-600 hover:text-white">
                  Me contacter
                </a>
              </div>
            </div>
            <div className="w-1/3 flex justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIj4RK53xFD66PI8SwTkZ1BOey5McddM12g&s"
                alt="Designer"
                className="rounded-full shadow-lg w-80 h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Mes Projets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Mes Compétences UX/UI
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Découvrez mes compétences en recherche utilisateur, design d'interface, et plus encore.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <i className={`${skill.icon} text-4xl text-indigo-600 mb-4`}></i> {/* Correction ici */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-xs font-semibold inline-block py-1 uppercase">{skill.mastery}%</span>
                </div>
                <div className="flex mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${skill.mastery}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Contactez-moi</h2>
          <form className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 space-y-6">
            <input type="text" placeholder="Nom" className="w-full px-4 py-3 border rounded-md shadow-sm" required />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-md shadow-sm" required />
            <textarea placeholder="Message" className="w-full px-4 py-3 border rounded-md shadow-sm" rows="4" required></textarea>
            <button className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-md hover:bg-indigo-700">
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p>Suivez-moi sur les réseaux sociaux :</p>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-2xl hover:text-blue-500" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-2xl hover:text-blue-400" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-2xl hover:text-pink-500" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
