import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMountain } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <FaMountain className="logo-icon" />
            <span className="logo-text">tripNext</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              <li>
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/destinations" 
                  className={`nav-link ${isActive('/destinations') ? 'active' : ''}`}
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header-cta">
            <Link to="/contact" className="btn btn-primary">
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            <li>
              <Link 
                to="/" 
                className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/destinations" 
                className={`mobile-nav-link ${isActive('/destinations') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="btn btn-primary mobile-cta"
                onClick={closeMenu}
              >
                Plan Your Trip
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;