"use client";
import React from "react";
import { Star, Place } from "@mui/icons-material";
import { Link } from "react-router-dom";
import destinationThemes from "../../../ReUse-Component/NavTheme";

import TourMap from "../../../ReUse-Component/maps";
import FaqSection from "../../../ReUse-Component/FaQ";
import CustomerReviews from "../../../ReUse-Component/CustomerReviews";
import TourSuggestionCard from "../../../ReUse-Component/ToursCard";
import MediaGallery from "../../../ReUse-Component/MediaGallery";
import ItinerarySection from "../../../ReUse-Component/ItinerarySection";
import TourDetailSection from "../../../ReUse-Component/description";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

const ahmedabadTour = {
  title: "Educational Tour: Indore – Ahmedabad",
  rating: 4.7,
  reviewCount: 40,
  imageUrl: "/ahmedabad-cover.jpg",
  people: 30,
  duration: "6 Days",
  location: "Indore, Ahmedabad, Gandhinagar",
  price: 13000,
  photos: 7,
  hasVideo: false,
  includedItems: ["Train Travel (3rd AC)", "Accommodation", "Meals", "Sightseeing"],
  notIncludedItems: ["Personal expenses", "Sports activity charges"],
  amenities: ["Room Sharing Quad Basis", "Guided Tours", "Educational Materials"],
};

const ahmedabadMedia = [
  { type: "image", src: "/ahmedabad1.jpg" },
  { type: "image", src: "/ahmedabad2.jpg" },
  { type: "image", src: "/ahmedabad3.jpg" },
  { type: "image", src: "/ahmedabad4.jpg" },
];

const itinerary = [
  { day: 1, title: "Indore – Ahmedabad", description: "Travel overnight by train to Ahmedabad." },
  { day: 2, title: "Ahmedabad Heritage Tour", description: "Visit Akshardham Temple, Indroda Park, Science Museum." },
  { day: 3, title: "Space Science Day", description: "Explore VASCSC, ISRO, and Gujarat Science City." },
  { day: 4, title: "Lothal – Indus Valley", description: "Excursion to ancient dockyard and archaeological museum." },
  { day: 5, title: "Statue of Unity Excursion", description: "Visit Statue of Unity and explore surrounding attractions." },
  { day: 6, title: "Indore", description: "Return to Indore with wonderful memories." },
];

const SclAhemdabad = () => {
  const selectedTour = ahmedabadTour;
  const theme = destinationThemes.ahemdabad;

  return (
    <>
      <Navbar theme="ahemdabad" />
      <div className={`min-h-screen py-16 mt-20`} style={{ backgroundColor: theme.background }}>
        <div className="max-w-7xl mx-auto px-4">
          <nav className="mb-8 text-sm text-gray-700">
            <ol className="flex space-x-2">
              <li><Link to="/" className="hover:underline" style={{ color: theme.text }}>Home</Link></li>
              <li>/</li>
              <li><Link to="/tours" className="hover:underline" style={{ color: theme.text }}>Tours</Link></li>
              <li>/</li>
              <li style={{ color: theme.text }}>{selectedTour.title}</li>
            </ol>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2" style={{ color: theme.text }}>{selectedTour.title}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="text-yellow-500 w-5 h-5" />
                <span className="text-sm font-medium" style={{ color: theme.text }}>{selectedTour.rating}</span>
                <span className="text-sm" style={{ color: theme.hover }}>({selectedTour.reviewCount} reviews)</span>
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <div className="flex items-center space-x-1">
                <Place className="text-blue-500 w-5 h-5" />
                <span className="text-sm" style={{ color: theme.hover }}>{selectedTour.location}</span>
              </div>
            </div>
          </div>

          <MediaGallery mediaItems={ahmedabadMedia} />

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <TourDetailSection
                description="Explore Ahmedabad’s heritage, science museums, and archaeological sites."
                includedItems={selectedTour.includedItems}
                notIncludedItems={selectedTour.notIncludedItems}
                amenities={selectedTour.amenities}
              />
              <ItinerarySection itinerary={itinerary} title="Tour Plan" />
              <TourMap
                title="Tour Map"
                subtitle="Ahmedabad Educational Tour"
                location={selectedTour.location}
                coordinates={[23.0225, 72.5714]}
                imageUrl="/images/ahmedabad-map.jpg"
                zoom={10}
              />
              <FaqSection />
              <CustomerReviews />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-lg font-bold mb-4" style={{ color: theme.text }}>You may like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <TourSuggestionCard {...selectedTour} />
            </div>
          </div>
        </div>
      </div>
      <Footer theme="ahemdabad" />
    </>
  );
};

export default SclAhemdabad;
