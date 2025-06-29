import '../styles/Packages.css';
import React, { useRef } from 'react';
import { MapPin, Calendar, Star, Plane } from 'lucide-react';

const PackagesGallery = () => {
  const scrollContainerRef = useRef(null);

  // Updated package data with proper gradients and icons
  const packages = [
    {
      id: 1,
      title: "Hajj Package 2025", // Orange Hajj Package
      destination: "Makkah & Madinah",
      duration: "21 Days",
      price: "218,000",
      originalPrice: "250,000",
      rating: 4.9,
      reviews: 178,
      departure: "MULTAN - JEDDAH | JEDDAH - MULTAN", // Direct route info
      features: ["Visa", "Flight Tickets", "Transport", "Accommodation", "Ziyarat"],
      gradientClass: "gradient-orange",
      icon: "🕋" // Kaaba icon for Makkah
    },
    {
      id: 2,
      title: "Umrah Package 2025", // Purple Umrah Package
      destination: "Makkah & Madinah",
      duration: "21 Days",
      price: "218,000",
      originalPrice: "250,000",
      rating: 4.8,
      reviews: 156,
      departure: "MULTAN - JEDDAH | JEDDAH - MULTAN",
      features: ["Visa", "Flight Tickets", "Transport", "Accommodation", "Ziyarat"],
      gradientClass: "gradient-purple",
      icon: "🕌" // Mosque icon for Madina
    },
    {
      id: 3,
      title: "Umrah Package", // Gold Umrah Package
      destination: "Makkah & Madinah",
      duration: "14 Days",
      price: "199,999",
      originalPrice: "230,000",
      rating: 4.7,
      reviews: 134,
      departure: "ISB - JED | MED - ISB", // Route via PIA
      features: ["Visa", "Flight Tickets", "Transport", "Accommodation"],
      gradientClass: "gradient-blue", // Using blue gradient
      icon: "🕋" // Kaaba icon
    },
    {
      id: 4,
      title: "Economy Umrah Package", // Teal Umrah Package with multiple options
      destination: "Makkah & Madinah",
      duration: "14 Days",
      price: "194,999",
      originalPrice: "215,000",
      rating: 4.6,
      reviews: 142,
      departure: "KHI - JED - KHI", // Route via AirBlue
      features: [
        "7 Days: PKR 185,999", 
        "14 Days: PKR 194,999", 
        "21 Days: PKR 199,999", 
        "28 Days: PKR 215,000"
      ], // Showing duration options as features
      gradientClass: "gradient-cyan",
      icon: "🕌" // Mosque icon for Madina
    },
    {
      id: 5,
      title: "Economy Umrah Package", // Last Purple Economy Package
      destination: "Makkah & Madinah",
      duration: "14 Days", // Default duration
      price: "156,999", // Lowest price point
      originalPrice: "180,000",
      rating: 4.7,
      reviews: 165,
      departure: "Monthly Departures",
      features: [
        "7 Days: PKR 156,999",
        "14 Days: PKR 169,999",
        "21 Days: PKR 184,999"
      ], // Showing duration options as features
      gradientClass: "gradient-emerald", // Using emerald gradient
      icon: "🕋" // Kaaba icon
    }
  ];

  const handleBookPackage = (packageTitle) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(`Booking package: ${packageTitle}`);
  };

  return (
    <div className="packages-gallery">
      <div className="gallery-header">
        <h2>Our Travel Packages</h2>
      </div>
      
      <div className="gallery-container">
        <div 
          className="gallery-scroll"
          ref={scrollContainerRef}
        >
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <div className={`package-header ${pkg.gradientClass}`}>
                <div className="package-icon">{pkg.icon}</div>
                <div className="package-rating">
                  <Star size={16} className="star-icon" />
                  <span>{pkg.rating}</span>
                  <span className="reviews">({pkg.reviews})</span>
                </div>
              </div>
              
              <div className="package-content">
                <h3 className="package-title">{pkg.title}</h3>
                
                <div className="package-details">
                  <div className="detail-item">
                    <MapPin size={16} />
                    <span>{pkg.destination}</span>
                  </div>
                  <div className="detail-item">
                    <Calendar size={16} />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="detail-item">
                    <Plane size={16} />
                    <span>{pkg.departure}</span>
                  </div>
                </div>

                <div className="package-features">
                  {pkg.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="package-pricing">
                  <div className="price-section">
                    <span className="original-price">PKR {pkg.originalPrice}</span>
                    <span className="current-price">PKR {pkg.price}</span>
                  </div>
                  <div className="discount-badge">
                    Save {Math.round(((parseInt(pkg.originalPrice.replace(/,/g, '')) - parseInt(pkg.price.replace(/,/g, ''))) / parseInt(pkg.originalPrice.replace(/,/g, ''))) * 100)}%
                  </div>
                </div>

                <button 
                  className="book-button"
                  onClick={() => handleBookPackage(pkg.title)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesGallery;