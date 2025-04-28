import { useState, useRef } from 'react';
import '../styles/Reviews.css'; // Assuming you have a CSS file for styling

const testimonials = [
  {
    id: 1,
    content: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    author: "Sabo Masties",
    position: "Founder @ Rolex",
    avatar: "me2.jpeg",
    rating: 5
  },
  {
    id: 2,
    content: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    author: "Musharof Chowdhury",
    position: "Founder @ Ayro UI",
    avatar: "me2.jpeg",
    rating: 5
  },
  {
    id: 3,
    content: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    author: "William Smith",
    position: "Founder @ Tronex",
    avatar: "me2.jpeg",
    rating: 5
  },
  {
    id: 4,
    content: "The service exceeded all our expectations. The team was responsive and delivered on time.",
    author: "Sarah Johnson",
    position: "CEO @ TechStar",
    avatar: "me2.jpeg",
    rating: 5
  },
  {
    id: 5,
    content: "We've seen tremendous results since implementing their solution. Highly recommended!",
    author: "Mark Davis",
    position: "CTO @ InnovateCorp",
    avatar: "me2.jpeg",
    rating: 5
  },
  {
    id: 6,
    content: "We've seen tremendous results since implementing their solution. Highly recommended!",
    author: "Mark Davis",
    position: "CTO @ InnovateCorp",
    avatar: "me2.jpeg",
    rating: 5
  },
  {
    id: 7,
    content: "We've seen tremendous results since implementing their solution. Highly recommended!",
    author: "Mark Davis",
    position: "CTO @ InnovateCorp",
    avatar: "me2.jpeg",
    rating: 5
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  // Function to handle next slide
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`}>
        ★
      </span>
    ));
  };

  // Get visible testimonials based on current index
  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * testimonialsPerPage;
    return testimonials.slice(startIndex, startIndex + testimonialsPerPage);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <h2>What our Clients Says</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available
          but the majority have suffered alteration in some form.
        </p>
      </div>

      <div 
        ref={containerRef}
        className={`testimonials-container ${isAnimating ? 'animating' : ''}`}
      >
        {getVisibleTestimonials().map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="rating">
              {renderStars(testimonial.rating)}
            </div>
            <p className="testimonial-content">{testimonial.content}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={testimonial.avatar} alt={testimonial.author} />
              </div>
              <div className="author-info">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-navigation">
        <button 
          className="nav-button prev" 
          onClick={prevSlide}
          aria-label="Previous testimonials"
        >
          ←
        </button>
        <button 
          className="nav-button next" 
          onClick={nextSlide}
          aria-label="Next testimonials"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Reviews;