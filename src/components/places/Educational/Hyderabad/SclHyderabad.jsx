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
import CalendarPriceSection from "../../../ReUse-Component/CalendarPriceSection";
import TourBookingSidebar from "../../../ReUse-Component/BookingSidebar";
import TourDetailSection from "../../../ReUse-Component/description";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

const hyderabadTour = {
  title: "Educational Tour: Indore – Hyderabad",
  rating: 4.6,
  reviewCount: 50,
  imageUrl: "/hyderabad-cover.jpg",
  people: 30,
  duration: "6 Days",
  location: "Indore, Ujjain, Hyderabad",
  price: 15500,
  photos: 6,
  hasVideo: false,
  includedItems: ["Train Travel (3rd AC)", "Accommodation", "Meals", "Sightseeing"],
  notIncludedItems: ["Personal expenses", "Sports activity charges"],
  amenities: ["Room Sharing Quad Basis", "Guided Tours", "Educational Materials"],
};

const hyderabadMedia = [
  { type: "image", src: "/hyderabad1.jpg" },
  { type: "image", src: "/hyderabad2.jpg" },
  { type: "image", src: "/hyderabad3.jpg" },
  { type: "image", src: "/hyderabad4.jpg" },
];

const itinerary = [
  { day: 1, title: "Indore – Ujjain – Hyderabad", description: "Depart from Indore early morning and travel overnight by train to Hyderabad." },
  { day: 2, title: "Hyderabad Local Sightseeing", description: "Visit Charminar, Laad Bazaar, Chowmahalla Palace, and Lumbini Park with laser show." },
  { day: 3, title: "Ramoji Film City", description: "Enjoy full day at the world's largest film city with entertainment and relaxation." },
  { day: 4, title: "Wonderla Park Excursion", description: "Full day fun at Wonderla Park with rides and attractions." },
  { day: 5, title: "Hyderabad – Indore", description: "Explore Salar Jung Museum, Birla Mandir, Golconda Fort before boarding train to Indore." },
  { day: 6, title: "Indore", description: "Reach Indore and conclude the tour with fond memories." },
];

const SclHyderabad = () => {
  const selectedTour = hyderabadTour;
  const theme = destinationThemes.hyderabad;

  return (
    <>
      <Navbar theme="hyderabad" />
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

          <MediaGallery mediaItems={hyderabadMedia} />

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <TourDetailSection
                description="Explore Hyderabad’s cultural heritage and entertainment hubs with this educational tour."
                includedItems={selectedTour.includedItems}
                notIncludedItems={selectedTour.notIncludedItems}
                amenities={selectedTour.amenities}
              />
              <ItinerarySection itinerary={itinerary} title="Tour Plan" />
              <TourMap
                title="Tour Map"
                subtitle="Hyderabad Educational Tour"
                location={selectedTour.location}
                coordinates={[17.3850, 78.4867]}
                imageUrl="/images/hyderabad-map.jpg"
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
      <Footer theme="hyderabad" />
    </>
  );
};

export default SclHyderabad;
