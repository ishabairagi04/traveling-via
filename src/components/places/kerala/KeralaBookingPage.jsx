import React from 'react';
import {
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
import { motion } from 'framer-motion';
import PackageSection from '../../ReUse-Component/PackageSection';
import LocationOverview from '../../ReUse-Component/LocationOverview';
import ContactInfoSection from '../../ReUse-Component/ContactInfoSection';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const KeralaBookingPage = () => {
  const packages = [
    {
      title: 'Backwater Houseboat Stay',
      desc: '2 nights on a traditional houseboat in Alleppey',
      price: '₹10,499',
      img: '/kerala1.jpg',
      features: [FaWifi, FaUtensils, FaBed, FaSnowflake],
      link: '/places/kerala/tour',
      buttonLabel: 'View Tour',
    },
    {
      title: 'Munnar Tea Hills Retreat',
      desc: '4 days/3 nights stay with guided plantation walks',
      price: '₹13,999',
      img: '/kerala2.jpg',
      features: [FaHiking, FaSnowflake, FaWifi, FaUtensils],
      link: '/places/kerala/tour',
      buttonLabel: 'Book Now',
    }
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-[#e6f4e6] via-[#d1e9d1] to-[#c2dec2] text-[#1a3c2e]">
      <Navbar theme="kerala" />

      {/* 🌴 Hero Section */}
      <motion.div
        className="relative w-full h-[400px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/kerala1.jpg"
          alt="Beautiful Kerala"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f3d2ecc] to-transparent flex items-end px-6 pb-10 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-5xl font-extrabold drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Kerala, India
            </motion.h1>
            <motion.div
              className="text-sm mt-2 text-yellow-300 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="cursor-pointer hover:underline">Home</span> /{' '}
              <span className="cursor-pointer hover:underline">Places</span> /{' '}
              <span className="cursor-pointer hover:underline">Kerala</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 🌴 Main Content */}
      <main className="max-w-7xl mx-auto px-4 mt-12 space-y-12">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <LocationOverview
            heading="Kerala, God's Own Country"
            description="Kerala offers tranquil backwaters, lush greenery, and peaceful beaches. Explore Alleppey's houseboats, Munnar's tea plantations, and vibrant Kathakali performances. A perfect blend of culture, nature, and relaxation."
            reviews={30}
            mapProps={{
              coordinates: [9.4981, 76.3388],
              title: 'Alleppey, Kerala',
              location: 'Kerala',
              image: '/images/kerala-thumbnail.jpg',
              customMapStyle: true,
            }}
          />
        </motion.div>

        {/* Packages */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <PackageSection title="🌿 Available Packages" packages={packages} />
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactInfoSection />
        </motion.div>
      </main>

      <Footer theme="kerala" />
    </div>
  );
};

export default KeralaBookingPage;
