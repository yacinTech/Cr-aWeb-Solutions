import './footer.css';
import logo from '../assets/images.jpeg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <h3>CréaWeb Solutions</h3>
          <p>Votre partenaire digital.</p>
        </div>

       
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

     
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email : contact@creaweb.com</p>
          <p>Téléphone : +212 6 00 00 00 00</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CréaWeb Solutions. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
