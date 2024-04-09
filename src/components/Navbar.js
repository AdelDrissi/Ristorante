import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importez Link à la place de NavLink
import { useState } from 'react';

const Navbar = () => {
  // States
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Comportement
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Render
  return (
    <section className="navbar">
      <div className="navbar-content">
        <Link className="food" to="/">
          <p className="name">Ristorante</p>
        </Link>
        <div
          className={`anchorLinks ${
            isMenuOpen ? 'anchorLinks--open AppearLink' : ''
          }`}
        >
          <ul className="anchorLinks__list">
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                {' '}
                {/* Utilisez Link au lieu de NavLink */}
                Accueil
              </Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/Menu" onClick={() => setIsMenuOpen(false)}>
                {' '}
                {/* Utilisez Link au lieu de NavLink */}
                Menus
              </Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/Reservation" onClick={() => setIsMenuOpen(false)}>
                {' '}
                {/* Utilisez Link au lieu de NavLink */}
                Reservation
              </Link>
            </li>
          </ul>
        </div>
        <div className="IconResponsive">
          <FontAwesomeIcon
            icon={faBars}
            className="NavbarIcons"
            onClick={toggleMenu}
            aria-label="menu de navigation"
          />
        </div>
      </div>
    </section>
  );
};
export default Navbar;
