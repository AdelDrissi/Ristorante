import React from 'react';

function ContactForm() {
  return (
    <section className="contact">
      <h1 className="sectionContact">
        HEURE D'OUVERTURE DE 8H00 À 22H00, TOUS LES JOURS DE LA SEMAINE.{' '}
      </h1>

      <form name="contact" className="contact__form">
        <input type="hidden" name="form-name" value="contact" />

        <label for="name">Nom: </label>
        <input type="text" name="name" />

        <label for="email">Email: </label>
        <input type="email" name="email" />

        <label for="date">Date: </label>
        <input type="date" name="date" />

        <label for="telephone">telephone: </label>
        <input type="telephone" name="telephone" />

        <label for="message">Message:</label>
        <textarea name="message" placeholder="Saisissez ici..."></textarea>
      </form>
      <span className="btn-reservation">
        <button>Make Reservation</button>
      </span>
    </section>
  );
}

export default ContactForm;
