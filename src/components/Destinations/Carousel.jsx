import React, { useState } from 'react';
import './Carousel.css';


const destinations = [
  {
    title: 'manali',
    description:
      'Mi bibendum neque egestas congue. Arcu risus quis varius quam quisque id diam.',
    image: 'slide-02.webp',
    tours: '1 Tour',
      link: '/places/manali', // ✅ remove .jsx
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
       let offset = i - activeIndex;
  if (offset < -Math.floor(destinations.length / 2)) offset += destinations.length;
  if (offset > Math.floor(destinations.length / 2)) offset -= destinations.length;
  if (Math.abs(offset) > 2) return null; 
  let scale = 1;
  let xOffset = offset * 240;
  let zIndex = 5 - Math.abs(offset);

  if (Math.abs(offset) === 1) scale = 0.85;
  if (Math.abs(offset) === 2) scale = 0.7;

            const style = {
              transform: `
                translateX(${offset * 180}px)
               scale(${scale})
              `,
              zIndex: 10 - Math.abs(offset),
             opacity: 1,

              pointerEvents: offset === 0 ? 'auto' : 'none',
            };

            return (
             <a
    key={i}
    href={d.link}
    style={{ textDecoration: 'none' ,
       position: 'absolute',
      top: 0,
      left: '32%',
      
    }}
  >
   <div className={`card ${offset === 0 ? 'active' : ''}`} style={style}>

                <img src={d.image} alt={d.title} />
                {offset === 0 && (
  <div className="card-content ">
    <h3>{d.title}</h3>
    <p>{d.description}</p>
    <span className="badge">{d.tours}</span>
  </div>
)}

                </div>
              </a>
            );
          })}
        </div>

        <button className="nav-btn right" onClick={next}>→</button>
      </div>
    </div>
  );
}
