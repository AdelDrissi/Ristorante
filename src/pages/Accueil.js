import Banner from '../components/accueil/Banner';
import PopularDish from '../components/PopularDish';
import React from 'react';
import Slider from '../components/Slider';
import { HashLink as Link } from 'react-router-hash-link';
import Tobook from '../components/Tobook';

const Accueil = () => {
  return (
    <main>
      <Banner />
      <PopularDish />
      <Tobook />
      <Link />
      <Slider />
    </main>
  );
};

export default Accueil;
