import { useState, useRef } from 'react';
import { 
  FaEnvelope, 
  FaUser, 
  FaList, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaWhatsapp,
  FaCommentDots 
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

export default function ContactSection() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    category: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace these with your EmailJS credentials
    emailjs.sendForm(
      'service_voplacs',
      'template_dlh3hdo',
      form.current,
      'lbKoFi9Yq0FAtU6Hn'
    )
    .then((result) => {
      setIsSubmitted(true);
      setFeedbackType('success');
      setFeedbackMessage('Message sent successfully!');
      setIsLoading(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFeedbackMessage('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          category: '',
          message: ''
        });
      }, 3000);
    }, (error) => {
      console.log(error.text);
      setIsLoading(false);
      setFeedbackType('error');
      setFeedbackMessage('Failed to send message. Please try again.');
      
      // Clear error message after 3 seconds
      setTimeout(() => {
        setFeedbackMessage('');
      }, 3000);
    });
  };

  return (
    <div className="contact-container">
      {/* Feedback Message */}
      {feedbackMessage && (
        <div className={`form-feedback ${feedbackType}`}>
          {feedbackMessage}
        </div>
      )}

      <div className="contact-wrapper">
        <div className="form-section">
          <div className="form-header">
            <h2>
              <FaEnvelope className="icon" size={24} />
              Ask your query..
            </h2>
            <p>Get in touch with us for your travel needs.</p>
          </div>

          <form ref={form} onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="input-icon" size={20} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="input-group">
              <FaEnvelope className="input-icon" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </div>

            <div className="input-group">
              <FaPhone className="input-icon" size={20} />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                required
              />
            </div>

            <div className="input-group">
              <FaMapMarkerAlt className="input-icon" size={20} />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your city"
                required
              />
            </div>

            <div className="input-group">
              <FaList className="input-icon" size={20} />
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="">Select Service Category</option>
                <option value="hajj">Hajj Services</option>
                <option value="umrah">Umrah Services</option>
                <option value="ziarat">Ziarat Tours</option>
                <option value="domestic">Domestic Tours</option>
                <option value="international">International Tours</option>
                <option value="visa">Visa Services</option>
                <option value="ticket">Ticketing Services</option>
              </select>
            </div>

            <div className="input-group">
              <FaCommentDots className="input-icon" size={20} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="4"
                required
              />
            </div>

            <button 
              type="submit" 
              className={`submit-button ${isSubmitted ? 'success' : ''} ${
                feedbackType === 'error' ? 'error' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : isSubmitted ? '✓ Sent!' : 'SUBMIT'}
            </button>
          </form>
        </div>

        {/* Map and Contact Info Section */}
        <div className="info-section">
          <div className="map-container">
            <iframe
              title="Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3323.403162844688!2d73.0530542597875!3d33.59484242322143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1745669281887!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contact-buttons">
            <a 
              href="https://wa.me/+923701953024" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn whatsapp"
            >
              <FaWhatsapp size={20} />
              <span>WhatsApp</span>
            </a>

            <a 
              href="tel:+923701953024" 
              className="contact-btn call"
            >
              <FaPhone size={20} />
              <span>Call Us</span>
            </a>

            <a 
              href="mailto:osaidtraveltours@gmail.com" 
              className="contact-btn email"
            >
              <FaEnvelope size={20} />
              <span>Email</span>
            </a>
          </div>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <p>3rd floor Rizwam Arcade adamjee road <br />Saddar, Rawalpindi</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaClock size={24} />
              </div>
              <div>
                <p>Mon - Sat, 9:00-18:00</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhone size={24} />
              </div>
              <div>
                <p>Saddar, Rawalpindi Office</p>
                <small>03701953007</small><br />
                <small>03701953022</small><br />

                <p>Multan Office</p>
                <small>03701953014</small><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}