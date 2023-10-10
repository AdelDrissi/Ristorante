import React from 'react';
import Plat1 from '../assets/images/Plat1-min.jpg';
import Plat2 from '../assets/images/Plat2-min.jpg';
import Plat3 from '../assets/images/Plat3-min.jpg';
import Plat4 from '../assets/images/Plat4-min.jpg';
import Plat5 from '../assets/images/Plat5-min.jpg';

const Slider = () => {
  return (
    <div className="slider">
      <div className="slides">
        <div className="slide">
          <img src={Plat1} alt="" />
        </div>
        <div className="slide">
          <img src={Plat2} alt="" />
        </div>
        <div className="slide">
          <img src={Plat3} alt="" />
        </div>
        <div className="slide">
          <img src={Plat4} alt="" />
        </div>
        <div className="slide">
          <img src={Plat5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
