// About.jsx
import React from 'react';
import '../styles/Pages.css';

const About = () => {
  const stats = [
    { number: "100K+", label: "VISA PROCESSED" },
    { number: "25+", label: "COUNTRIES COVERED" },
    { number: "20+", label: "AIRLINE PARTNERS" },
    { number: "150K+", label: "HAPPY CLIENTS" },
    { number: "10+", label: "YEARS EXPERIENCE" },
    { number: "2", label: "Functional Offices" },
    { number: "41", label: "Staff Members" },
  ];

  return (
    <div className="page-container">    
      <div className="about-section">
        <div className="about-header">
          <h1>About Our Company</h1>
          <div className="header-line"></div>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src="about.jpg" alt="Our Team" />
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>Trusted Since 2014</h3>
                <p>Your Dream Travel Partner</p>
              </div>
            </div>
          </div>
          <div className="about-text">
            <div className="text-content">
              <p>
                Since 2014, Osaid Travel & Tours has been a trusted name in Hajj and Umrah services, offering seamless visa processing, ticketing, and vibrant domestic and international travel experiences. Based in Rawalpindi with a branch in Multan, we've forged dynamic B2B partnerships with travel agents across Pakistan and secured exclusive hotel collaborations in Makkah and Madina for unforgettable pilgrimages.
              </p>
              <p>
                Our mission? To craft innovative, stress-free travel solutions with trust, integrity, and a passion for creating lasting memories.
              </p>
              
            </div>
            
          </div>
          
        </div>
        
        <div className="stats-section">
          <div className="stats-header">
            <h2>Our Achievements</h2>
          
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-content">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;