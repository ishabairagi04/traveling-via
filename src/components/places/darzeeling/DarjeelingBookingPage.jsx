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

// import { Link } from 'react-router-dom';
import PackageSection from '../../ReUse-Component/PackageSection';
import LocationOverview from '../../ReUse-Component/LocationOverview';
import ContactInfoSection from '../../ReUse-Component/ContactInfoSection';

const DarjeelingBookingPage = () => {
  const packages = [
    {
      title: 'Himalayan Sunrise Tour',
      desc: '3 days/2 nights stay with Tiger Hill sunrise view',
      price: '₹9,499',
      img: '/assam1.jpg',
      features: [FaWifi, FaSnowflake, FaBed, FaUtensils],
      link: '/places/darjeeling/tour',
      buttonLabel: 'View Tour',
    },
    {
      title: 'Tea Garden Exploration',
      desc: '4 days/3 nights with local tea tasting and walks',
      price: '₹12,999',
      img: '/assam1.jpg',
      features: [FaHiking, FaWifi, FaParking, FaUtensils],
      link: '/places/darjeeling/tour',
      buttonLabel: 'Book Now',
    }
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, title: 'Address', value: '456 Hill Cart Rd, Darjeeling, WB 734101' },
    { icon: FaPhone, title: 'Phone', value: '+91 98765 11223' },
    { icon: FaEnvelope, title: 'Email', value: 'hello@darjeelingtours.com' },
    { icon: FaGlobe, title: 'Website', value: 'www.darjeelingtours.com' }
  ];

  return (
    <div className="mt-0 font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="/assam1.jpg" // Replace with actual image
          alt="Darjeeling Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-end px-4 pb-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold">Darjeeling, India</h1>
            <div className="text-sm mt-1 text-[#d8a34d]">
              <span className="cursor-pointer">Home</span> / <span className="cursor-pointer">Places</span> / <span className="cursor-pointer">Darjeeling</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 mt-10">
        <LocationOverview
          heading="Darjeeling, The Queen of Hills"
          description="Darjeeling is famous for its panoramic views of the Himalayas, colonial charm, and world-renowned tea plantations. Visit the iconic Toy Train, enjoy cool weather, and witness unforgettable sunrises at Tiger Hill."
          reviews={18}
          mapProps={{
            coordinates: [27.036, 88.2627],
            title: 'Darjeeling',
            location: 'Darjeeling',
            image: '/images/darjeeling-thumbnail.jpg',
          }}
        />

        <PackageSection title="Available Packages" packages={packages} />
        <ContactInfoSection contacts={contactInfo} />
      </main>
    </div>
  );
};

export default DarjeelingBookingPage;
