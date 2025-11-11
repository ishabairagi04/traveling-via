import React from 'react';
import { useEffect } from 'react';
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
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const AssamBookingPage = () => {
  
  const packages = [
    {
      title: 'Brahmaputra River Cruise',
      desc: '3 days/2 nights luxury cruise with scenic river views',
      price: '₹12,499',
      img: '/assam1.jpg',
      features: [FaWifi, FaUtensils, FaBed],
      link: '/places/assam/tour',
      buttonLabel: 'View Tour',
    },
    {
      title: 'Kaziranga Safari Package',
      desc: '4 days/3 nights wildlife and forest adventure',
      price: '₹15,999',
      img: '/assam2.jpg',
      features: [FaHiking, FaSnowflake, FaWifi, FaUtensils],
      link: '/places/assam/tour',
      buttonLabel: 'Book Now',
    }
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, title: 'Address', value: '789 River Lane, Guwahati, Assam 781001' },
    { icon: FaPhone, title: 'Phone', value: '+91 90123 45678' },
    { icon: FaEnvelope, title: 'Email', value: 'info@assamtours.com' },
    { icon: FaGlobe, title: 'Website', value: 'www.assamtours.com' }
  ];

  return (<>
   <Navbar theme='assam'/>
    <div className="pt-25 font-sans text-gray-800 bg-[#eaf1e5]">
     
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="/assam1.jpg"
          alt="Beautiful Assam"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1e3d59]/60 flex items-end px-4 pb-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold">Assam, India</h1>
            <div className="text-sm mt-1 text-[#d8a34d]">
              <span className="cursor-pointer hover:underline">Home</span> / <span className="cursor-pointer hover:underline">Places</span> / <span className="cursor-pointer hover:underline">Assam</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 mt-10">
        <LocationOverview
          heading="Assam, North-East India"
          description="Explore the serene landscapes of Assam, from lush tea gardens to the mighty Brahmaputra River. Assam is known for its wildlife, rich culture, and peaceful monasteries nestled in nature. Enjoy forest safaris in Kaziranga and peaceful moments on river cruises."
          reviews={18}
          mapProps={{
            coordinates: [26.1445, 91.7362],
            title: 'Guwahati, Assam',
            location: 'Assam',
            image: '/images/assam-thumbnail.jpg',
          }}
        />

        <PackageSection title="Available Packages" packages={packages} highlightColor="#d8a34d" />

        <ContactInfoSection contacts={contactInfo} />
      </main>
      <Footer theme='assam'/>
    </div></>
  );
};

export default AssamBookingPage;
