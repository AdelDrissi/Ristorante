import React, { useState } from 'react';
import Plat1 from '../assets/images/Plat1-min.jpg';
import Plat2 from '../assets/images/Plat2-min.jpg';
import Plat3 from '../assets/images/Plat3-min.jpg';
import Plat4 from '../assets/images/Plat4-min.jpg';
import Plat5 from '../assets/images/Plat5-min.jpg';

const Slider = () => {
  // Tableau des images
  const images = [Plat1, Plat2, Plat3, Plat4, Plat5];
  // Indice de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <div className="slides">
        {/* Affichage de l'image en fonction de l'indice courant */}
        <div className="slide">
          <img
            src={images[currentIndex]}
            alt={`Plat ${currentIndex + 1}`}
            className="slide-image"
          />
        </div>
      </div>

      {/* Boutons de navigation */}
      <button className="prev" onClick={prevImage}>
        ❮
      </button>
      <button className="next" onClick={nextImage}>
        ❯
      </button>

      {/* Bouton "En savoir plus" */}
      <div >
        <div className="btn_dish" to="/Menu">
          En savoir plus
        </div>
      </div>
    </div>
  );
};

export default Slider;
