// Home.jsx
import React from 'react';
import '../styles/Pages.css';
import '../styles/Home.css';
import HeroSection from '../components/HeroSection';
import Services from '../pages/Services';
import ContactSection from '../pages/Contact';

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <Services />
      <ContactSection />

        <button>
        <a href="/enquire" className="btn btn-primary">Get Started</a>
        </button>
      <div className="features-section">    
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌟</div>
            <h3>Quality Service</h3>
            <p>We provide top-notch services tailored to your needs</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Delivery</h3>
            <p>Quick turnaround times to meet your deadlines</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💼</div>
            <h3>Professional Team</h3>
            <p>Experienced professionals dedicated to excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
