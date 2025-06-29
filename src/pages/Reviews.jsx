import { useState, useRef } from 'react';
import '../styles/Reviews.css';

const testimonials = [
  {
    id: 1,
    content: "My Hajj experience with Osaid Travel was truly blessed. The arrangements were perfect, from accommodation near Haram to the guidance during rituals. Their attention to detail made this sacred journey smooth and spiritually fulfilling.",
    author: "Umar Sajjad",
    position: "Northen Area Package",
    avatar: "r3.jpeg",
    rating: 5
  },
  {
    id: 2,
    content: "Excellent Umrah services! The hotel was just steps away from Masjid al-Haram, and their representatives were always available for support. The package was worth every penny.",
    author: "Nadeem Ashiq",
    position: "Ummrah Package",
    avatar: "r2.jpeg",
    rating: 5
  },
  {
    id: 3,
    content: "The Ziyarat tour to Karbala and Najaf was incredibly well-organized. The spiritual guides were knowledgeable, and the accommodation arrangements were comfortable. A memorable experience.",
    author: "Hussnain",
    position: "Ziyarat Tour",
    avatar: "r1.jpg",
    rating: 5
  },
  {
    id: 4,
    content: "Our family trip to northern areas was fantastic! The itinerary covered all major spots, hotels were comfortable, and the guide was excellent. Highly recommend their domestic tour packages.",
    author: "Faisal Manzoor",
    position: "Kashmir Tour",
    avatar: "r4.jpg",
    rating: 5
  },
  {
    id: 5,
    content: "The Europe tour package was amazing! Everything from visa assistance to local transportation was perfectly arranged. The hotels were great and the itinerary covered all major attractions.",
    author: "Adnan Khalid",
    position: "National Tour",
    avatar: "r5.jpg",
    rating: 5
  },
  {
    id: 6,
    content: "Quick and efficient visa processing for my UK trip. The team handled all documentation professionally and kept me updated throughout the process. Will definitely use their services again.",
    author: "Mirza Abubaker",
    position: "National Trip",
    avatar: "r6.jpg",
    rating: 5
  },
  {
    id: 7,
    content: "Got great deals on flight tickets through Osaid Travel. Their quick response and professional handling of last-minute changes was impressive. Reliable ticketing service!",
    author: "Omar Shah",
    position: "Ticketing Service",
    avatar: "r2.jpeg",
    rating: 5
  },
 
  {
    id: 8,
    content: "Exceptional service for our corporate travel needs. Their team is professional, responsive, and always finds the best deals. A reliable travel partner for our company.",
    author: "Adnan khalil",
    position: "Corporate Travel",
    avatar: "me2.jpeg",
    rating: 5
  }
];

const Reviews = () => {
  const containerRef = useRef(null);

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`}>
        ★
      </span>
    ));
  };

  // Create continuous chain by duplicating testimonials for seamless loop
  const continuousTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What our Clients Says</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available
          but the majority have suffered alteration in some form.
        </p>
      </div>

      <div className="testimonials-wrapper">
        <div 
          ref={containerRef}
          className="testimonials-container continuous"
        >
          {continuousTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="testimonial-card">
              <div className="testimonial-header">
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p className="position">{testimonial.position}</p>
                </div>
                <div className="author-avatar">
                  <img src={testimonial.avatar} alt={testimonial.author} />
                </div>
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;