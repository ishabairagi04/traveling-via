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

const kashmirTour = {
  title: "Scenic Kashmir Getaway",
  rating: 4.9,
  reviewCount: 18,
  imageUrl: "/kashmir-cover.jpg",
  people: 15,
  duration: "4 Days",
  location: "Srinagar, Kashmir",
  price: 499,
  photos: 7,
  hasVideo: true,
  includedItems: ["Houseboat Stay", "Shikara Ride", "Gondola Ride", "Local Guide"],
  notIncludedItems: ["Flight Tickets", "Tips"],
  amenities: ["Nature Walks", "Local Cuisine", "Photography"],
};

const kashmirMedia = [
  { type: "image", src: "/kashmir1.jpg" },
  { type: "image", src: "/kashmir2.jpg" },
  { type: "image", src: "/kashmir3.jpg" },
  { type: "image", src: "/kashmir4.jpg" },
  { type: "image", src: "/kashmir5.jpg" },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival in Srinagar",
    description: "Check-in to houseboat. Enjoy sunset shikara ride in Dal Lake.",
  },
  {
    day: 2,
    title: "Gulmarg Excursion",
    description: "Visit Gulmarg for gondola ride and snow activities.",
  },
  {
    day: 3,
    title: "Pahalgam Day Trip",
    description: "Explore pine forests and Lidder River views.",
  },
  {
    day: 4,
    title: "Departure",
    description: "Local shopping and drop to airport.",
  },
];

const ItineraryKashmir = () => {
  const selectedTour = kashmirTour;

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh", py: 4, mt: 20 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4, fontSize: "0.875rem" }}>
          <Link color="inherit" href="#" underline="hover">Home</Link>
          <Link color="inherit" href="#" underline="hover">Search Result</Link>
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

        <MediaGallery mediaItems={kashmirMedia} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <TourDetailSection
              description="Experience the beauty of Kashmir with serene lakes, snow-capped mountains, and local traditions."
              includedItems={selectedTour.includedItems}
              notIncludedItems={selectedTour.notIncludedItems}
              amenities={selectedTour.amenities}
            />

            <ItinerarySection itinerary={itinerary} title="Tour Plan" />

            <CalendarPriceSection
              title="Calendar & Price"
              monthLabel="August 2025"
              pricePerDay="$499.00"
              highlightDates={[8, 15, 22]}
              disabledDates={[5, 10, 27]}
              daysInMonth={31}
              monthStartsOn={4}
            />

            <TourMap
              title="Tour Map"
              subtitle="Kashmir – Heaven on Earth"
              location="Srinagar, Kashmir"
              coordinates={[34.0837, 74.7973]}
              imageUrl="/images/kashmir-map.jpg"
              zoom={12}
            />

            <FaqSection />
            <CustomerReviews />
          </Box>

          <TourBookingSidebar
            ticketPrice={499}
            perBookingPrice={50}
            servicePrices={{ adult: 40, youth: 35, child: 25 }}
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

export default ItineraryKashmir;
