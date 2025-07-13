import React, { useState } from 'react';
import {
  FaSearch,
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaBed,
  FaSnowflake,
  FaWifi,
  FaParking,
  FaUtensils,
  FaHiking
} from 'react-icons/fa';
import './ManaliBookingPage.css';
import 'leaflet/dist/leaflet.css';
import MapWithPopup from '../../map/page';
import { Link } from 'react-router-dom';






const ManaliBookingPage = () => {
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({ checkInDate, checkOutDate, adults, children });
  // };

  return (
    <div className="manali-booking-page">
       {/* Header Section */}
      <header className="booking-header">
        <div className="container">
          <h1>Manali, India</h1>
          <div className="breadcrumb">
            <span>Home</span> / <span>Places</span> / <span>Manali</span>
          </div>
        </div>
      </header> 

      {/* Search Form Section */}
      {/* <div className="search-form-container">
        <div className="container">
          <form onSubmit={handleSubmit} className="booking-search-form">
            <div className="form-group">
              <label>Check In</label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Check Out</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Adults</label>
              <select value={adults} onChange={(e) => setAdults(parseInt(e.target.value))}>
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Children</label>
              <select value={children} onChange={(e) => setChildren(parseInt(e.target.value))}>
                {[0, 1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="search-button">
              <FaSearch /> Check Availability
            </button>
          </form>
        </div>
      </div> */}

      {/* Main Content Section */}
      <main className="container main-content">
        <div className="location-details">
          <div className="location-info">
            <h2>Manali, Himachal Pradesh</h2>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="star-icon" />
              ))}
              <span>(24 reviews)</span>
            </div>
            <p className="location-description">
              Nestled in the mountains of Himachal Pradesh, Manali is a picturesque hill station 
              known for its snow-capped peaks, lush green valleys, and adventure sports. Situated 
              at an altitude of 2,050 meters, it offers breathtaking views of the Himalayas. Manali 
              is famous for its apple orchards, Tibetan monasteries, and as a gateway to skiing in 
              Solang Valley and trekking in the surrounding mountains.
            </p>
            <div className="location-amenities">
              <h3>Popular Amenities</h3>
              <ul>
                <li><FaSnowflake /> Snow View</li>
                <li><FaWifi /> Free WiFi</li>
                <li><FaParking /> Free Parking</li>
                <li><FaUtensils /> Restaurant</li>
                <li><FaHiking /> Trekking Access</li>
                <li><FaBed /> Cozy Rooms</li>
              </ul>
            </div>
          </div>

          {/* <div className="location-image">
            <img 
              src="https://images.unsplash.com/photo-1581852057101-aa288ac2c90e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Manali Valley" 
              className="location-main-img"
            />
          </div> */}
           <div style={{ height: '500px', width: '50%', borderRadius: '16px', overflow: 'hidden', marginTop: '-70px' }}>
        
        <MapWithPopup
  coordinates={[46.6376, 8.5941]} // Andermatt
  title="Lucerne and St. Moritz Relaxed Start"
  location="Andermatt"
  image="/images/andermatt-thumbnail.jpg" // or any other valid image
/>
      </div>
        </div>

        {/* Booking Options Section */}
        <div className="booking-options">
          <h2>Available Packages</h2>
          
          <div className="room-card">
            <div className="room-image">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                alt="Mountain View Room" 
              />
            </div>
            <div className="room-details">
              <h3>Mountain View Package</h3>
              <p>3 days/2 nights with stunning views of the Himalayas</p>
              <div className="room-amenities">
                <span><FaWifi /> WiFi</span>
                <span><FaSnowflake /> Heating</span>
                <span><FaBed /> Queen Bed</span>
                <span><FaUtensils /> Breakfast Included</span>
              </div>
            </div>
            <div className="room-price">
              <div className="price">₹8,999 <span>/ package</span></div>
              <button className="book-now"><Link to="/places/manali/tour">View Tour</Link>
</button>
            </div>
          </div>

          <div className="room-card">
            <div className="room-image">
              <img 
                src="https://images.unsplash.com/photo-1582719471377-de81d0f810d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                alt="Adventure Package" 
              />
            </div>
            <div className="room-details">
              <h3>Adventure Package</h3>
              <p>5 days/4 nights with trekking and skiing activities</p>
              <div className="room-amenities">
                <span><FaWifi /> WiFi</span>
                <span><FaHiking /> Guided Treks</span>
                <span><FaSnowflake /> Ski Equipment</span>
                <span><FaUtensils /> All Meals Included</span>
              </div>
            </div>
            <div className="room-price">
              <div className="price">₹14,999 <span>/ package</span></div>
              <button className="book-now">
  <Link to="/places/manali/tour">Book Now</Link>
</button>

            </div>
          </div>
         </div>

        {/* Contact Information Section */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-details">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Address</h4>
                <p>123 Mall Road, Manali, Himachal Pradesh 175131, India</p>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>info@manaliresorts.com</p>
              </div>
            </div>
            <div className="contact-item">
              <FaGlobe className="contact-icon" />
              <div>
                <h4>Website</h4>
                <p>www.manaliresorts.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
   
    </div>
  );
};

export default ManaliBookingPage;
