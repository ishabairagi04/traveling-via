import React from 'react';
import {
  FaStar,
  FaSnowflake,
  FaWifi,
  FaParking,
  FaUtensils,
  FaHiking,
  FaBed,
} from 'react-icons/fa';
import TourMap from '../ReUse-Component/maps'; // adjust path as needed

const defaultAmenities = [
  { icon: FaSnowflake, label: 'Snow View' },
  { icon: FaWifi, label: 'Free WiFi' },
  { icon: FaParking, label: 'Free Parking' },
  { icon: FaUtensils, label: 'Restaurant' },
  { icon: FaHiking, label: 'Trekking Access' },
  { icon: FaBed, label: 'Cozy Rooms' },
];

const LocationOverview = ({
  heading = 'Manali, Himachal Pradesh',
  description = '',
  reviews = 24,
  amenities = defaultAmenities,
  mapProps,
}) => {
  return (
    <div className="flex flex-wrap gap-8 mb-12">
      <div className="flex-1 min-w-[300px] font-semibold">
        <h2 className="text-2xl mb-3">{heading}</h2>
        <div className="flex items-center gap-1 text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600">({reviews} reviews)</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div>
          <h3 className="text-lg mb-2">Popular Amenities</h3>
          <ul className="flex flex-wrap gap-3">
            {amenities.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full text-sm"
              >
                <item.icon />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full md:w-[50%] h-[500px] rounded-xl overflow-hidden -mt-10">
        <TourMap {...mapProps} />
      </div>
    </div>
  );
};

export default LocationOverview;
