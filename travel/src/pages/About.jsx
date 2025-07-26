import React from 'react';
import { 
  FaUsers, 
  FaAward, 
  FaGlobeAsia, 
  FaHeart,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaCheckCircle,
  FaMountain,
  FaCamera,
  FaCompass
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    {
      icon: <FaUsers />,
      number: '500+',
      label: 'Happy Travelers',
      description: 'Satisfied customers who experienced Nepal with us'
    },
    {
      icon: <FaGlobeAsia />,
      number: '50+',
      label: 'Destinations',
      description: 'Unique locations across Nepal we cover'
    },
    {
      icon: <FaAward />,
      number: '10+',
      label: 'Years Experience',
      description: 'Decade of expertise in Nepal tourism'
    },
    {
      icon: <FaHeart />,
      number: '98%',
      label: 'Customer Satisfaction',
      description: 'Travelers who would recommend us'
    }
  ];


  const values = [
    {
      icon: <FaMountain />,
      title: 'Adventure First',
      description: 'We believe in creating authentic adventure experiences that connect you with Nepal\'s raw natural beauty.'
    },
    {
      icon: <FaHeart />,
      title: 'Sustainable Tourism',
      description: 'We\'re committed to responsible travel that benefits local communities and preserves Nepal\'s environment.'
    },
    {
      icon: <FaUsers />,
      title: 'Local Expertise',
      description: 'Our team of local guides and experts provide insider knowledge you won\'t find anywhere else.'
    },
    {
      icon: <FaCamera />,
      title: 'Memorable Moments',
      description: 'We focus on creating unforgettable experiences that will stay with you long after your journey ends.'
    }
  ];

  const achievements = [
    'Certified by Nepal Tourism Board',
    'Winner of Best Adventure Tour Operator 2023',
    'Member of Trekking Agencies Association of Nepal',
    'ISO 9001:2015 Quality Management Certified',
    'Eco-Tourism Excellence Award 2022',
    'Featured in National Geographic Travel'
  ];

  return (
    <div className="about page-transition">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <div className="about-hero-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Nepal Mountains" 
            className="about-hero-image"
          />
        </div>
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-hero-title fade-in">About tripNext</h1>
            <p className="about-hero-description fade-in">
              Your trusted partner for authentic Nepal adventures since 2014
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-description">
                At tripNext, we believe that travel should be transformative. Our mission is to provide 
                authentic, sustainable, and unforgettable experiences that showcase the incredible beauty, 
                rich culture, and warm hospitality of Nepal.
              </p>
              <p className="mission-description">
                We are passionate about connecting travelers with the real Nepal - from the towering peaks 
                of the Himalayas to the vibrant streets of Kathmandu, from ancient temples to pristine 
                wilderness areas. Every journey we craft is designed to create lasting memories while 
                supporting local communities.
              </p>
              <div className="mission-highlights">
                <div className="highlight">
                  <FaCompass className="highlight-icon" />
                  <span>Expert Local Guidance</span>
                </div>
                <div className="highlight">
                  <FaHeart className="highlight-icon" />
                  <span>Sustainable Practices</span>
                </div>
                <div className="highlight">
                  <FaMountain className="highlight-icon" />
                  <span>Authentic Experiences</span>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <img 
                src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Nepal Culture" 
                className="mission-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Impact in Numbers</h2>
            <p className="section-description">
              These numbers represent our commitment to excellence and the trust our travelers place in us
            </p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <p className="stat-description">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="section values bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Values</h2>
            <p className="section-description">
              The principles that guide everything we do at tripNext
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section achievements">
        <div className="container">
          <div className="achievements-content">
            <div className="achievements-text">
              <h2 className="section-title">Our Achievements</h2>
              <p className="achievements-description">
                Recognition and certifications that demonstrate our commitment to excellence 
                and responsible tourism in Nepal.
              </p>
              <div className="achievements-list">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <FaCheckCircle className="achievement-icon" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="achievements-image">
              <img 
                src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Awards and Certifications" 
                className="achievements-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section about-cta">
        <div className="container">
          <div className="about-cta-content text-center">
            <h2 className="about-cta-title">Ready to Explore Nepal with Us?</h2>
            <p className="about-cta-description">
              Join hundreds of satisfied travelers who have discovered Nepal's magic with tripNext. 
              Let us create your perfect Nepal adventure.
            </p>
            <div className="about-cta-actions">
              <a href="/contact" className="btn btn-primary btn-lg">
                Start Planning Your Trip
              </a>
              <a href="/destinations" className="btn btn-outline btn-lg">
                View Our Destinations
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;