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

const KeralaBookingPage = () => {
  const packages = [
    {
      title: 'Backwater Houseboat Stay',
      desc: '2 nights on a traditional houseboat in Alleppey',
      price: '₹10,499',
      img: 'https://images.unsplash.com/photo-1600359735486-80c95f38f66b',
      features: [FaWifi, FaUtensils, FaBed, FaSnowflake],
      link: '/places/kerala/tour',
      buttonLabel: 'View Tour',
    },
    {
      title: 'Munnar Tea Hills Retreat',
      desc: '4 days/3 nights stay with guided plantation walks',
      price: '₹13,999',
      img: 'https://images.unsplash.com/photo-1562322140-537defb7c39f',
      features: [FaHiking, FaSnowflake, FaWifi, FaUtensils],
      link: '/places/kerala/tour',
      buttonLabel: 'Book Now',
    }
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, title: 'Address', value: '123 Backwater Lane, Alleppey, Kerala 688001' },
    { icon: FaPhone, title: 'Phone', value: '+91 90234 56789' },
    { icon: FaEnvelope, title: 'Email', value: 'info@keralatours.com' },
    { icon: FaGlobe, title: 'Website', value: 'www.keralatours.com' }
  ];

  return (
    <div className="mt-0 font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="/images/kerala-hero.jpg" // Replace with your actual image
          alt="Beautiful Kerala"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-end px-4 pb-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold">Kerala, India</h1>
            <div className="text-sm mt-1 text-[#d8a34d]">
              <span className="cursor-pointer">Home</span> / <span className="cursor-pointer">Places</span> / <span className="cursor-pointer">Kerala</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 mt-10">
        <LocationOverview
          heading="Kerala, God's Own Country"
          description="Kerala offers tranquil backwaters, lush greenery, and peaceful beaches. Explore Alleppey's houseboats, Munnar's tea plantations, and vibrant Kathakali performances. A perfect blend of culture, nature, and relaxation."
          reviews={30}
          mapProps={{
            coordinates: [9.4981, 76.3388],
            title: 'Alleppey, Kerala',
            location: 'Kerala',
            image: '/images/kerala-thumbnail.jpg',
          }}
        />

        <PackageSection title="Available Packages" packages={packages} />
        <ContactInfoSection/>
      </main>
    </div>
  );
};

export default KeralaBookingPage;

