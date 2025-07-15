// Updated ManaliBookingPage.jsx using Tailwind CSS
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
    <div className="mt-0 font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="/manali2.jpg"
          alt="Beautiful Manali"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-fullbg-opacity-40 flex items-end px-4 pb-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold">Manali, India</h1>
            <div className="text-sm mt-1">
              <span className="text-yellow-400 cursor-pointer">Home</span> / <span className="text-yellow-400 cursor-pointer">Places</span> / <span className="text-yellow-400 cursor-pointer">Manali</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 mt-10">
        <LocationOverview
  heading="Manali, Himachal Pradesh"
  description="Nestled in the mountains of Himachal Pradesh, Manali is a picturesque hill station... Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae quas quod sint laboriosam pariatur enim! Iste, voluptas sunt! Rem quam recusandae sapiente, consequatur eaque fugiat accusantium temporibus quaerat fugit. Nestled in the mountains of Himachal Pradesh, Manali is a picturesque hill station... Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae quas quod sint laboriosam pariatur enim! Iste, voluptas sunt! Rem quam recusandae sapiente, consequatur eaque fugiat accusantium temporibus quaerat fugit. "
  reviews={24}
  mapProps={{
    coordinates: [46.6376, 8.5941],
    title: 'Kullu Manali Kasol',
    location: 'Manali',
    image: '/images/andermatt-thumbnail.jpg',
  }}
/>

        {/* Booking Options */}
      <PackageSection title="Available Packages" packages={packages} />

        {/* Contact Section */}
       <ContactInfoSection
/>
      </main>
    </div>
  );
};

export default ManaliBookingPage;
