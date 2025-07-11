import './contactForm.css';

function ContactForm() {
  return (
    <section className="contact-form-section">
      <h2 className="contact-title">Contactez-nous</h2>
      <p className="contact-description">
        Remplissez le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom complet</label>
          <input type="text" id="name" name="name" required placeholder="Votre nom" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Numéro de téléphone</label>
          <input type="tel" id="phone" name="phone" required placeholder="06 XX XX XX XX" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input type="email" id="email" name="email" required placeholder="votre@email.com" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Votre message</label>
          <textarea id="message" name="message" rows="5" required placeholder="Décrivez votre projet ou vos besoins..."></textarea>
        </div>

        <button type="submit" className="submit-button">Envoyer</button>
      </form>
    </section>
  );
}

export default ContactForm;
