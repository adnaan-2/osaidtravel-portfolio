import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Share2 } from 'lucide-react';
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
          <img src="/logo.png" alt="Osaid Travel" className="logo" />
        </div>
        
        <nav className="footer-links">
          <button onClick={() => scrollToSection('home')} className="footer-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="footer-link">About</button>
          <button onClick={() => scrollToSection('services')} className="footer-link">Services</button>
          <button onClick={() => scrollToSection('reviews')} className="footer-link">Reviews</button>
          <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
          <Link to="/blogs" className="footer-link">Blogs</Link>
          <Link to="/b2b" className="footer-link">B2B</Link>
        </nav>

        <div className="footer-social">
          <h3 className="social-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/osaidtravel" target="_blank" rel="noopener noreferrer">
              <Facebook size={40} />
            </a>
            <a href="https://instagram.com/osaidtravel" target="_blank" rel="noopener noreferrer">
              <Instagram size={40} />
            </a>
            <a href="https://linkedin.com/company/osaidtravel" target="_blank" rel="noopener noreferrer">
              <Linkedin size={40} />
            </a>
            <a href="https://threads.com/osaidtravel" target="_blank" rel="noopener noreferrer">
              <Share2 size={40} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Osaid Travel. All rights reserved.</p>
      </div>
    </footer>
  );
}
