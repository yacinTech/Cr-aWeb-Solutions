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
            <li><Link className="nav-link" href="/">Home</Link></li>
            <li><Link className="nav-link" href="/about">About Us</Link></li>
            <li><a className="nav-link" href="/services">Our Services</a></li>
            <li><a className="nav-link" href="blog">Blog</a></li>
            <li><a className="nav-link" href="/contact">Contact Us</a></li>
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
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/about" onClick={toggleMenu}>About Us</a></li>
          <li><a href="/services" onClick={toggleMenu}>Our Services</a></li>
          <li><a href="/blog" onClick={toggleMenu}>Blog</a></li>
          <li><a href="/contact" onClick={toggleMenu}>Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
