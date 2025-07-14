import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaShareAlt } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <img 
            src={`${process.env.PUBLIC_URL}/logo.png`} 
            onClick={() => scrollToSection('home')} alt="Company Logo" className="logo" />
          </Link>
        </div>
        
        <nav className="footer-links">
          <button onClick={() => scrollToSection('home')} className="footer-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="footer-link">About</button>
          <button onClick={() => scrollToSection('services')} className="footer-link">Services</button>
          <button onClick={() => scrollToSection('reviews')} className="footer-link">Reviews</button>
          <button onClick={() => scrollToSection('gallery')} className="footer-link">Gallery</button>
          <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
          <Link to="/blogs" className="footer-link">Blogs</Link>
          <Link to="/b2b" className="footer-link">B2B</Link>
        </nav>

        <div className="footer-social">
          <h3 className="social-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1B1QZ4FYLo/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={40} />
            </a>
            <a href="https://www.instagram.com/osaid_106travelandtour/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} />
            </a>
            <a href="https://www.tiktok.com/@osaidtravel?lang=en" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={40} />
            </a>
            <a href="https://threads.com/osaidtravel" target="_blank" rel="noopener noreferrer">
              <FaShareAlt size={40} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Osaid Travel. All rights reserved to the company.</p>
      </div>
    </footer>
  );
}

