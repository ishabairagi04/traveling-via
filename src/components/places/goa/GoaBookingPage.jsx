import React from 'react';
import {
  FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe,
  FaBed, FaSnowflake, FaWifi, FaParking, FaUtensils, FaSwimmer
} from 'react-icons/fa';
import { motion } from 'framer-motion';

import LocationOverview from '../../ReUse-Component/LocationOverview';
import PackageSection from '../../ReUse-Component/PackageSection';
import ContactInfoSection from '../../ReUse-Component/ContactInfoSection';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const GoaBookingPage = () => {
  const packages = [
    {
      title: 'Beachside Resort Package',
      desc: '3 days/2 nights at a premium beachside resort with sunset views',
      price: '₹12,499',
      img: '/goa2.jpeg',
      features: [FaWifi, FaSnowflake, FaBed, FaUtensils],
      link: '/places/goa/tour',
      buttonLabel: 'View Tour',
    },
    {
      title: 'Adventure + Cruise Package',
      desc: '5 days/4 nights including water sports & evening cruise',
      price: '₹18,999',
      img: '/goa2.jpeg',
      features: [FaWifi, FaSwimmer, FaParking, FaUtensils],
      link: '/places/goa/tour',
      buttonLabel: 'Book Now',
    }
  ];

  return (
    
    <div className="pt-25 font-sans bg-gradient-to-br from-[#E0F7FA] to-[#FDF6EC] text-[#023047]">
      <Navbar theme="beach" />
      {/* 🌊 Hero Section */}
      <motion.div
        className="relative w-full h-[400px] overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/goa.jpg"
          alt="Beautiful Goa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#023047bb] to-transparent flex items-end px-6 pb-10 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-5xl font-extrabold drop-shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Goa, India
            </motion.h1>
            <motion.div
              className="text-sm mt-2 text-yellow-300 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="cursor-pointer hover:underline">Home</span> / <span className="cursor-pointer hover:underline">Places</span> / <span className="cursor-pointer hover:underline">Goa</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 🌍 Location Overview */}
      <main className="max-w-7xl mx-auto px-4 mt-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <LocationOverview
            heading="Goa, India"
            description="Goa is a coastal paradise with golden beaches, Portuguese heritage, and vibrant nightlife. From historic forts to thrilling water sports, it’s perfect for both relaxation and adventure seekers."
            reviews={32}
            mapProps={{
              coordinates: [15.2993, 74.124],
              title: 'Goa Beach View',
              location: 'Goa',
              image: '/images/goa-map-thumb.jpg',
              customMapStyle: true
            }}
          />
        </motion.div>

        {/* 🏖️ Package Section with Animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <PackageSection title="Top Goa Packages" packages={packages} />
        </motion.div>

        {/* 📞 Contact Info with Fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ContactInfoSection />
          
        </motion.div>
      </main>    <Footer theme="beach" />
    </div>
  );
};

export default GoaBookingPage;
