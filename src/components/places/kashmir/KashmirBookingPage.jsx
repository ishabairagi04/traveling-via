import React from 'react';
import {
  FaWifi,
  FaSnowflake,
  FaBed,
  FaUtensils,
  FaHiking,
} from 'react-icons/fa';

import PackageSection from '../../ReUse-Component/PackageSection';
import LocationOverview from '../../ReUse-Component/LocationOverview';
import ContactInfoSection from '../../ReUse-Component/ContactInfoSection';
import Footer from '../../Footer/Footer';

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
      img: '/manali3.jpg',
      features: [FaWifi, FaHiking, FaSnowflake, FaUtensils],
      link: '/places/kashmir/tour',
      buttonLabel: 'Book Now',
    },
  ];

  return (
    <div className="pt-25 font-sans text-[#0a2540] bg-gradient-to-b from-white via-[#d4f1f9] to-[#aee0f4]">
      {/* ❄️ Hero Section */}
      <div className="relative w-full h-[420px] overflow-hidden">
        <img
          src="/manali3.jpg"
          alt="Beautiful Kashmir"
          className="w-full h-full object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-[#002B36]/60 flex items-end px-4 pb-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-extrabold text-[#d9f3ff] drop-shadow-md tracking-wide">
              ❄️ Kashmir, India
            </h1>
            <div className="text-sm mt-1 text-[#b4e0f0]">
              <span className="cursor-pointer hover:underline">Home</span> /{" "}
              <span className="cursor-pointer hover:underline">Places</span> /{" "}
              <span className="cursor-pointer hover:underline">Kashmir</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🌐 Main Content */}
      <main className="max-w-7xl mx-auto px-4 mt-12">
        <LocationOverview
          heading="Kashmir, Jammu & Kashmir"
          description="Kashmir, the Crown of India, invites you with its snow-dusted pine forests, shimmering Dal Lake, and Himalayan serenity. A dream for snow lovers and nature seekers alike."
          reviews={24}
          mapProps={{
            coordinates: [34.083656, 74.797371],
            title: 'Srinagar, Kashmir',
            location: 'Kashmir',
            image: '/images/kashmir-thumbnail.jpg',
            customMapStyle: true,
          }}
        />

        {/* 🏔️ Tour Packages */}
        <PackageSection
          title="❄️ Snowy Packages in Kashmir"
          packages={packages}
        />
        

        {/* 📞 Contact Info */}
        <ContactInfoSection />
      </main>
      <Footer theme="kashmir"/>
    </div>
  );
};

export default KashmirBookingPage;
