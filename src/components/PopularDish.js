import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import BackBlackMenus from '../assets/images/BackBlack.jpg';

const PopularDish = () => {
  return (
    <section className="sectionDish">
      <div className="btnContainer">
        <Link className="btn" to="/Menu">
          En savoir plus
        </Link>
      </div>
      <img src={BackBlackMenus} className="back_home" alt="" />
      <h2 className="sectionTitle" tabIndex="0">
        {' '}
        Most Popular Dish
      </h2>
      {/* <div className="btnContainer">
        <Link className="btn" to="/Menu#">
          En savoir plus
        </Link>
      </div> */}
    </section>
  );
};

export default PopularDish;
