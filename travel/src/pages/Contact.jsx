import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaUser,
  FaComments
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    travelDates: '',
    groupSize: '',
    interests: []
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const [errors, setErrors] = useState({});

  const interests = [
    'Trekking & Hiking',
    'Cultural Tours',
    'Wildlife Safari',
    'Photography Tours',
    'Adventure Sports',
    'Spiritual Journey',
    'Family Vacation',
    'Honeymoon Package'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        travelDates: '',
        groupSize: '',
        interests: []
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ isSubmitting: false, isSubmitted: false, error: null });
      }, 5000);
      
    } catch {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      details: ['Thamel, Kathmandu', 'Nepal 44600'],
      link: 'https://maps.google.com'
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      details: ['+977-1-4441234', '+977-9841234567'],
      link: 'tel:+97714441234'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: ['info@tripnext.com', 'booking@tripnext.com'],
      link: 'mailto:info@tripnext.com'
    },
    {
      icon: <FaClock />,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
      link: null
    }
  ];

  return (
    <div className="contact page-transition">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-background">
          <div className="contact-hero-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Contact Us" 
            className="contact-hero-image"
          />
        </div>
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title fade-in">Get in Touch</h1>
            <p className="contact-hero-description fade-in">
              Ready to plan your Nepal adventure? We're here to help make your dream trip a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Contact Information</h2>
            <p className="section-description">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">
                  {info.icon}
                </div>
                <h3 className="contact-info-title">{info.title}</h3>
                <div className="contact-info-details">
                  {info.details.map((detail, i) => (
                    <p key={i} className="contact-info-detail">
                      {info.link && i === 0 ? (
                        <a href={info.link} className="contact-link">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section bg-light">
        <div className="container">
          <div className="contact-form-content">
            <div className="contact-form-text">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="contact-form-description">
                Fill out the form below and we'll get back to you within 24 hours. 
                The more details you provide, the better we can assist you.
              </p>
              
              <div className="contact-features">
                <div className="contact-feature">
                  <FaCheckCircle className="feature-icon" />
                  <span>Free consultation and trip planning</span>
                </div>
                <div className="contact-feature">
                  <FaCheckCircle className="feature-icon" />
                  <span>Customized itineraries based on your interests</span>
                </div>
                <div className="contact-feature">
                  <FaCheckCircle className="feature-icon" />
                  <span>Expert local guides and support</span>
                </div>
                <div className="contact-feature">
                  <FaCheckCircle className="feature-icon" />
                  <span>Best price guarantee</span>
                </div>
              </div>

              <div className="social-connect">
                <h3 className="social-title">Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="social-link">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social-link">
                    <FaInstagram />
                  </a>
                  <a href="#" className="social-link">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              {formStatus.isSubmitted && (
                <div className="form-success">
                  <FaCheckCircle className="success-icon" />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              )}

              {formStatus.error && (
                <div className="form-error">
                  <FaExclamationTriangle className="error-icon" />
                  <p>{formStatus.error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <FaUser />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <FaEnvelope />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      <FaPhone />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      <FaComments />
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`form-input ${errors.subject ? 'error' : ''}`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="travelDates" className="form-label">
                      <FaClock />
                      Preferred Travel Dates
                    </label>
                    <input
                      type="text"
                      id="travelDates"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g., March 2024 or Flexible"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="groupSize" className="form-label">
                      <FaUser />
                      Group Size
                    </label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select group size</option>
                      <option value="1">Solo Traveler</option>
                      <option value="2">2 People</option>
                      <option value="3-5">3-5 People</option>
                      <option value="6-10">6-10 People</option>
                      <option value="10+">10+ People</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Travel Interests</label>
                  <div className="interests-grid">
                    {interests.map((interest) => (
                      <label key={interest} className="interest-checkbox">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                        />
                        <span className="checkmark"></span>
                        {interest}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <FaComments />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Tell us about your dream Nepal trip..."
                    rows="5"
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg submit-btn"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;