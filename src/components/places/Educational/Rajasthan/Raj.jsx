"use client";
import React from "react";
import { Star, Place } from "@mui/icons-material"; // still using icons
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

const educationalTour = {
  title: "Educational Tour: Indore – Jodhpur – Jaisalmer",
  rating: 4.5,
  reviewCount: 45,
  imageUrl: "/educational-cover.jpg",
  people: 30,
  duration: "7 Days",
  location: "Indore, Jaipur, Pushkar, Jodhpur, Jaisalmer",
  price: 15100,
  photos: 8,
  hasVideo: false,
  includedItems: ["Train Travel (3rd AC)", "Accommodation", "Meals", "Sightseeing"],
  notIncludedItems: ["Personal expenses", "Sports activity charges"],
  amenities: ["Room Sharing Quad Basis", "Guided Tours", "Educational Materials"],
};

const educationalMedia = [
  { type: "image", src: "/educational1.jpg" },
  { type: "image", src: "/educational2.jpg" },
  { type: "image", src: "/educational3.jpg" },
  { type: "image", src: "/educational4.jpg" },
];

const itinerary = [
  {
    day: 1,
    title: "Indore – Ujjain – Jaipur",
    description: "Depart from Indore by bus at 06:30 PM, train from Ujjain to Jaipur overnight.",
  },
  {
    day: 2,
    title: "Jaipur Sightseeing",
    description: "Explore Amer Fort, Jantar Mantar, Hawa Mahal, Patrika Gate, and more.",
  },
  {
    day: 3,
    title: "Jaipur – Pushkar – Jodhpur",
    description: "Visit Pushkar temples, then proceed to Jodhpur by evening.",
  },
  {
    day: 4,
    title: "Jodhpur Sightseeing – Jaisalmer",
    description: "See Mehrangarh Fort, Umaid Bhawan, and travel to Jaisalmer.",
  },
  {
    day: 5,
    title: "Jaisalmer Sightseeing & Desert Experience",
    description: "Visit Jaisalmer Fort, Jain Temple, Kuldhara, and overnight desert camp.",
  },
  {
    day: 6,
    title: "Jaisalmer – Jodhpur – Ujjain",
    description: "Travel back by train to Ujjain overnight.",
  },
  {
    day: 7,
    title: "Ujjain – Indore",
    description: "Return to Indore by bus with memories to cherish.",
  },
];

const ItineraryEducational = () => {
  const selectedTour = educationalTour;
  const theme = destinationThemes.rajasthan;

  return (<>
     <Navbar theme="rajasthan" />
    <div className={`min-h-screen py-16 mt-20`} style={{ backgroundColor: theme.background }}>
   

      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-700">
          <ol className="flex space-x-2">
            <li>
              <Link to="/" className="hover:underline" style={{ color: theme.text }}>Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/tours" className="hover:underline" style={{ color: theme.text }}>Tours</Link>
            </li>
            <li>/</li>
            <li className="text-gray-500" style={{ color: theme.text }}>{selectedTour.title}</li>
          </ol>
        </nav>

        {/* Title */}
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

        {/* Media Gallery */}
        <MediaGallery mediaItems={educationalMedia} />

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <TourDetailSection
              description="An educational journey through historical and cultural landmarks of Rajasthan."
              includedItems={selectedTour.includedItems}
              notIncludedItems={selectedTour.notIncludedItems}
              amenities={selectedTour.amenities}
            />

            <ItinerarySection itinerary={itinerary} title="Tour Plan" />

            {/* <CalendarPriceSection
              title="Calendar & Price"
              monthLabel="October 2025"
              pricePerDay={`₹${selectedTour.price.toLocaleString()}`}
              highlightDates={[5, 12, 25]}
              disabledDates={[1, 8, 20]}
              daysInMonth={31}
              monthStartsOn={2}
            /> */}

            <TourMap
              title="Tour Map"
              subtitle="Rajasthan Educational Tour"
              location={selectedTour.location}
              coordinates={[26.9124, 75.7873]}
              imageUrl="/images/rajasthan-map.jpg"
              zoom={6}
            />

            <FaqSection />
            <CustomerReviews />
          </div>

          {/* <div className="lg:w-80">
            <TourBookingSidebar
              ticketPrice={selectedTour.price}
              perBookingPrice={50}
              servicePrices={{ adult: 35, youth: 30, child: 20 }}
              onBook={() => console.log("Booking Confirmed")}
            />
          </div> */}
        </div>

        {/* Suggestions */}
        <div className="mt-16">
          <h2 className="text-lg font-bold mb-4" style={{ color: theme.text }}>You may like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <TourSuggestionCard {...selectedTour} />
          </div>
        </div>
      </div>
  
    </div>
        <Footer theme="rajasthan" />
    </>
  );
};

export default ItineraryEducational;
