import { useState, useRef } from 'react';
import { Mail, User, Phone, MapPin, Building, CreditCard } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

export default function B2BSection() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    cnic: '',  // Replace cnicImage with cnic
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('');

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

    emailjs.sendForm(
      'service_bz08rlr',
      'template_izt96gi',
      form.current,
      'lbKoFi9Yq0FAtU6Hn'
    )
    .then(() => {
      setIsSubmitted(true);
      setFeedbackType('success');
      setFeedbackMessage('Your application has been submitted successfully!');
      setIsLoading(false);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFeedbackMessage('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          cnic: '',
          message: ''
        });
      }, 3000);
    })
    .catch((error) => {
      console.error(error);
      setIsLoading(false);
      setFeedbackType('error');
      setFeedbackMessage('Failed to submit application. Please try again.');
      
      setTimeout(() => {
        setFeedbackMessage('');
      }, 3000);
    });
  };

  return (
    <div className="b2b-container">
      {feedbackMessage && (
        <div className={`form-feedback ${feedbackType}`}>
          {feedbackMessage}
        </div>
      )}

      <div className="b2b-wrapper">
        {/* Form Column */}
        <div className="form-column">
          <div className="form-section">
            <div className="form-header">
              <h2>
                <Building className="icon" size={24} />
                B2B Partnership Application
              </h2>
              <p>Join our network of travel partners</p>
            </div>

            <form ref={form} onSubmit={handleSubmit}>
              <div className="input-group">
                <User className="input-icon" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Agency Name/ Person Name"
                  required
                />
              </div>

              <div className="input-group">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Business Email"
                  required
                />
              </div>

              <div className="input-group">
                <Phone className="input-icon" size={20} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Business Phone"
                  required
                />
              </div>

              <div className="input-group">
                <MapPin className="input-icon" size={20} />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Business Address"
                  required
                />
              </div>

              <div className="input-group">
                <Building className="input-icon" size={20} />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                />
              </div>

              <div className="input-group">
                <CreditCard className="input-icon" size={20} />
                <input
                  type="text"
                  name="cnic"
                  value={formData.cnic}
                  onChange={handleChange}
                  placeholder="Enter CNIC Number (e.g., 35202-1234567-1)"
                  pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
                  required
                />
              </div>

              <div className="input-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business and experience"
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
                {isLoading ? 'Submitting...' : isSubmitted ? '✓ Submitted!' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>

        {/* Info Column */}
        <div className="info-column">
          <div className="info-content">
            <img 
              src="b2b.jpg" 
              alt="B2B Partnership" 
              className="info-image" 
            />
            <div className="info-text">
              <h3>Why Partner With Us?</h3>
              <ul>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Competitive commission rates
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Access to exclusive deals
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Dedicated support team
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Real-time booking system
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Marketing support
                </li>
              </ul>

              <div className="contact-info">
                <h4>Have Questions?</h4>
                <p>
                  <i className="bi bi-telephone"></i>
                  +92 323 5682225
                </p>
                <p>
                  <i className="bi bi-envelope"></i>
                  osaidtraveltours@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}