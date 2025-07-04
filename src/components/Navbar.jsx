// Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    // Close the menu when a section link is clicked
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      // Modify this line to avoid the hash
      window.location.href = `/`;
      
      // Store the section to scroll to after navigation
      sessionStorage.setItem('scrollToSection', sectionId);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Prevent the default hash change
      window.history.pushState("", document.title, window.location.pathname);
    }
  };

  // Effect to check if we need to scroll after navigation
  React.useEffect(() => {
    const sectionToScroll = sessionStorage.getItem('scrollToSection');
    if (sectionToScroll && location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(sectionToScroll);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
        // Clear the stored section
        sessionStorage.removeItem('scrollToSection');
      }, 100); // Small delay to ensure the page has loaded
    }
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left side - Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src="logo.png" onClick={() => scrollToSection('home')} alt="Company Logo" className="logo" />
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
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          </li>
          <li className='nav-item  '>
            <button onClick={() => scrollToSection('packages')} className="nav-link">Packages</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('reviews')} className="nav-link">Reviews</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
          </li>
          <li className="nav-item">
            <Link to="/b2b" className="nav-link" onClick={() => setIsOpen(false)}>B2B</Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link" onClick={() => setIsOpen(false)}>Blogs</Link>
          </li>
    
        </ul>

        {/* Right - Contact Us */}
        <div className="contact-button-container">
          <button 
            className="contact-link-button" 
            onClick={() => {
              scrollToSection('contact');
              setIsOpen(false); // Close mobile menu if open
            }}
          >
            Ask Your Query
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;