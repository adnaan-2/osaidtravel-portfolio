import { useRef } from 'react';
import '../styles/Reviews.css';

const testimonials = [
  {
    id: 1,
    content: "Alhamdulillah, our Hajj trip with Osaid Travel was perfect for my family. Our hotel was just a 5-minute walk from Haram which helped my elderly mother. The staff really understood what we needed and the group leader explained all the rituals clearly. Would definitely recommend them!",
    author: "Umar Sajjad",
    position: "Hajj Package",
    avatar: "r3.jpeg",
    rating: 5
  },
  {
    id: 2,
    content: "Just returned from Umrah last month. The hotel location was exactly as promised - very close to Masjid al-Haram. What I appreciated most was how their representative helped us with directions when we got lost in Makkah on the first day. Good value for what we paid.",
    author: "Nadeem Ashiq",
    position: "Ummrah Package",
    avatar: "r2.jpeg",
    rating: 5
  },
  {
    id: 3,
    content: "Was a bit nervous about booking a Ziyarat tour but Osaid Travel made it so easy. The guide knew all the historical details about Karbala and Najaf which made the experience meaningful. The hotel in Karbala had a few issues with hot water but they sorted it quickly.",
    author: "Hussnain",
    position: "Ziyarat Tour",
    avatar: "r1.jpg",
    rating: 5
  },
  {
    id: 4,
    content: "Took my kids to Kashmir last summer with Osaid's family package. The kids loved the jeep safari and the hotel had great views of the mountains. Our driver Imran was friendly and knew all the best photo spots that weren't crowded with tourists.",
    author: "Faisal Manzoor",
    position: "Kashmir Tour",
    avatar: "r4.jpg",
    rating: 5
  },
  {
    id: 5,
    content: "My wife and I took the 5-day Lahore-Islamabad-Murree tour package last month. The historical tour of Lahore Fort was excellent, and the guide knew so much about Mughal history. Enjoyed the Mall Road in Murree, though the weekend crowds were a bit much. Great way to explore our own country!",
    author: "Adnan Khalid",
    position: "National Tour",
    avatar: "r5.jpg",
    rating: 5
  },
  {
    id: 6,
    content: "Just finished a tour to Swat and Kalam with my family. The hotel arrangements in Kalam were better than expected with amazing views of the river. Our guide adjusted the itinerary when the weather turned bad one day, and we still managed to see all the main spots. The roads were rough in some areas but our driver handled it well.",
    author: "Mirza Abubaker",
    position: "National Trip",
    avatar: "r6.jpg",
    rating: 5
  },
  
  {
    id: 7,
    content: "Our company has been using Osaid for business travel for about 2 years now. They understand our budget constraints and always find good options. Their invoice system is organized which makes it easy for our accounts department. Reliable service overall.",
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
        <h2>What our Clients Say</h2>
        <p>
          Here's what travelers have experienced with our services.
          We pride ourselves on creating memorable journeys for all our clients.
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