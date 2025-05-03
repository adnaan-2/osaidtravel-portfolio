// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import your CSS file for styling
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left side - Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src="logo.png" alt="Company Logo" className="logo" />
          </Link>
        </div>

        {/* Mobile menu hamburger button - explicitly styled */}
        <button className="hamburger-button" onClick={toggleMenu} aria-label="Menu">
          <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Middle - Navigation Links */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Service</Link>
          </li>
          <li className="nav-item">
            <Link to="/reviews" className="nav-link" onClick={() => setIsOpen(false)}>Reviews</Link>
          </li>
          <li className="nav-item">
            <Link to="/b2b" className="nav-link" onClick={() => setIsOpen(false)}>B2B</Link>
          </li>
        </ul>

        {/* Right - Contact Us */}
        <div className={isOpen ? 'contact-button active' : 'contact-button'}>
          <Link to="/contact" className="contact-link" onClick={() => setIsOpen(false)}>Ask Your Query</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;