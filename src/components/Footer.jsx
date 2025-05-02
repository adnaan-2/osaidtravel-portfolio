import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="Osaid Travel" className="logo" />
        </div>
        
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <div className="footer-social">
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100066246022889" target="_blank" rel="noopener noreferrer">
              <Facebook size={40} />
            </a>
            <a href="https://www.threads.com/@osaid_106travelandtour" target="_blank" rel="noopener noreferrer">
              <Twitter size={40} />
            </a>
            <a href="https://www.instagram.com/osaid_106travelandtour/?hl=en" target="_blank" rel="noopener noreferrer">
              <Instagram size={40} />
            </a>
            <a href="https://www.linkedin.com/in/osaid-travel-7644a3341/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={40} />
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
