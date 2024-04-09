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
                <h2 className="color-title">Fish and chips</h2>
                <p className="color-text">
                  Un plat emblématique de la cuisine britannique, composé de
                  filets de poisson blanc panés et frits, accompagnés de frites
                  épaisses.
                </p>
              </div>
              <span className="price-maindish"> 11,00 €</span>
            </li>
            <li className="left-menus">
              <div className="list-content">
                <h2 className="color-title">Risotto</h2>
                <p className="color-text">
                  Un riz italien crémeux cuit à la perfection dans un bouillon
                  aromatisé. Agrémenté de champignons sautés, de parmesan râpé
                  et de notes subtiles de vin blanc, chaque fourchette vous
                  emmène en voyage à travers les rues pavées de l'Italie.
                </p>
              </div>
              <span className="price"> 12,90 €</span>
            </li>

            <li className="left-menus">
              <div className="list-content">
                <h2 className="color-title">
                  Raviolis à la Ricotta et aux Épinards
                </h2>
                <p className="color-text">
                  Des raviolis frais farcis d'un mélange de ricotta crémeuse et
                  d'épinards frais, servis avec une sauce tomate maison ou une
                  sauce à la crème parfumée à la sauge.
                </p>
              </div>
              <span className="price"> 15,00 €</span>
            </li>
            <li className="left-menus">
              <div className="list-content">
                <h2 className="color-title">Poulet au citron</h2>
                <p className="color-text">
                  Des morceaux de poulet tendres et juteux marinés dans une
                  sauce au citron et aux herbes, puis cuits au four ou grillés.
                  Servi avec une garniture de légumes de saison et de riz.
                </p>
              </div>
              <span className="price"> 17,00 €</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Maindish;
