import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Services.css';
import Packages from '../pages/Packages';

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200
    });
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  const sections = [
    {
      title: "Hajj Services",
      subtitle: "Guiding Your Sacred Journey with Care and Devotion.",
      description: "Osaid Travels offers comprehensive Hajj packages designed to provide peace of mind and spiritual focus. From the moment you register to your return home, our experienced team manages everything including flights, accommodations, local transportation, and rituals support. We aim to make this once-in-a-lifetime journey as smooth, safe, and spiritually rewarding as possible.",
      image: "hajj2.jpg",
      altText: "Hajj Service",
      features: [
        {
          icon: "bi-sliders",
          title: "Customized",
          description: "Tailored Hajj packages suited to your needs and preferences."
        },
        {
          icon: "bi-person-lines-fill",
          title: "Support",
          description: "24/7 guidance and ground assistance throughout your pilgrimage."
        }
      ],
      packages: [
        {
          icon: "bi-star-fill",
          name: "Gold Package",
          highlight: "Standard comfort"
        },
        {
          icon: "bi-gem",
          name: "Platinum Package",
          highlight: "Premium experience"
        },
        {
          icon: "bi-diamond-fill",
          name: "Diamond Package",
          highlight: "Luxury services"
        }
      ],
      imageOnLeft: true
    },
    {
      title: "Umrah Services",
      subtitle: "Your Blessed Umrah, Perfectly Planned.",
      description: "With deep respect for the spiritual importance of Umrah, we provide complete solutions—from visa processing and hotel bookings to guided services near Haram. Whether you're going alone or with family, Osaid Travels makes your pilgrimage comfortable, timely, and worry-free with attention to every sacred detail.",
      image: "umrah2.jpg",
      altText: "Umrah Service",
      features: [
        {
          icon: "bi-wallet2",
          title: "Affordable",
          description: "Flexible Umrah packages designed to fit all budgets and group sizes."
        },
        {
          icon: "bi-lightning-charge-fill",
          title: "Efficient",
          description: "Quick visa processing and streamlined travel arrangements."
        }
      ],
      packages: [
        {
          icon: "bi-house-door",
          name: "Economy Package",
          highlight: "Budget Friendly"
        },
        {
          icon: "bi-house-door-fill",
          name: "Economy Plus",
          highlight: "Comfort stay"
        },
        {
          icon: "bi-building-fill",
          name: "Premium Package",
          highlight: "3-4-5 star luxury hotels"
        }
      ],
      imageOnLeft: false
    },
    {
      title: "Ziyarat Services",
      subtitle: "Walk the Sacred Paths with Us.",
      description: "Visit the revered Islamic heritage sites across cities like Karbala, Najaf, Mashhad, and more. Our Ziyarat packages combine spiritual depth with expert planning, ensuring a meaningful and respectful journey. Let us handle the logistics while you focus on reflection and prayer.",
      image: "ziarrat2.jpg",
      altText: "Ziyarat Service",
      features: [
        {
          icon: "bi-stars",
          title: "Spiritual",
          description: "Guided religious tours designed for deep spiritual connection."
        },
        {
          icon: "bi-shield-lock-fill",
          title: "Safe",
          description: "Travel with full security measures and experienced staff."
        }
      ],
      packages: [
        {
          icon: "bi-building-fill-check", // Changed to represent Karbala shrine
          name: "Karbala Package",
          highlight: "shrine of Imam Hussain رَضِیَ اللہُ تَعَالٰی عَنْہ"
        },
        {
          icon: "bi-building-fill-up", // Changed to represent Najaf shrine
          name: "Najaf Package",
          highlight: "Shrine of Imam Hazrat Ali رَضِیَ اللہُ تَعَالٰی عَنْہ"
        },
        {
          icon: "bi-bank2", // Changed to represent historical sites
          name: "Baghdad Package",
          highlight: "shrine of Ghaus e Azam رَحْمَتُ اللہ عَلَیہ"
        }
      ],
      imageOnLeft: true
    },
    {
      title: "Domestic Tours",
      subtitle: "Discover the Beauty of Home with Ease.",
      description: "Explore the hidden gems and famous destinations across your own country with comfort and convenience. From mountains to beaches, heritage cities to adventure spots—our tours are designed to give you unforgettable experiences without going far. Great for families, couples, or solo travelers.",
      image: "domastic2.jpg",
      altText: "Domestic Tours",
      features: [
        {
          icon: "bi-arrow-repeat",
          title: "Flexible",
          description: "Trips customized according to your schedule and interests."
        },
        {
          icon: "bi-emoji-smile-fill",
          title: "Enjoyable",
          description: "Fun-filled itineraries packed with unforgettable experiences."
        }
      ],
      packages: [
        {
          icon: "bi-house",
          name: "Northern Areas",
          highlight: "Mountain destinations"
        },
        {
          icon: "bi-building",
          name: "Heritage Tour",
          highlight: "Historical sites"
        },
        {
          icon: "bi-water",
          name: "Coastal Package",
          highlight: "Beach getaways"
        }
      ],
      imageOnLeft: false
    },
    {
      title: "International Tours",
      subtitle: "Explore the World, Effortlessly with Osaid.",
      description: "Travel beyond borders with our all-inclusive international tour packages. Whether it's Europe, Asia, the Middle East or the Americas, we take care of everything—flights, hotels, sightseeing, and visa help—so you can enjoy every destination with peace of mind and excitement.",
      image: "international2.jpg",
      altText: "International Tours",
      features: [
        {
          icon: "bi-globe-americas",
          title: "Adventurous",
          description: "Experience the best destinations around the world with expert planning."
        },
        {
          icon: "bi-check2-circle",
          title: "Seamless",
          description: "All-inclusive packages that ensure a hassle-free travel experience."
        }
      ],
      packages: [
        {
          icon: "bi-globe-europe-africa",
          name: "European Tour",
          highlight: "Multiple countries"
        },
        {
          icon: "bi-globe-asia-australia",
          name: "Asian Tour",
          highlight: "Cultural exploration"
        },
        {
          icon: "bi-globe-americas",
          name: "Americas Tour",
          highlight: "Adventure package"
        }
      ],
      imageOnLeft: true
    },
    {
      title: "Visa Services",
      subtitle: "Your Gateway to the World Starts Here.",
      description: "Our visa experts provide fast, accurate, and up-to-date processing services for tourist, business, and pilgrimage visas to all major countries. We guide you through each step, ensuring correct documentation and improving approval chances.",
      image: "visa.jpg",
      altText: "Visa Services",
      features: [
        {
          icon: "bi-file-earmark-check-fill",
          title: "Reliable",
          description: "Expert visa processing ensuring high approval rates."
        },
        {
          icon: "bi-speedometer",
          title: "Fast",
          description: "Quick and efficient handling of all visa applications."
        }
      ],
      packages: [
        {
          icon: "bi-person-badge",
          name: "Tourist Visa",
          highlight: "For travel & leisure"
        },
        {
          icon: "bi-briefcase",
          name: "Business Visa",
          highlight: "For corporate travel"
        },
        {
          icon: "bi-mortarboard",
          name: "Student Visa",
          highlight: "For education abroad"
        }
      ],
      imageOnLeft: false
    },
    {
      title: "Ticketing Services",
      subtitle: "Booking Your Journey, Saving Your Time.",
      description: "Osaid Travels offers instant booking for flights, trains, and buses—both local and international. With access to the best rates and real-time updates, we ensure your journey starts on time and within budget. Travel smart with flexible options and friendly support.",
      image: "tickets.jpg",
      altText: "Ticketing Services",
      features: [
        {
          icon: "bi-calendar-check",
          title: "Convenient",
          description: "Instant booking with flexible rescheduling options."
        },
        {
          icon: "bi-currency-exchange",
          title: "Economical",
          description: "Best deals and discounts for flights, trains, and bus tickets."
        }
      ],
      packages: [
        {
          icon: "bi-airplane",
          name: "Economy Class",
          highlight: "Affordable travel"
        },
        {
          icon: "bi-airplane-fill",
          name: "Business Class",
          highlight: "Premium comfort"
        },
        {
          icon: "bi-star-fill",
          name: "First Class",
          highlight: "Luxury experience"
        }
      ],
      imageOnLeft: true
    }
  ];

  return (
    <div className="services-page">
      <h1>Services</h1>
      {sections.map((section, index) => (
        <section key={index} className="py-5">
          <div className="container">
            <div className="row align-items-stretch service-row">
              {/* Image Section - Always first on mobile */}
              <div className={`col-12 col-lg-6 mb-4 mb-lg-0 d-flex align-items-stretch order-1 ${section.imageOnLeft ? 'order-lg-1' : 'order-lg-2'}`} data-aos={section.imageOnLeft ? "fade-right" : "fade-left"} data-aos-delay="100" data-aos-duration="1000">
                <div className="service-image-container h-100 w-100">
                  <img 
                    src={section.image} 
                    alt={section.altText}
                    className="img-fluid rounded shadow h-100 w-100 object-fit-cover" 
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Content Section - Always second on mobile */}
              <div className={`col-12 col-lg-6 d-flex flex-column order-2 ${section.imageOnLeft ? 'order-lg-2' : 'order-lg-1'}`} data-aos={section.imageOnLeft ? "fade-left" : "fade-right"} data-aos-delay="200" data-aos-duration="1000">
                <div className="p-3 p-md-4 h-100 d-flex flex-column">
                  <h2 className="mb-3 fw-bold">{section.title}</h2>
                  <p className="lead fw-normal text-secondary mb-3">{section.subtitle}</p>
                  <p className="mb-4">{section.description}</p>
                  
                  {/* Package Boxes */}
                  <div className="packages-container mb-4">
                    <h3 className="h5 mb-3">Available Packages</h3>
                    <div className="row g-3">
                      {section.packages.map((pkg, pkgIndex) => (
                        <div key={pkgIndex} className="col-4">
                          <div className="package-box text-center p-3 rounded">
                            <i className={`${pkg.icon} fs-2 mb-2`}></i>
                            <h4 className="h6 mb-1">{pkg.name}</h4>
                            <p className="small text-muted mb-0">{pkg.highlight}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features Section */}
                  <div className="row mt-auto">
                    {section.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="col-12 col-md-6 mb-4">
                        <div className="d-flex">
                          <div className="me-3 text-primary">
                            <i className={`${feature.icon} fs-3`}></i>
                          </div>
                          <div>
                            <h3 className="h5 mb-2">{feature.title}</h3>
                            <p className="mb-0 text-secondary">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      ))}
      <Packages />
    </div>
  );
}