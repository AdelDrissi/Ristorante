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
          <ul className="menu-list-dessert">
            <li className="right-menus">
              <div className="list-content-maindish">
                <h2 className="color-title">Tarte au citron meringuée</h2>
                <p className="color-text">
                  Une croûte sablée croustillante, une crème citronnée acidulée
                  et une meringue aérienne dorée, une combinaison parfaite de
                  saveurs et de textures pour ravir vos papilles
                </p>
              </div>
              <span className="price-maindish"> 8,00 €</span>
            </li>
            <li className="right-menus">
              <div className="list-content-maindish">
                <h2 className="color-title">Tiramisu</h2>
                <p className="color-text">
                  Des couches de biscuits imbibés de café, de mascarpone crémeux
                  et de cacao en poudre, une harmonie parfaite de saveurs
                  italiennes pour terminer votre repas en beauté.
                </p>
              </div>
              <span className="price-maindish"> 8,00 €</span>
            </li>
            <li className="right-menus">
              <div className="list-content">
                <h2 className="color-title">Profiteroles</h2>
                <p className="color-text">
                  Des choux légers garnis de crème pâtissière onctueuse et
                  nappés d'une sauce au chocolat fondant, une gourmandise à
                  savourer sans modération
                </p>
              </div>
              <span className="price"> 6,50 €</span>
            </li>

            <li className="right-menus">
              <div className="list-content">
                <h2 className="color-title">Panna cotta</h2>
                <p className="color-text">
                  Crème lactée, vanille subtile, coulis de fruits frais : une
                  douceur délicate et rafraîchissante."
                </p>
              </div>
              <span className="price"> 5,00 €</span>
            </li>
            <li className="right-menus">
              <div className="list-content">
                <h2 className="color-title">Macarons</h2>
                <p className="color-text">
                  Coques croquantes, ganache fondante : un petit plaisir sucré à
                  déguster avec délice.
                </p>
              </div>
              <span className="price"> 4,00 €</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Dessert;
