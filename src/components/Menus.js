import React from 'react';
import BackMenus from '../assets/images/BackMenus.jpg';

function Menus() {
  return (
    <section className="banner">
        <div className='container'></div>
      <img src={BackMenus} className="img_home" alt="" />
      <h1 className="banner__dish" tabIndex="0">
      Our Menu 
      <h3>The Prenium food experience</h3>
      </h1>
    </section>
  );
}

export default Menus;
