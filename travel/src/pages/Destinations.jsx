import React, { useState } from 'react';
import { 
  FaStar, 
  FaClock, 
  FaMapMarkerAlt, 
  FaHiking,
  FaCamera,
  FaMountain,
  FaTree,
  FaHome,
  FaWater,
  FaFilter,
  FaSearch,
  FaArrowRight
} from 'react-icons/fa';
import './Destinations.css';
import everestImg from '../photos/Everest.jpeg';
import chitwanImg from '../photos/Chitwan.jpeg';
import mustangImg from '../photos/Mustang.jpeg';
import bandipurImg from '../photos/Bandipur.jpeg';
import kathmanduImg from '../photos/Kathmandu.jpeg';
import pokharaImg from '../photos/Pokhara.jpeg';
import lumbiniImg from '../photos/Lumbini.jpeg';


const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const destinations = [
    {
      id: 1,
      name: 'Everest Base Camp',
      category: 'trekking',
      location: 'Khumbu Region',
      description: 'Trek to the base of the world\'s highest peak through stunning Sherpa villages and breathtaking mountain landscapes.',
      image: everestImg,
      duration: '14 Days',
      difficulty: 'Challenging',
      rating: 4.9,
      price: 'Rs.30,000',
      highlights: ['Mount Everest Views', 'Sherpa Culture', 'Namche Bazaar', 'Tengboche Monastery'],
      bestTime: 'March-May, September-November'
    },
    {
      id: 2,
      name: 'Pokhara Valley',
      category: 'lakes',
      location: 'Gandaki Province',
      description: 'Experience serene lakes, stunning mountain reflections, and peaceful boat rides in Nepal\'s adventure capital.',
      image: pokharaImg,
      duration: '5 Days',
      difficulty: 'Easy',
      rating: 4.8,
      price: 'Rs7,500',
      highlights: ['Phewa Lake', 'Annapurna Views', 'Paragliding', 'World Peace Pagoda'],
      bestTime: 'October-April'
    },
    {
      id: 3,
      name: 'Kathmandu Valley',
      category: 'cultural',
      location: 'Bagmati Province',
      description: 'Explore ancient temples, vibrant markets, and UNESCO World Heritage sites in Nepal\'s cultural heart.',
      image: kathmanduImg,
      duration: '3 Days',
      difficulty: 'Easy',
      rating: 4.7,
      price: 'Rs.10,000',
      highlights: ['Durbar Squares', 'Swayambhunath', 'Boudhanath', 'Pashupatinath'],
      bestTime: 'October-March'
    },
    {
      id: 4,
      name: 'Annapurna Circuit',
      category: 'trekking',
      location: 'Annapurna Region',
      description: 'Complete the classic circuit trek through diverse landscapes, from subtropical forests to high alpine terrain.',
      image: mustangImg,
      duration: '16 Days',
      difficulty: 'Moderate',
      rating: 4.8,
      price: 'RS 10,999',
      highlights: ['Thorong La Pass', 'Muktinath Temple', 'Manang Valley', 'Diverse Landscapes'],
      bestTime: 'March-May, September-November'
    },
    {
      id: 5,
      name: 'Chitwan National Park',
      category: 'wildlife',
      location: 'Chitwan District',
      description: 'Experience thrilling wildlife safaris in Nepal\'s premier national park, where majestic Bengal tigers roam freely alongside one-horned rhinos in pristine jungle habitat.',
      image: chitwanImg,
      duration: '4 Days',
      difficulty: 'Easy',
      rating: 4.8,
      price: 'Rs.8,500',
      highlights: ['Bengal Tiger Safari', 'One-horned Rhino Spotting', 'Elephant Bathing', 'Tharu Cultural Show', 'Jungle Walk', 'Canoe Safari'],
      bestTime: 'October-March'
    },
    {
      id: 6,
      name: 'Lumbini',
      category: 'cultural',
      location: 'Lumbini Province',
      description: 'Visit the birthplace of Lord Buddha and explore sacred gardens, monasteries, and archaeological sites.',
      image: lumbiniImg,
      duration: '2 Days',
      difficulty: 'Easy',
      rating: 4.5,
      price: 'Rs.4,000',
      highlights: ['Maya Devi Temple', 'Sacred Garden', 'Monasteries', 'Ashoka Pillar'],
      bestTime: 'October-March'
    },
    {
      id: 7,
      name: 'Upper Mustang',
      category: 'cultural',
      location: 'Mustang District',
      description: 'Explore the mystical forbidden kingdom with its dramatic desert landscapes, ancient cave monasteries, and preserved Tibetan Buddhist culture in the trans-Himalayan region.',
      image: mustangImg,
      duration: '12 Days',
      difficulty: 'Moderate',
      rating: 4.7,
      price: 'Rs.45,000',
      highlights: ['Lo Manthang Palace', 'Ancient Cave Monasteries', 'Tibetan Buddhist Culture', 'Desert Landscapes', 'Forbidden Kingdom', 'Trans-Himalayan Views'],
      bestTime: 'March-November'
    },
    {
      id: 8,
      name: 'Bandipur',
      category: 'cultural',
      location: 'Tanahun District',
      description: 'Experience traditional Newari architecture and culture in this beautifully preserved hilltop town.',
      image: bandipurImg,
      duration: '2 Days',
      difficulty: 'Easy',
      rating: 4.4,
      price: 'Rs.6,000',
      highlights: ['Newari Architecture', 'Mountain Views', 'Traditional Culture', 'Peaceful Atmosphere'],
      bestTime: 'October-April'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations', icon: <FaMountain /> },
    { id: 'trekking', name: 'Trekking', icon: <FaHiking /> },
    { id: 'cultural', name: 'Cultural', icon: <FaHome /> },
    { id: 'lakes', name: 'Lakes', icon: <FaWater /> },
    { id: 'wildlife', name: 'Wildlife', icon: <FaTree /> }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'var(--teal-accent)';
      case 'moderate': return 'var(--warm-orange)';
      case 'challenging': return '#ef4444';
      default: return 'var(--mountain-gray)';
    }
  };

  return (
    <div className="destinations page-transition">
      {/* Hero Section */}
      <section className="destinations-hero">
        <div className="destinations-hero-background">
          <div className="destinations-hero-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Nepal Destinations" 
            className="destinations-hero-image"
          />
        </div>
        <div className="container">
          <div className="destinations-hero-content">
            <h1 className="destinations-hero-title fade-in">
              Discover Nepal's
              <span className="destinations-hero-highlight"> Amazing Destinations</span>
            </h1>
            <p className="destinations-hero-description fade-in">
              From the towering peaks of the Himalayas to ancient cultural sites, 
              explore the diverse beauty that Nepal has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section filters-section">
        <div className="container">
          <div className="filters-content">
            {/* Search Bar */}
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Category Filters */}
            <div className="category-filters">
              <div className="filter-label">
                <FaFilter />
                <span>Filter by Category:</span>
              </div>
              <div className="filter-buttons">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section destinations-grid-section">
        <div className="container">
          <div className="destinations-grid">
            {filteredDestinations.map((destination) => (
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
                    <div className="destination-price">
                      {destination.price}
                    </div>
                  </div>
                  <div className="destination-category">
                    {categories.find(cat => cat.id === destination.category)?.icon}
                  </div>
                </div>
                
                <div className="card-content">
                  <div className="destination-header">
                    <h3 className="destination-name">{destination.name}</h3>
                    <div className="destination-location">
                      <FaMapMarkerAlt />
                      <span>{destination.location}</span>
                    </div>
                  </div>
                  
                  <p className="destination-description">{destination.description}</p>
                  
                  <div className="destination-meta">
                    <div className="meta-item">
                      <FaClock />
                      <span>{destination.duration}</span>
                    </div>
                    <div 
                      className="difficulty-badge"
                      style={{ backgroundColor: getDifficultyColor(destination.difficulty) }}
                    >
                      {destination.difficulty}
                    </div>
                  </div>
                  
                  <div className="destination-highlights">
                    <h4 className="highlights-title">Highlights:</h4>
                    <div className="highlights-list">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <span key={index} className="highlight-tag">
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="highlight-more">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="destination-footer">
                    <div className="best-time">
                      <small>Best Time: {destination.bestTime}</small>
                    </div>
                    <button className="btn btn-primary destination-btn">
                      Learn More
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredDestinations.length === 0 && (
            <div className="no-results">
              <FaSearch className="no-results-icon" />
              <h3>No destinations found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section destinations-cta">
        <div className="container">
          <div className="destinations-cta-content text-center">
            <h2 className="destinations-cta-title">Ready to Explore Nepal?</h2>
            <p className="destinations-cta-description">
              Let our expert team help you plan the perfect Nepal adventure. 
              Contact us for personalized itineraries and exclusive deals.
            </p>
            <div className="destinations-cta-actions">
              <a href="/contact" className="btn btn-primary btn-lg">
                <FaCamera />
                Plan Your Adventure
              </a>
              <a href="/about" className="btn btn-outline btn-lg">
                Learn About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;