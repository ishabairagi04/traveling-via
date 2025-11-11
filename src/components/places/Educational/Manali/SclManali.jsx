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

const manaliTour = {
  title: "Educational Tour: Chandigarh – Manali – Amritsar",
  rating: 4.8,
  reviewCount: 42,
  imageUrl: "/manali-cover.jpg",
  people: 30,
  duration: "8 Days",
  location: "Chandigarh, Manali, Amritsar",
  price: 15000,
  photos: 7,
  hasVideo: false,
  includedItems: ["Train Travel (3rd AC)", "Accommodation", "Meals", "Sightseeing"],
  notIncludedItems: ["Personal expenses", "Sports activity charges"],
  amenities: ["Room Sharing Quad Basis", "Guided Tours", "Educational Materials"],
};

const manaliMedia = [
  { type: "image", src: "/manali1.jpg" },
  { type: "image", src: "/manali2.jpg" },
  { type: "image", src: "/manali3.jpg" },
  { type: "image", src: "/manali4.jpg" },
];

const itinerary = [
  { day: 1, title: "Indore – Ambala", description: "Board the train for Ambala, overnight journey with dinner service." },
  { day: 2, title: "Ambala – Chandigarh", description: "Visit museums and gardens in Chandigarh with guided tours." },
  { day: 3, title: "Chandigarh – Manali", description: "Visit scenic spots enroute and enjoy leisure activities in Manali." },
  { day: 4, title: "Atal Tunnel", description: "Snow activities like yak rides and ziplining at Atal Tunnel." },
  { day: 5, title: "Manali Sightseeing", description: "Explore temples, monasteries and enjoy cultural experiences." },
  { day: 6, title: "Manali – Amritsar", description: "Visit Wagah border and proceed to Amritsar." },
  { day: 7, title: "Amritsar Local", description: "Visit heritage sites and return by train to Indore." },
  { day: 8, title: "Indore", description: "Conclude the tour with cherished memories." },
];

const SclManali = () => {
  const selectedTour = manaliTour;
  const theme = destinationThemes.manali;

  return (
    <>
      <Navbar theme="manali" />
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

          <MediaGallery mediaItems={manaliMedia} />

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <TourDetailSection
                description="Experience the natural beauty and cultural heritage of Manali and surrounding regions."
                includedItems={selectedTour.includedItems}
                notIncludedItems={selectedTour.notIncludedItems}
                amenities={selectedTour.amenities}
              />
              <ItinerarySection itinerary={itinerary} title="Tour Plan" />
              <TourMap
                title="Tour Map"
                subtitle="Manali Educational Tour"
                location={selectedTour.location}
                coordinates={[32.2432, 77.1892]}
                imageUrl="/images/manali-map.jpg"
                zoom={9}
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
      <Footer theme="manali" />
    </>
  );
};

export default SclManali;
