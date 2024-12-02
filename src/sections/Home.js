import React from 'react';
import Slider from 'react-slick';

const Home = () => {
  // Paramètres du carrousel (slick)
  const settings = {
    dots: true, // Affiche les indicateurs de pagination
    infinite: true, // Boucle infinie
    speed: 500, // Vitesse de transition
    slidesToShow: 1, // Nombre d'images à afficher à la fois
    slidesToScroll: 1, // Nombre d'images à faire défiler à la fois
    autoplay: true, // Carrousel automatique
    autoplaySpeed: 3000, // Vitesse du défilement automatique
  };

  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-indigo-800 text-white">
      <div className="text-center pt-16 py-4 space-y-2 mt-2">
        <h1 className="text-4xl font-bold">Bienvenue dans mon Portfolio</h1>
        <p className="mb-2 text-lg">Je suis un designer passionné par la création de projets uniques.</p>
      </div>

      {/* Carrousel d'images */}
      <div className="w-full max-w-4xl mt-4">
        <Slider {...settings}>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamhs-iSXFjHfUn_DjEFQFTCXvUcnJdprPZQ&s" alt="Projet 1" className="w-full h-[350px] rounded-lg" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzxFuU6EOq-k5ZPeiO5SfUI77xSkbPsFvJYA&s" alt="Projet 2" className="w-full h-[350px]   rounded-lg" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8qlFjbBAYelPwTbfdPpCkh4tHMP-IXqlTA&s" alt="Projet 3" className="w-full h-[350px]  rounded-lg" />
          </div>
        </Slider>
      </div>

      {/* Bouton pour voir les projets */}
      {/* <div className="mt-6">
        <a href="#projects" className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          Voir mes projets
        </a>
      </div> */}
    </section>
  );
};

export default Home;
