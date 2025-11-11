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
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
 const maldivesTheme = {
  palette: {
    primary: '#006D77',
    secondary: 'black',
   accent: "#ffd166",
    background: '#F0FFFF',
    text: '#023047',
  },
};
const MaldivesBookingPage = () => {


const currentTheme = maldivesTheme.palette;

  const packages = [
    {
      title: 'Luxury Overwater Villa',
      desc: '3 nights in a private overwater villa with ocean view',
      price: '₹79,999',
      img: '/maldives1.jpg',
      features: [FaWifi, FaSnowflake, FaBed, FaUtensils],
      link: '/places/maldives/tour',
      buttonLabel: 'View Tour',
    },
    {
      title: 'Romantic Honeymoon Package',
      desc: '4 nights with candlelight dinners and couple spa',
      price: '₹99,999',
      img: '/maldives2.jpg',
      features: [FaWifi, FaHiking, FaUtensils],
      link: '/places/maldives/tour',
      buttonLabel: 'Book Now',
    }
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, title: 'Address', value: 'Resort Island, South Malé Atoll, Maldives' },
    { icon: FaPhone, title: 'Phone', value: '+960 123 4567' },
    { icon: FaEnvelope, title: 'Email', value: 'info@maldivestours.com' },
    { icon: FaGlobe, title: 'Website', value: 'www.maldivestours.com' }
  ];

  return (
    <div className=" pt-25 font-sans text-[#005c5c] bg-gradient-to-b from-[#e5fcff] to-[#c4f1eb]">
      <Navbar theme="maldives" />

      {/* 🌊 Hero Section */}
      <motion.div
        className="relative w-full h-[400px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/maldives.jpg"
          alt="Maldives Beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#007f7fcc] to-transparent flex items-end px-6 pb-10 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-5xl font-extrabold drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Maldives
            </motion.h1>
            <motion.div
              className="text-sm mt-2 text-[#f6d76e] font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="cursor-pointer hover:underline">Home</span> /{' '}
              <span className="cursor-pointer hover:underline">Places</span> /{' '}
              <span className="cursor-pointer hover:underline">Maldives</span>
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
            heading="Maldives – The Island Paradise"
            description="The Maldives, a tropical paradise in the Indian Ocean, is famous for its crystal-clear waters, coral reefs, and luxurious resorts. Ideal for honeymooners, scuba divers, and luxury seekers, it's one of the most breathtaking destinations on Earth."
            reviews={50}
            mapProps={{
              coordinates: [3.2028, 73.2207],
              title: 'Malé Atoll',
              location: 'Maldives',
              image: '/images/maldives-map-thumb.jpg',
              customMapStyle: true
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
          <PackageSection title="🌴 Maldives Packages" packages={packages} theme={maldivesTheme} />
       
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactInfoSection contacts={contactInfo} />
        </motion.div>
      </main>

      <Footer theme="maldives" />
    </div>
  );
};

export default MaldivesBookingPage;
