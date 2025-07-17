import React from 'react';
import {
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
  FaHiking,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import PackageSection from '../../ReUse-Component/PackageSection';
import LocationOverview from '../../ReUse-Component/LocationOverview';
import ContactInfoSection from '../../ReUse-Component/ContactInfoSection';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Snowfall from 'react-snowfall';

const ManaliBookingPage = () => {
  const packages = [
    {
      title: 'Mountain View Package',
      desc: '3 days/2 nights with stunning views of the Himalayas',
      price: '₹8,999',
      img: '/manali1.jpg',
      features: [FaWifi, FaSnowflake, FaBed, FaUtensils],
      link: '/places/manali/tour',
      buttonLabel: 'View Tour',
    },
    {
      title: 'Adventure Package',
      desc: '5 days/4 nights with trekking and skiing activities',
      price: '₹14,999',
      img: '/manali3.jpg',
      features: [FaWifi, FaHiking, FaSnowflake, FaUtensils],
      link: '/places/manali/tour',
      buttonLabel: 'Book Now',
    }
  ];

  return (
    <div className="pt-25 font-sans text-gray-800 bg-gradient-to-b from-[#cde2f5] via-[#e5f3fd] to-[#f2f9ff] relative">
      <Snowfall snowflakeCount={100} style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: 10 }} />
      <Navbar theme="manali" />

      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="/manali2.jpg"
          alt="Beautiful Manali"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-end px-4 pb-8 text-white z-20">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white drop-shadow-2xl">Manali, India</h1>
            <div className="text-sm mt-1">
              <span className="text-blue-300 cursor-pointer">Home</span> /{' '}
              <span className="text-blue-300 cursor-pointer">Places</span> /{' '}
              <span className="text-blue-300 cursor-pointer">Manali</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 mt-10 relative z-20">
        <LocationOverview
          heading="Manali, Himachal Pradesh"
          description="Nestled in the mountains of Himachal Pradesh, Manali is a picturesque hill station known for its breathtaking landscapes, adventure sports, and serene atmosphere. Explore the charm of snow-capped peaks, pine forests, and rich cultural heritage."
          reviews={24}
          mapProps={{
            coordinates: [46.6376, 8.5941],
            title: 'Kullu Manali Kasol',
            location: 'Manali',
            image: '/images/andermatt-thumbnail.jpg',
          }}
        />

        {/* Booking Options */}
        <PackageSection
          title="Available Packages"
          packages={packages}
          theme="manali"
        />

        {/* Contact Section */}
        <ContactInfoSection />
      </main>

      {/* Footer with Snowy Blue Theme */}
      <Footer theme="manali" />
    </div>
  );
};

export default ManaliBookingPage;
