import Banner from '../components/accueil/Banner';
import PopularDish from '../components/PopularDish';
import React from 'react';
import Slider from '../components/Slider';
import { HashLink as Link } from 'react-router-hash-link';
import Tobook from '../components/Tobook';
import ContactForm from '../components/ContactForm';

const Accueil = () => {
  return (
    <>
      <Banner />
      <PopularDish />
      <Tobook />
      <Link />
      <Slider />
      <ContactForm/>
    </>
  );
};

export default Accueil;
