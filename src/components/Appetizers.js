import React from 'react';
import BackMenus from '../assets/images/BackMenus.jpg';
import BackBlackMenus from '../assets/images/BackBlackMenus.jpg';
import MenuSectionOne from '../assets/images/MenuSectionOne.jpg';

function Appetizers() {
  return (
    <section className="banner">
      <img src={BackMenus} className="back_home_app" alt="" />
      <div className="banner__content">
        <h1 className="banner__dish" tabIndex="0">
          Our Menu
        </h1>
        <h3 className="subtitle">The Premium food experience</h3>
      </div>
      <section className="Menus_section">
        <div className="container-menus-dish ">
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
                <li >
                  <div className="list-content">
                    <h2 className="color-title">Olives marinées</h2>
                    <p>
                      Nos olives marinées, un choix classique pour commencer
                      votre repas en beauté. Des olives sélectionnées avec soin,
                      marinées dans de l'huile d'olive extra vierge, des herbes
                      aromatiques fraîches et des zestes d'agrumes.
                    </p>
                  </div>
                  <span className="price"> 4,00 €</span>
                </li>
                <li>
                  <div className="list-content">
                    <h2 className="color-title">Bruschettas</h2>
                    <p>
                      Nos bruschettas fraîches et parfumées, un délice simple
                      mais sophistiqué. Des tranches de pain grillées frottées à
                      l'ail, garnies de tomates juteuses, d'huile d'olive extra
                      vierge, de basilic frais et de copeaux de parmesan. Une
                      explosion de saveurs méditerranéennes à chaque bouchée.
                    </p>
                  </div>
                  <span className="price"> 5,50 €</span>
                </li>
                <li>
                  <div className="list-content">
                    <h2 className="color-title">Tapas</h2>
                    <p>
                      Nos tapas espagnoles, une explosion de saveurs venues
                      d'ailleurs. Des petites portions de délices
                      méditerranéens,une expérience authentique à partager entre
                      amis.
                    </p>
                  </div>
                  <span className="price"> 5,00 €</span>
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
