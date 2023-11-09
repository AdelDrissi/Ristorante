import React from 'react';
import BackMenus from '../assets/images/BackMenus.jpg';
import BackBlackMenus from '../assets/images/BackBlackMenus.jpg';
import MenuSectionOne from '../assets/images/MenuSectionOne.jpg';

function Appetizers() {
  return (
    <section className="banner">
      <img src={BackMenus} className="back_home" alt="" />
      <h1 className="banner__dish" tabIndex="0">
        Our Menu
        <h3 className="subtitle">The Prenium food experience</h3>
      </h1>

      <section className="Menus_section">
        <div className="container-menus ">
          <img src={BackBlackMenus} className="back_menus" alt="" />
          <img src={MenuSectionOne} className="back_section_menus" alt="" />
        </div>
        <div className="Menus-box">
          <div className="container-box">
            <div className="col-sm-8">
              <div className="title-menu-section">
                <h1> Apéritif</h1>
              </div>
              <ul className="menu-list-items">
                <li>
                  <div className="list-content">
                    <h2 className="color-title">Quesadilla</h2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ipsam velit quidem placeat, eligendi cupiditate illo a
                      blanditiis aliquid. Veritatis quod accusantium soluta
                      pariatur praesentium voluptate eum assumenda, provident
                      vel fugiat?
                    </p>
                  </div>
                  <span className="price"> 6,00 €</span>
                </li>

                <li>
                  <div className="list-content">
                    <h2 className="color-title">Quesadilla</h2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ipsam velit quidem placeat, eligendi cupiditate illo a
                      blanditiis aliquid. Veritatis quod accusantium soluta
                      pariatur praesentium voluptate eum assumenda, provident
                      vel fugiat?
                    </p>
                  </div>
                  <span className="price"> 5,50 €</span>
                </li>

                <li>
                  <div className="list-content">
                    <h2 className="color-title">Quesadilla</h2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ipsam velit quidem placeat, eligendi cupiditate illo a
                      blanditiis aliquid. Veritatis quod accusantium soluta
                      pariatur praesentium voluptate eum assumenda, provident
                      vel fugiat?
                    </p>
                  </div>
                  <span className="price"> 10,00 €</span>
                </li>

                <li>
                  <div className="list-content">
                    <h2 className="color-title">Quesadilla</h2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ipsam velit quidem placeat, eligendi cupiditate illo a
                      blanditiis aliquid. Veritatis quod accusantium soluta
                      pariatur praesentium voluptate eum assumenda, provident
                      vel fugiat?
                    </p>
                  </div>
                  <span className="price"> 3,90 €</span>
                </li>

                <li>
                  <div className="list-content">
                    <h2 className="color-title">Quesadilla</h2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ipsam velit quidem placeat, eligendi cupiditate illo a
                      blanditiis aliquid. Veritatis quod accusantium soluta
                      pariatur praesentium voluptate eum assumenda, provident
                      vel fugiat?
                    </p>
                  </div>
                  <span className="price"> 9,00 €</span>
                </li>
              </ul>


              
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Appetizers;
