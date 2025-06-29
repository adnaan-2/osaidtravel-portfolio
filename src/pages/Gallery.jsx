import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import '../styles/Gallery.css';


const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample gallery images
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
          </div>
        </div>
      )}
     
    </div>
  );
};

export default ImageGallery;
