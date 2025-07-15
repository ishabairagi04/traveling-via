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
  FaHiking
} from 'react-icons/fa';


import PackageSection from '../../ReUse-Component/PackageSection';
import LocationOverview from '../../ReUse-Component/LocationOverview';
import ContactInfoSection from '../../ReUse-Component/ContactInfoSection';

const MaldivesBookingPage = () => {
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
    <div className="mt-0 font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="/maldives.jpg" // Replace with your own image
          alt="Maldives Beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-end px-4 pb-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold">Maldives</h1>
            <div className="text-sm mt-1 text-[#d8a34d]">
              <span className="cursor-pointer">Home</span> / <span className="cursor-pointer">Places</span> / <span className="cursor-pointer">Maldives</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 mt-10">
        <LocationOverview
          heading="Maldives – The Island Paradise"
          description="The Maldives, a tropical paradise in the Indian Ocean, is famous for its crystal-clear waters, coral reefs, and luxurious resorts. Ideal for honeymooners, scuba divers, and luxury seekers, it's one of the most breathtaking destinations on Earth."
          reviews={50}
          mapProps={{
            coordinates: [3.2028, 73.2207],
            title: 'Malé Atoll',
            location: 'Maldives',
            image: '/images/maldives-map-thumb.jpg',
          }}
        />

        <PackageSection title="Available Packages" packages={packages} />
        <ContactInfoSection contacts={contactInfo} />
      </main>
    </div>
  );
};

export default MaldivesBookingPage;
