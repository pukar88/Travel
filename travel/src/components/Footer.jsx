import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMountain, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <FaMountain className="footer-logo-icon" />
              <span className="footer-logo-text">tripNext</span>
            </div>
            <p className="footer-description">
              Discover the breathtaking beauty of Nepal with tripNext. From the majestic Himalayas to serene lakes, we create unforgettable travel experiences tailored just for you.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/destinations" className="footer-link">Destinations</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="footer-section">
            <h3 className="footer-title">Popular Destinations</h3>
            <ul className="footer-links">
              <li>
                <Link to="/destinations" className="footer-link">Everest Base Camp</Link>
              </li>
              <li>
                <Link to="/destinations" className="footer-link">Pokhara</Link>
              </li>
              <li>
                <Link to="/destinations" className="footer-link">Kathmandu Valley</Link>
              </li>
              <li>
                <Link to="/destinations" className="footer-link">Annapurna Circuit</Link>
              </li>
              <li>
                <Link to="/destinations" className="footer-link">Chitwan National Park</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Thamel, Kathmandu, Nepal</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+977-1-4441234</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@tripnext.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} tripNext. All rights reserved.
            </p>
            <p className="made-with-love">
              Made with <FaHeart className="heart-icon" /> for travelers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;