'use client';
import React, { useEffect, useRef } from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaBed,
  FaWifi,
  FaParking,
  FaUtensils,
  FaHiking
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import PackageSection from '../../ReUse-Component/PackageSection';
import LocationOverview from '../../ReUse-Component/LocationOverview';
import ContactInfoSection from '../../ReUse-Component/ContactInfoSection';

// 🍃 Light drifting mist/leaf animation using Canvas
const LeafMist = () => {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        xVel: (Math.random() - 0.5) * 0.3,
        yVel: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(200, 255, 200, 0.25)';
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fill();
        p.x += p.xVel;
        p.y += p.yVel;
        if (p.y > height) p.y = -10;
        if (p.x > width) p.x = 0;
      });
      requestAnimationFrame(draw);
    };
    draw();
  }, []);
  return <canvas ref={ref} style={{
    position: 'fixed', top: 0, left: 0,
    pointerEvents: 'none', zIndex: 10,
    opacity: 0.5,
  }} />;
};

const DarjeelingBookingPage = () => {
  const packages = [
    {
      id: 1,
      title: "Tea Garden Retreat",
      price: "₹10,999",
      duration: "3 Days / 2 Nights",
      features: ["Stay in Tea Estate", "Tiger Hill Sunrise", "Toy Train Ride"]
    },
    {
      id: 2,
      title: "Himalayan Adventure",
      price: "₹14,999",
      duration: "4 Days / 3 Nights",
      features: ["Trekking", "Camping", "Batasia Loop Visit"]
    }
  ];

  const contactInfo = [
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 9876543210"
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "info@darjeelingtour.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Darjeeling, West Bengal"
    }
  ];

  return (
    <div
      className="pt-25 font-sans text-gray-800"
      style={{
        background: 'linear-gradient(to bottom,#b5d9d2, #eaf4ec, #dcefe2)',
      }}
    >
      <LeafMist />
      <Navbar theme="darjeeling" />

      {/* Hero Section */}
      <motion.div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="/darjeeling1.jpg"
          alt="Darjeeling Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end px-6 pb-8">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-5xl font-serif text-white drop-shadow-lg"
              style={{ fontFamily: 'Playfair Display, serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Darjeeling, India
            </motion.h1>
            <motion.p
              className="text-sm text-gray-200 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Home / Places / Darjeeling
            </motion.p>
          </div>
        </div>
        {/* Tea leaf/mist shape overlay (optional) */}
        <div className="absolute inset-0 bg-[url('/tea-leaf-overlay.png')] bg-center bg-cover opacity-10 mix-blend-soft-light" />
      </motion.div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        
 <LocationOverview
  heading="Darjeeling, The Queen of Hills"
  description="Darjeeling offers panoramic Himalayan views, colonial charm, and world‑famous tea gardens. Watch the sunrise at Tiger Hill and ride the Heritage Toy Train."
  reviews={18}
  mapProps={{
    coordinates: [27.036, 88.2627], // ✅ Correct prop name
    subtitle: "Explore the tea gardens and colonial charm",
    location: "Darjeeling, West Bengal",
    imageUrl: "https://example.com/darjeeling-image.jpg" // replace with your image
  }}
/>


        <PackageSection title="Available Packages" packages={packages} />
        <ContactInfoSection contacts={contactInfo} />
      </main>

      <Footer theme="darjeeling" />
    </div>
  );
};

export default DarjeelingBookingPage;
