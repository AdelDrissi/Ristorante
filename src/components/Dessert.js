import React from 'react';
import Dessertback from '../assets/images/Dessertback.jpg';

function Dessert() {
  return (
    <section className="Menus_section">
      <div className="Menus-box">
         <div className="container-menus-dessert ">
           <img src={Dessertback} className="back_menus_dessert" alt="" /> 
         </div>  
        <div className="container-box">
          <div className="title-menu-section-dessert">
            <h1> Dessert</h1>
          </div>
          <ul className="menu-list-maindish">
            <li className="right-menus">
              <div className="list-content-maindish">
                <h2 className="color-title">Quesadilla</h2>
                <p className="color-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam velit quidem placeat, eligendi cupiditate illo a
                  blanditiis aliquid. Veritatis quod accusantium soluta pariatur
                  praesentium voluptate eum assumenda, provident vel fugiat?
                </p>
              </div>
              <span className="price-maindish"> 6,00 €</span>
            </li>
            <li className="right-menus">
              <div className="list-content">
                <h2 className="color-title">Quesadilla</h2>
                <p className="color-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam velit quidem placeat, eligendi cupiditate illo a
                  blanditiis aliquid. Veritatis quod accusantium soluta pariatur
                  praesentium voluptate eum assumenda, provident vel fugiat?
                </p>
              </div>
              <span className="price"> 5,50 €</span>
            </li>

            <li className="right-menus">
              <div className="list-content">
                <h2 className="color-title">Quesadilla</h2>
                <p className="color-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam velit quidem placeat, eligendi cupiditate illo a
                  blanditiis aliquid. Veritatis quod accusantium soluta pariatur
                  praesentium voluptate eum assumenda, provident vel fugiat?
                </p>
              </div>
              <span className="price"> 10,00 €</span>
            </li>
            <li className="right-menus">
              <div className="list-content">
                <h2 className="color-title">Quesadilla</h2>
                <p className="color-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam velit quidem placeat, eligendi cupiditate illo a
                  blanditiis aliquid. Veritatis quod accusantium soluta pariatur
                  praesentium voluptate eum assumenda, provident vel fugiat?
                </p>
              </div>
              <span className="price"> 10,00 €</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Dessert;
