import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'UX Research', icon: 'fas fa-search', description: 'Analyse des besoins utilisateurs pour concevoir des solutions adaptées', mastery: 85 },
    { name: 'Wireframing & Prototyping', icon: 'fas fa-sitemap', description: 'Création de wireframes et prototypes interactifs pour tester les interfaces', mastery: 90 },
    { name: 'UI Design', icon: 'fas fa-laptop', description: 'Conception d\'interfaces attrayantes et fonctionnelles', mastery: 85 },
    { name: 'Interaction Design', icon: 'fas fa-random', description: 'Création d\'animations et interactions fluides', mastery: 80 },
    { name: 'Responsive Design', icon: 'fas fa-desktop', description: 'Conception d\'interfaces adaptées aux différents appareils', mastery: 90 },
    { name: 'User Testing', icon: 'fas fa-vial', description: 'Tester les interfaces avec des utilisateurs réels pour ajuster la conception', mastery: 80 },
  ];

  return (
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
              <i className={`${skill.icon} text-4xl text-indigo-600 mb-4`}></i>
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
  );
};

export default Skills;
