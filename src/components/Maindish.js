import React from 'react';
import Maindishback from '../assets/images/maindishback.jpg';

function Maindish() {
  return (
    <section className="Menus_section">
      <div className="Menus-box">
        <div className="container-menus-maindish ">
          <img src={Maindishback} className="back_menus_maindish" alt="" />
        </div>
        <div className="container-box">
          <div className="title-menu-section-maindish">
            <h1> Plats Principal</h1>
          </div>
          <ul className="menu-list-maindish">
            <li className="left-menus">
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
            <li className="left-menus">
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

            <li className="left-menus">
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
            <li className="left-menus">
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

export default Maindish;
