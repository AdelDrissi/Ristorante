import BckReservation from '../assets/images/BckReservation-min.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';

const Tobook = () => {
  return (
    <section className="Reservation">
      <div className="container">
        <h1 className="titleReservation">Réservation</h1>
        <h2 className="open_hours">
          OPENING HOUR 8:00 AM - 10:00 PM, EVERY DAY ON WEEK.
        </h2>
        <img src={BckReservation} className="back_reservation" alt="" />
      </div>
      <div className="btnContainer">
        <Link className="btn" to="/Menu">
          En savoir plus
        </Link>
      </div>
    </section>
  );
};

export default Tobook;
