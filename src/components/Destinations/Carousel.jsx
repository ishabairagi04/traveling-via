import React, { useState } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';

const destinations = [
  {
    title: 'Manali',
    description: 'Nestled in the mountains of Himachal Pradesh with snow-capped peaks.',
    image: 'manali-image.webp',
    tours: '3 Tours',
    link: '/places/manali',
  },
  {
    title: 'Italy Alps',
    description: 'Sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu.',
    image: 'slide-02.webp',
    tours: '2 Tours',
    link: '/destination/italy-alps',
  },
  {
    title: 'Lakeside Boats',
    description: 'Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.',
    image: 'slide-02.webp',
    tours: '3 Tours',
    link: '/destination/lakeside-boats',
  },
  {
    title: 'Red Canyons',
    description: 'Convallis a cras semper auctor neque vitae tempus quam pellentesque.',
    image: 'slide-02.webp',
    tours: '4 Tours',
    link: '/destination/red-canyons',
  },
  {
    title: 'Swiss Mountains',
    description: 'Faucibus turpis in eu mi bibendum neque egestas congue quisque.',
    image: 'slide-02.webp',
    tours: '2 Tours',
    link: '/destination/swiss-mountains',
  },
];
export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  const calculateCardPosition = (index) => {
    let offset = index - activeIndex;
    
    // Handle wrapping for circular carousel
    if (offset < -Math.floor(destinations.length / 2)) offset += destinations.length;
    if (offset > Math.floor(destinations.length / 2)) offset -= destinations.length;
    if (Math.abs(offset) > 2) return null;
    
    // Calculate scale based on position
    let scale = 1;
    if (Math.abs(offset) === 1) scale = 0.85;
    if (Math.abs(offset) === 2) scale = 0.7;

    return {
      offset,
      style: {
        transform: `translateX(${offset * 180}px) scale(${scale})`,
        zIndex: 10 - Math.abs(offset),
        opacity: 1,
        pointerEvents: offset === 0 ? 'auto' : 'none',
      }
    };
  };

  return (
    <div className="carousel-container">
      <h2>Our popular destination</h2>
      <p className="subtitle">
        Explore the tours chosen and recommended by a multitude of travelers.
      </p>

      <div className="carousel">
        <button className="nav-btn left" onClick={prev}>←</button>

        <div className="carousel-wrapper">
          {destinations.map((d, i) => {
            const position = calculateCardPosition(i);
            if (!position) return null;

            return (
              <Link
                key={i}
                to={d.link}
                className="carousel-link"
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: '32%',
                }}
              >
                <div 
                  className={`card ${position.offset === 0 ? 'active' : ''}`} 
                  style={position.style}
                >
                  <img src={d.image} alt={d.title} />
                  {position.offset === 0 && (
                    <div className="card-content">
                      <h3>{d.title}</h3>
                      <p>{d.description}</p>
                      <span className="badge">{d.tours}</span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>


        <button className="nav-btn right" onClick={next} aria-label="Next destination">
          →
        </button>
      </div>
    </div>
  );
}
