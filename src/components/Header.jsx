import React, { useState } from "react";
import './Header.css';
import logo from '../assets/images.jpeg';
import { Link } from "react-router-dom";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="header-wrapper">
      <nav className="navbar">
        <div className="navbar-container">
          <a className="logo-link" href="/">
            <img className="logo-img" src={logo} alt="logo" />
            
          </a>
          

          {/* قائمة الروابط في سطح المكتب */}
          <ul className="nav-links desktop">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About Us</Link></li>
            <li><a className="nav-link" to="/services">Our Services</a></li>
            <li><a className="nav-link" to="blog">Blog</a></li>
            <li><a className="nav-link" to="/contact">Contact Us</a></li>
          </ul>

          {/* زر القائمة في الموبايل */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </nav>

      {/* قائمة جانبية تظهر في الشاشات الصغيرة */}
      <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Our Services</Link></li>
          <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
