import React from 'react';
import { Link } from 'react-router-dom';

const PackageSection = ({ title = "Available Packages", packages = [], linkTo = "#" }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      {packages.map((pkg, i) => (
        <div
          key={i}
          className="flex flex-wrap gap-6 p-4 border border-gray-200 rounded-lg mb-6 items-center"
        >
          <div className="w-full md:w-[280px]">
            <img src={pkg.img} alt={pkg.title} className="rounded-md w-full" />
          </div>

          <div className="flex-1 min-w-[250px]">
            <h3 className="text-xl font-semibold mb-1">{pkg.title}</h3>
            <p className="text-gray-600">{pkg.desc}</p>
            <div className="flex flex-wrap gap-3 mt-3">
              {pkg.features.map((Icon, idx) => (
                <span key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon />
                </span>
              ))}
            </div>
          </div>

          <div className="text-right min-w-[180px]">
            <div className="text-xl text-red-500 font-bold">
              {pkg.price} <span className="text-sm text-gray-500">/ package</span>
            </div>
            <Link to={pkg.link || linkTo}>
              <button className="mt-2 bg-[#d8a34d] text-white px-4 py-2 rounded hover:bg-yellow-600 font-semibold transition">
                {pkg.buttonLabel || "Book Now"}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageSection;
