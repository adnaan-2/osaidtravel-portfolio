// About.jsx
import React from 'react';
import '../styles/Pages.css';

const About = () => {
  const stats = [
    { number: "1000+", label: "VISA PROCESSED" },
    { number: "50+", label: "COUNTRIES COVERED" },
    { number: "20+", label: "AIRLINE PARTNERS" },
    { number: "1000+", label: "HAPPY CLIENTS" },
    { number: "15+", label: "YEARS EXPERIENCE" },
    { number: "2", label: "Functional Offices" },
    { number: "11+", label: "YEARS EXPERIENCE" },
    { number: "40+", label: "Staff Members" },
  ];

  return (
    <div className="page-container">    
      <div className="about-section">
        <h1>About Our Company</h1>
        <div className="about-content">
          <div className="about-image">
            <img src="about.jpg" alt="Our Team" />
          </div>
          <div className="about-text">
            <h2>Osaid Travel & Tours</h2>
            <p>
            Osaid Travel & Tours has been proudly serving clients since 2014, specializing in Hajj and Umrah services, along with a full range of domestic and international tourism, visa processing, and ticketing services for both domestic and international flights.
            Headquartered in <u>Rawalpindi</u> with a branch office in <u>Multan</u>. <br />We have built a trusted network through B2B joint ventures with travel agents and agencies across Pakistan. 
            We also maintain strong partnerships with hotels in the holy cities of Makkah and Madina, ensuring our pilgrims receive reliable, comfortable, 
            and spiritually enriching experiences. <br />
            
            Our mission is to deliver innovative solutions that help our clients achieve their goals and overcome challenges.
            We believe in building strong relationships based on trust, integrity, and mutual respect.
            </p>
          
          </div>
        </div>
        <div className="stats-section">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;