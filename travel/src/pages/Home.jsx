import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMountain, 
  FaHiking, 
  FaCamera, 
  FaMapMarkedAlt,
  FaStar,
  FaArrowRight,
  FaPlay
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const featuredDestinations = [
    {
      id: 1,
      name: 'Everest Base Camp',
      description: 'Experience the ultimate trekking adventure to the base of the world\'s highest peak.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '14 Days',
      difficulty: 'Challenging',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Pokhara Valley',
      description: 'Discover serene lakes, stunning mountain views, and peaceful boat rides.',
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '5 Days',
      difficulty: 'Easy',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Kathmandu Valley',
      description: 'Explore ancient temples, vibrant markets, and rich cultural heritage.',
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3 Days',
      difficulty: 'Easy',
      rating: 4.7
    },
    {
        id:4,
        name : 'Chitwan',
        description :'Explore lush jungles, spot rare wildlife, and experience Tharu culture in Chitwan’s vibrant landscapes—home to rhinos, elephants, and serene riverside sunsets.',
        image:'',
        duration : '2 days',
        difficulty: 'Easy',
        rating : 4.2
    }
  ];

  const services = [
    {
      icon: <FaMountain />,
      title: 'Trekking Adventures',
      description: 'Guided treks through the Himalayas with experienced local guides and porters.'
    },
    {
      icon: <FaCamera />,
      title: 'Photography Tours',
      description: 'Capture Nepal\'s stunning landscapes and vibrant culture with expert photographers.'
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Custom Itineraries',
      description: 'Personalized travel plans tailored to your interests, budget, and schedule.'
    },
    {
      icon: <FaHiking />,
      title: 'Cultural Experiences',
      description: 'Immerse yourself in local traditions, festivals, and authentic Nepali hospitality.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'United States',
      text: 'tripNext made our Everest Base Camp trek absolutely unforgettable. The guides were knowledgeable and the organization was flawless.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'David Chen',
      location: 'Australia',
      text: 'The cultural tour of Kathmandu was incredible. We experienced authentic Nepal beyond what any guidebook could offer.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      location: 'United Kingdom',
      text: 'Pokhara was magical! The sunrise over the Annapurna range was worth every moment of the journey.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <div className="home page-transition">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Nepal Mountains" 
            className="hero-image"
          />
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">
              Discover Nepal's
              <span className="hero-highlight"> Majestic Beauty</span>
            </h1>
            <p className="hero-description fade-in">
              From the towering peaks of the Himalayas to the serene lakes of Pokhara, 
              embark on an unforgettable journey through Nepal's most breathtaking destinations.
            </p>
            <div className="hero-actions fade-in">
              <Link to="/destinations" className="btn btn-primary btn-lg">
                <FaMountain />
                Explore Destinations
              </Link>
              
            </div>
            <div className="hero-stats fade-in">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Travelers</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Destinations</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section featured-destinations">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Featured Destinations</h2>
            <p className="section-description">
              Discover the most popular and breathtaking destinations Nepal has to offer
            </p>
          </div>
          <div className="destinations-grid">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="destination-card card">
                <div className="destination-image-container">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="destination-image"
                  />
                  <div className="destination-overlay">
                    <div className="destination-rating">
                      <FaStar />
                      <span>{destination.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{destination.name}</h3>
                  <p className="card-text">{destination.description}</p>
                  <div className="destination-meta">
                    <span className="duration">{destination.duration}</span>
                    <span className="difficulty">{destination.difficulty}</span>
                  </div>
                  <Link to="/destinations" className="btn btn-outline destination-btn">
                    Learn More
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              We offer comprehensive travel services to make your Nepal adventure seamless and memorable
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to Start Your Nepal Adventure?</h2>
            <p className="cta-description">
              Let us help you plan the perfect trip to Nepal. Contact us today for a personalized itinerary.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Plan Your Trip
              </Link>
              <Link to="/destinations" className="btn btn-secondary btn-lg">
                View All Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;