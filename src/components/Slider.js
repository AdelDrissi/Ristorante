import React from 'react';

const Slider = () => {
  return (
    <div className="slider">
      <div className="slides">
        <div className="slide">
          <img src="Plat1.jpg" alt="" />
          <div className="dish-description">Soupe aux légumes</div>
        </div>
        <div className="slide">
          <img src="Plat2.jpg" alt="" />
          {/* <div className="dish-description"></div> */}
        </div>
        <div className="slide">
          <img src="Plat3.jpg" alt="" />
          {/* <div className="dish-description"></div> */}
        </div>
        <div className="slide">
          <img src="Plat4.jpg" alt="" />
          {/* <div className="dish-description"></div> */}
        </div>
        <div className="slide">
          <img src="Plat5.jpg" alt="" />
          {/* <div className="dish-description"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
