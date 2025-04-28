// Home.jsx
import React from 'react';
import '../styles/Pages.css';
import '../styles/Home.css';
import HeroSection from '../components/HeroSection';
import Services from '../pages/Services';
import ContactSection from '../pages/Contact';
import Reviews from '../pages/Reviews';
import About from '../pages/About'; 
const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <About />
      <Reviews />
      <Services />
      <ContactSection />
       

      
    </div>
  );
};

export default Home;
