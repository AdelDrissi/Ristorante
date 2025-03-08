import React from 'react';

function ContactForm() {
  return (
    <section className="contact">
      <h1 className="sectionContact">
        HEURE D'OUVERTURE DE 8H00 À 22H00, TOUS LES JOURS DE LA SEMAINE.
      </h1>

      <form name="contact" className="contact__form">
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name">Nom: </label>
        <input type="text" name="name" />

        <label htmlFor="email">Email: </label>
        <input type="email" name="email" />

        <label htmlFor="date">Date: </label>
        <input type="date" name="date" />

        <label htmlFor="telephone">Téléphone: </label>
        <input type="telephone" name="telephone" />

        <label htmlFor="message">Message:</label>
        <textarea name="message" placeholder="Saisissez ici..."></textarea>
      </form>

      {/* Span en bas du formulaire */}
      <div>
        <span className="btn-reservation">
          <div className='text-reservation'>Make Reservation</div>
        </span>
      </div>
    </section>
  );
}

export default ContactForm;
