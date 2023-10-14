import React from 'react';

function ContactForm() {
  return (
    
    <section className="contact">
      <form name="contact" className="contact__form">
        <input type="hidden" name="form-name" value="contact" />
        <label for="name">Nom: </label>
        <input type="text" name="name" />

        <label for="email">Email: </label>
        <input type="email" name="email" />

        <label for="message">Message:</label>
        <textarea name="message" placeholder='Saisissez ici ...'></textarea>

        <button type="submit">Envoyer </button>
      </form>
    </section>
  );
}

export default ContactForm;
