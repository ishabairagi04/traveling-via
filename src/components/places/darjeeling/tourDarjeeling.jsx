"use client";
import React from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Grid,
  Divider,
} from "@mui/material";
import { Star, Place } from "@mui/icons-material";
import { Link } from "react-router-dom";

import TourMap from "../../ReUse-Component/maps";
import FaqSection from "../../ReUse-Component/FaQ";
import CustomerReviews from "../../ReUse-Component/CustomerReviews";
import TourSuggestionCard from "../../ReUse-Component/ToursCard";
import MediaGallery from "../../ReUse-Component/MediaGallery";
import ItinerarySection from "../../ReUse-Component/ItinerarySection";
import CalendarPriceSection from "../../ReUse-Component/CalendarPriceSection";
import TourBookingSidebar from "../../ReUse-Component/BookingSidebar";
import TourDetailSection from "../../ReUse-Component/description";
import Navbar from "../../Navbar/Navbar";

const darjeelingTour = {
  title: "Darjeeling Himalayan Escape",
  rating: 4.7,
  reviewCount: 12,
  imageUrl: "/darjeeling-cover.jpg",
  people: 18,
  duration: "3 Days",
  location: "Darjeeling, West Bengal",
  price: 399,
  photos: 6,
  hasVideo: true,
  includedItems: ["Toy Train Ride", "Tea Garden Tour", "Sunrise at Tiger Hill"],
  notIncludedItems: ["Flight Tickets", "Meals on Train"],
  amenities: ["Hill Views", "Local Market Visit", "Trekking"],
};

const darjeelingMedia = [
  { type: "image", src: "/assam1.jpg" },
  { type: "image", src: "/assam12.jpg" },
  { type: "image", src: "/assam1.jpg" },
  { type: "image", src: "/assam2.jpg" },
  { type: "image", src: "/assam2.jpg" },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival in Darjeeling",
    description: "Transfer to hotel. Evening stroll at Chowrasta and Mall Road.",
  },
  {
    day: 2,
    title: "Tiger Hill & Tea Estates",
    description: "Early morning sunrise at Tiger Hill, visit tea gardens, and Himalayan Mountaineering Institute.",
  },
  {
    day: 3,
    title: "Toy Train Ride & Departure",
    description: "Enjoy toy train ride and shop local before checkout.",
  },
];

const ItineraryDarjeeling = () => {
  const selectedTour = darjeelingTour;

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh", py: 4, mt: 10 }}>
       <Navbar theme="darjeeling" />
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4, fontSize: "0.875rem" }}>
          <Link color="inherit" to="/">Home</Link>
          <Link color="inherit" to="/search">Search Result</Link>
          <Typography color="text.primary">{selectedTour.title}</Typography>
        </Breadcrumbs>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, fontSize: "2rem", color: "#212529", mb: 1 }}>
            {selectedTour.title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Star sx={{ color: "#ffc107", mr: 0.5, fontSize: "1rem" }} />
              <Typography sx={{ fontWeight: 500, fontSize: "0.875rem" }}>{selectedTour.rating}</Typography>
              <Typography sx={{ ml: 0.5, fontSize: "0.875rem", color: "#6c757d" }}>
                ({selectedTour.reviewCount} reviews)
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ height: "16px", bgcolor: "#dee2e6" }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Place sx={{ color: "#0d6efd", fontSize: "1rem", mr: 0.5 }} />
              <Typography sx={{ fontSize: "0.875rem", color: "#6c757d" }}>
                {selectedTour.location}
              </Typography>
            </Box>
          </Box>
        </Box>

        <MediaGallery mediaItems={darjeelingMedia} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <TourDetailSection
              description="Explore the charming hill station of Darjeeling with panoramic views, iconic toy train rides, and vibrant local culture."
              includedItems={selectedTour.includedItems}
              notIncludedItems={selectedTour.notIncludedItems}
              amenities={selectedTour.amenities}
            />

            <ItinerarySection itinerary={itinerary} title="Tour Plan" />

            <CalendarPriceSection
              title="Calendar & Price"
              monthLabel="October 2025"
              pricePerDay="$399.00"
              highlightDates={[5, 14, 21]}
              disabledDates={[1, 8, 25]}
              daysInMonth={31}
              monthStartsOn={3}
            />

            <TourMap
              title="Tour Map"
              subtitle="Darjeeling – The Queen of Hills"
              location="Darjeeling, West Bengal"
              coordinates={[27.0360, 88.2627]}
              imageUrl="/images/darjeeling-map.jpg"
              zoom={13}
            />

            <FaqSection />
            <CustomerReviews />
          </Box>

          <TourBookingSidebar
            ticketPrice={399}
            perBookingPrice={45}
            servicePrices={{ adult: 35, youth: 30, child: 20 }}
            onBook={() => console.log("Booking Confirmed")}
          />
        </Box>

        <Box mt={8}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            You may like
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <TourSuggestionCard {...selectedTour} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

// ✅ Export as named and default
export { ItineraryDarjeeling };
export default ItineraryDarjeeling;
