import { NavLink } from 'react-router-dom';
import { useState, React } from 'react';
// import logo from '../assets/logo/logo2.png';
// import hamburgerMenu from '../assets/icons/more-M.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  //   console.log(isMenuOpen);
  // };

  return (
    <header className="navbar">
      {/* <div className="navbar__logo"> */}
        {/* <NavLink to="/">
          <img src={logo} alt="revenir à la page d'accueil"></img>
        </NavLink> */}
      {/* </div> */}
      <nav
        className={`navbar__container ${
          isMenuOpen ? 'navbar__container--open menuAppear' : ''
        }`}
      >
        <ul className="navbar__container__list ">
          <li>
            <NavLink
              to="/"
              className={'navlinks_title'}
              tabIndex="0"
              onClick={() => setIsMenuOpen(false)}
            >
              Ristorante
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={'navlinks'}
              tabIndex="0"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Menu"
              className={'navlinks'}
              tabIndex="0"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Reservation"
              className={'navlinks'}
              tabIndex="0"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservation
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div className="navbar__hamburgerMenu">
        {/* <img
          // src={hamburgerMenu}
          // alt="Ouvrir le Menu de navigation"
          // onClick={toggleMenu}
        ></img> */}
      </div>
    </header>
  );
};

export default Navbar;
