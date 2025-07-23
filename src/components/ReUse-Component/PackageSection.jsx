import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { Button } from '@mui/material';
const PackageSection = ({
  title = "Available Packages",
  packages = [],
  linkTo = "#",
  theme =[currentTheme]
}) => {
  const { accent, text } = theme.palette;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4" style={{ color: text }}>{title}</h2>

      {packages.map((pkg, i) => (
        <div
          key={i}
          className="flex flex-wrap gap-6 p-4 border border-gray-200 rounded-lg mb-6 items-center bg-white shadow-sm"
        >
          {/* Image */}
          <div className="w-full md:w-[280px]">
            <img src={pkg.img} alt={pkg.title} className="rounded-md w-full" />
          </div>

          {/* Description */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-xl font-semibold mb-1" style={{ color: text }}>{pkg.title}</h3>
            <p className="text-gray-600">{pkg.desc}</p>

            <div className="flex flex-wrap gap-3 mt-3">
              {pkg.features.map((FeatureIcon, idx) => (
                <span key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500" />
                  <FeatureIcon />
                </span>
              ))}
            </div>
          </div>

          {/* Pricing and Button */}
          <div className="text-right min-w-[180px]">
            <div className="text-xl font-bold" style={{ color: accent }}>
              {pkg.price} <span className="text-sm text-gray-500">/ package</span>
            </div>
            <Link to={pkg.link || linkTo}>
              {/* <button
                className="mt-2 px-4 py-2 rounded font-semibold text-white transition-colors duration-300"
                style={{ backgroundColor: theme.palette.accent }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = theme.palette.secondary)}
                onMouseLeave={(e) => (e.target.style.backgroundColor =theme.palette.accent)}
              >
                {pkg.buttonLabel || "Book Now"}
              </button> */}
              <Button
  variant="contained"
  sx={{
    mt: 2,
    backgroundColor: theme?.palette?.accent || '#1976d2', // fallback color
    color: '#fff',
    '&:hover': {
      backgroundColor: theme?.palette?.primary || '#115293',
    },
  }}
>
  {pkg.buttonLabel}
</Button>

            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageSection;
