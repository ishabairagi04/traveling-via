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

import { Link } from 'react-router-dom';
import PackageSection from '../../ReUse-Component/PackageSection';
import LocationOverview from '../../ReUse-Component/LocationOverview';
import ContactInfoSection from '../../ReUse-Component/ContactInfoSection';

const UjjainBookingPage = () => {
  const packages = [
    {
      title: 'Mahakaleshwar Darshan Package',
      desc: '2 days/1 night stay with VIP darshan & city tour',
      price: '₹5,999',
      img: 'https://images.unsplash.com/photo-1616413991646-bf1eb64d3822',
      features: [FaWifi, FaBed, FaUtensils],
      link: '/places/ujjain/tour',
      buttonLabel: 'View Tour',
    },
    {
      title: 'Spiritual Retreat',
      desc: '3 days/2 nights with temple visits & evening aarti',
      price: '₹8,499',
      img: 'https://images.unsplash.com/photo-1584280740170-5517053a327d',
      features: [FaParking, FaWifi, FaUtensils],
      link: '/places/ujjain/tour',
      buttonLabel: 'Book Now',
    }
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, title: 'Address', value: 'Ramghat Road, Ujjain, MP 456006' },
    { icon: FaPhone, title: 'Phone', value: '+91 98222 33445' },
    { icon: FaEnvelope, title: 'Email', value: 'contact@ujjainyatra.com' },
    { icon: FaGlobe, title: 'Website', value: 'www.ujjainyatra.com' }
  ];

  return (
    <div className="mt-0 font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="/images/ujjain-hero.jpg" // Replace with real image
          alt="Mahakaleshwar Temple Ujjain"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-end px-4 pb-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold">Ujjain, India</h1>
            <div className="text-sm mt-1 text-[#d8a34d]">
              <span className="cursor-pointer">Home</span> / <span className="cursor-pointer">Places</span> / <span className="cursor-pointer">Ujjain</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 mt-10">
        <LocationOverview
          heading="Ujjain – The Spiritual Capital of MP"
          description="Ujjain, situated on the banks of the Shipra River, is one of the holiest cities in India. Famous for the Mahakaleshwar Jyotirlinga, Kumbh Mela, and its rich spiritual legacy, Ujjain attracts devotees and tourists alike throughout the year."
          reviews={30}
          mapProps={{
            coordinates: [23.1793, 75.7849],
            title: 'Mahakaleshwar Temple',
            location: 'Ujjain',
            image: '/images/ujjain-thumbnail.jpg',
          }}
        />

        <PackageSection title="Available Packages" packages={packages} />
        <ContactInfoSection contacts={contactInfo} />
      </main>
    </div>
  );
};

export default UjjainBookingPage;
