import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import '../styles/Gallery.css';

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [packageCurrentIndex, setPackageCurrentIndex] = useState(0);

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: "g1.jpeg",
      alt: "Northern Pakistan Mountains",
      title: "Hunza Valley Beauty"
    },
    {
      id: 2,
      src: "g2.jpeg",
      alt: "Kaaba during Hajj",
      title: "Sacred Journey"
    },
    {
      id: 3,
      src: "g3.jpeg",
      alt: "Dubai Skyline",
      title: "International Tours"
    },
    {
      id: 4,
      src: "g4.jpeg",
      alt: "Skardu Lake",
      title: "Pakistan's Natural Beauty"
    },
    {
      id: 5,
      src: "g5.jpeg",
      alt: "Turkey Cappadocia",
      title: "Cultural Destinations"
    },
    {
      id: 6,
      src: "g3.jpeg",
      alt: "Naran Kaghan",
      title: "Adventure Tours"
    }
  ];

  // Travel packages data
  const travelPackages = [
    {
      id: 1,
      image: "g1.jpeg",
      title: "12 Days Karakorum Himalaya Lahore tour",
      duration: "12 Days",
      description: "This tour is arguably one of the most picturesque and exhilarating experiences available globally travel along Indus river and enjoy sightseen of third mountain Karakorum Himalaya range.",
      price: "Starting from $1,200",
      features: ["Mountain Views", "Cultural Sites", "Adventure Activities"]
    },
    {
      id: 2,
      image: "g2.jpeg",
      title: "15 Day Pakistan Tour Explore North To South",
      duration: "15 Days",
      description: "The land of Pakistan is filled to the brim with sites waiting to be explored and adventures waiting to be had. With a culture so rich and diverse and a geographical environment so breathtakingly beautiful.",
      price: "Starting from $1,500",
      features: ["Complete Pakistan Tour", "Cultural Experience", "Natural Beauty"]
    },
    {
      id: 3,
      image: "g3.jpeg",
      title: "Buddhist Sites Temples Stupas Tour in Pakistan",
      duration: "10 Days",
      description: "Pakistan is Homeland for Buddhism, Buddhism has a long history in the Pakistan region. The great center of Buddhist learning at Taxila with its unique combination of Hellenistic and Oriental religious art.",
      price: "Starting from $900",
      features: ["Historical Sites", "Buddhist Heritage", "Cultural Learning"]
    },
    {
      id: 4,
      image: "g4.jpeg",
      title: "Chitral Kalash Valley Tour 10 Days",
      duration: "10 Days",
      description: "The Kalash valley and its people are known worldwide for their unique, yet less heard and seen, culture, religion, language, festivals, and their everyday lifestyle. The Valley is surrounded by Tirchmir mountain ranges.",
      price: "Starting from $1,100",
      features: ["Unique Culture", "Mountain Valley", "Festival Experience"]
    },
    {
      id: 5,
      image: "g5.jpeg",
      title: "Skardu Baltistan Adventure Tour",
      duration: "8 Days",
      description: "Explore the breathtaking landscapes of Skardu, home to some of the world's highest peaks including K2. Experience pristine lakes, glaciers, and traditional Balti culture.",
      price: "Starting from $800",
      features: ["Mountain Adventure", "Lake Views", "Glacier Experience"]
    },
    {
      id: 6,
      image: "g1.jpeg",
      title: "Swat Valley Paradise Tour",
      duration: "7 Days",
      description: "Discover the Switzerland of Pakistan with lush green valleys, crystal clear streams, and snow-capped mountains. Perfect for nature lovers and adventure seekers.",
      price: "Starting from $700",
      features: ["Green Valleys", "Nature Walks", "Mountain Scenery"]
    },
    {
      id: 7,
      image: "g2.jpeg",
      title: "Hunza Cherry Blossom Tour",
      duration: "6 Days",
      description: "Witness the magical cherry blossom season in Hunza Valley. Experience the pink and white flowers against the backdrop of snow-capped peaks.",
      price: "Starting from $650",
      features: ["Cherry Blossoms", "Cultural Sites", "Photography"]
    },
    {
      id: 8,
      image: "g3.jpeg",
      title: "Deosai Plains Safari Tour",
      duration: "5 Days",
      description: "Explore the Deosai National Park, known as the 'Land of Giants'. Experience the high-altitude plateau with unique wildlife and stunning landscapes.",
      price: "Starting from $600",
      features: ["Wildlife Safari", "High Altitude", "Unique Ecosystem"]
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoPlaying, galleryImages.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1);
  };

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
    setIsAutoPlaying(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAutoPlaying(true);
  };

  const modalPrevious = () => {
    setModalImageIndex(modalImageIndex === 0 ? galleryImages.length - 1 : modalImageIndex - 1);
  };

  const modalNext = () => {
    setModalImageIndex(modalImageIndex === galleryImages.length - 1 ? 0 : modalImageIndex + 1);
  };

  // Package navigation functions
  const packagesPerView = 2; // Show only 2 packages at a time
  const maxPackageIndex = Math.max(0, travelPackages.length - packagesPerView);

  const goToPackagePrevious = () => {
    setPackageCurrentIndex(Math.max(0, packageCurrentIndex - 1));
  };

  const goToPackageNext = () => {
    setPackageCurrentIndex(Math.min(maxPackageIndex, packageCurrentIndex + 1));
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>OUR <span className="highlight">GALLERY</span></h2>
        <p>Explore beautiful destinations through our travelers' experiences</p>
      </div>

      {/* Main Slider */}
      <div className="gallery-slider">
        <div className="slider-wrapper">
          <div 
            className="slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {galleryImages.map((image, index) => (
              <div key={image.id} className="slide">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  onClick={() => openModal(index)}
                />
                <div className="slide-overlay">
                  <h3>{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="nav-arrow nav-arrow-left" onClick={goToPrevious}>
            <ChevronLeft size={24} />
          </button>
          <button className="nav-arrow nav-arrow-right" onClick={goToNext}>
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="dots-container">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="thumbnail-grid">
        {galleryImages.map((image, index) => (
          <div 
            key={image.id} 
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* Travel Packages Section */}
      <div className="packages-section">
        <div className="packages-header">
          <h2>OUR <span className="highlight">TRAVEL PACKAGES</span></h2>
          <p>Discover amazing destinations with our carefully crafted tour packages</p>
        </div>

        <div className="packages-slider">
          {/* Package Navigation Arrows - MOVED OUTSIDE */}
          <button 
            className="package-nav-arrow package-nav-left" 
            onClick={goToPackagePrevious}
            disabled={packageCurrentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="package-nav-arrow package-nav-right" 
            onClick={goToPackageNext}
            disabled={packageCurrentIndex >= maxPackageIndex}
          >
            <ChevronRight size={24} />
          </button>

          <div className="packages-wrapper">
            <div 
              className="packages-track"
              style={{ transform: `translateX(-${packageCurrentIndex * (100 / packagesPerView)}%)` }}
            >
              {travelPackages.map((pkg) => (
                <div key={pkg.id} className="package-card">
                  <div className="package-image">
                    <img src={pkg.image} alt={pkg.title} />
                    <div className="package-duration">{pkg.duration}</div>
                  </div>
                  <div className="package-content">
                    <h3 className="package-title">{pkg.title}</h3>
                    <p className="package-description">{pkg.description}</p>
                    {/* <div className="package-features">
                      {pkg.features.map((feature, index) => (
                        <span key={index} className="feature-tag">{feature}</span>
                      ))}
                    </div> */}
                    <div className="package-footer">
                      <div className="package-price">{pkg.price}</div>
                      <button className="book-now-btn">BOOK NOW</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Package Dots Indicator */}
          <div className="package-dots-container">
            {Array.from({ length: maxPackageIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`package-dot ${index === packageCurrentIndex ? 'active' : ''}`}
                onClick={() => setPackageCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <img 
              src={galleryImages[modalImageIndex].src} 
              alt={galleryImages[modalImageIndex].alt}
              className="modal-image"
            />
            
            <button className="modal-arrow modal-arrow-left" onClick={modalPrevious}>
              <ChevronLeft size={30} />
            </button>
            <button className="modal-arrow modal-arrow-right" onClick={modalNext}>
              <ChevronRight size={30} />
            </button>
            
            <div className="modal-caption">
              <h3>{galleryImages[modalImageIndex].title}</h3>
              <p>{modalImageIndex + 1} / {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
