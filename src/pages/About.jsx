// About.jsx
import React from 'react';
import '../styles/Pages.css';

const About = () => {
  return (
    <div className="page-container">    
      <div className="about-section">
        <h1>About Our Company</h1>
        <div className="about-content">
          <div className="about-image">
            <img src="/api/placeholder/400/300" alt="Our Team" />
          </div>
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2015, our company has been dedicated to providing exceptional services to our clients. 
              We started with a small team of passionate professionals and have grown to become a trusted name in the industry.
            </p>
            <p>
              Our mission is to deliver innovative solutions that help our clients achieve their goals and overcome challenges.
              We believe in building strong relationships based on trust, integrity, and mutual respect.
            </p>
            <h2>Our Values</h2>
            <ul>
              <li>Excellence in all we do</li>
              <li>Customer satisfaction</li>
              <li>Integrity and transparency</li>
              <li>Continuous improvement</li>
              <li>Teamwork and collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;