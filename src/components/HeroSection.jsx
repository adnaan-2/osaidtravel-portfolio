import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/Home.css'; // Import your CSS styles

const HeroSection = () => {
 
  const slides = [
    { image: 'hajj1.webp', headline: 'Embark on a Sacred Journey of Faith.', text: 'Experience the spiritual journey with our comprehensive Hajj packages Enjoy premium accommodations and transportation services' },
    { image: 'umrah1.webp', headline: 'Experience Spiritual Serenity with Umrah.', text: 'Visit the most revered sites in Islam with expert guidance Enjoy premium accommodations and transportation services' },
    { image: 'ziarrat1.webp', headline: 'Discover the Blessed Path of Holy Pilgrimage', text: 'Enjoy premium accommodations and transportation services Enjoy premium accommodations and transportation services' },
    { image: 'domastic1.webp', headline: 'Explore Pakistan\'s Hidden Gems.', text: 'Travel with like-minded believers in our group packages Enjoy premium accommodations and transportation services' },
    { image: 'international1.webp', headline: 'Adventure Awaits Beyond Borders.', text: 'Explore sacred sites worldwide with our experienced guides Enjoy premium accommodations and transportation services' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);

  // Touch state
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Touch handling
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleSlideChange('next');
    if (distance < -50) handleSlideChange('prev');
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Slide change handler with smoother transitions
  const handleSlideChange = useCallback((directionOrIndex) => {
    if (animating) return; // Prevent during animation
    setAnimating(true);

    setPreviousSlide(currentSlide);

    setTimeout(() => {
      if (directionOrIndex === 'next') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (directionOrIndex === 'prev') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (typeof directionOrIndex === 'number') {
        setCurrentSlide(directionOrIndex);
      }
      
      // Keep animating state a bit longer for smoother exit transition
      setTimeout(() => {
        setAnimating(false);
      }, 100);
      
    }, 100); // Animation duration
  }, [animating, currentSlide, slides.length]);

  // Auto rotation - Changed from 5000ms to 3000ms (3 seconds)
  useEffect(() => {
    if (!isHovered) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Set new timeout for 3 seconds
      timeoutRef.current = setTimeout(() => handleSlideChange('next'), 3000);
    }
    
    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, isHovered, handleSlideChange]);

  return (
    <div
      className="hero-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        const isPrevious = index === previousSlide;

        return (
          (isActive || isPrevious) && (
            <div
              key={index}
              className={`hero-slide 
                ${isActive ? 'active' : ''} 
                ${isPrevious ? 'previous' : ''} 
                ${animating ? 'animating' : ''}`}
            >
              <img src={slide.image} alt={slide.headline} className="slide-bg" />
              <div className="slide-overlay"></div>
              <div className="slide-content">
                <h1 className="slide-headline hero-color">{slide.headline}</h1>
                <p className="slide-text hero-color">{slide.text}</p>
              </div>
            </div>
          )
        );
      })}

      {/* Arrows */}
      <button
        onClick={() => handleSlideChange('prev')}
        className="nav-arrow nav-prev"
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        onClick={() => handleSlideChange('next')}
        className="nav-arrow nav-next"
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`slide-indicator ${currentSlide === index ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
