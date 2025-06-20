// Home.jsx
import React from 'react';
import '../styles/Pages.css';
import '../styles/Home.css';
import HeroSection from '../components/HeroSection';
import Services from '../pages/Services';
import ContactSection from '../pages/Contact';
import Reviews from '../pages/Reviews';
import About from '../pages/About'; 
import Gallery from '../pages/Gallery';
const Home = () => {
  return (
    <div className="home-container">
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="reviews">
        <Reviews />
      </section>
      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
