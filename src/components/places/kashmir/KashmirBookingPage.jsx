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

// import { Link } from 'react-router-dom';
import PackageSection from '../../ReUse-Component/PackageSection';
import LocationOverview from '../../ReUse-Component/LocationOverview';

import ContactInfoSection from '../../ReUse-Component/ContactInfoSection';

const KashmirBookingPage = () => {
  const packages = [
    {
      title: 'Mountain View Package',
      desc: '3 days/2 nights with stunning views of the Himalayas',
      price: '₹8,999',
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      features: [FaWifi, FaSnowflake, FaBed, FaUtensils],
      link: '/places/kashmir/tour',
      buttonLabel: 'View Tour',
    },
    {
      title: 'Adventure Package',
      desc: '5 days/4 nights with trekking and skiing activities',
      price: '₹14,999',
      img: 'https://images.unsplash.com/photo-1582719471377-de81d0f810d7',
      features: [FaWifi, FaHiking, FaSnowflake, FaUtensils],
      link: '/places/kashmir/tour',
      buttonLabel: 'Book Now',
    },
  ];

  return (
    <div className="mt-0 font-sans text-gray-800">
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="/slide-02.webp"
          alt="Beautiful Kashmir"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-end px-4 pb-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold">Kashmir, India</h1>
            <div className="text-sm mt-1">
              <span className="text-[#d8a34d] cursor-pointer">Home</span> / <span className="text-[#d8a34d] cursor-pointer">Places</span> / <span className="text-[#d8a34d] cursor-pointer">Kashmir</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 mt-10">
        <LocationOverview
          heading="Kashmir, Jammu & Kashmir"
          description="Placeholder description: Kashmir is a scenic destination..."
          reviews={24}
          mapProps={{
            coordinates: [34.083656, 74.797371],
            title: 'Srinagar, Kashmir',
            location: 'Kashmir',
            image: '/images/kashmir-thumbnail.jpg',
          }}
        />

        <PackageSection title="Available Packages" packages={packages} />

        <ContactInfoSection />
      </main>
    </div>
  );
};

export default KashmirBookingPage;

