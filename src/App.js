// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import B2B from './pages/B2B';  
import Blogs from './pages/Blogs'; 

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false, // This makes animations repeat
      mirror: true, // This enables animations when scrolling up
      anchorPlacement: 'top-bottom' // Trigger animation when top of element hits bottom of viewport
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;