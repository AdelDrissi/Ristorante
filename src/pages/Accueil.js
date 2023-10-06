import Banner from '../components/accueil/Banner';
import PopularDish from '../components/PopularDish';
import React from 'react';
import Slider from '../components/Slider';

const Accueil = () => {
  return (
    <>
      {' '}
      <Banner />
      <PopularDish/>
      <Slider/>
    </>
  );
};

export default Accueil;
