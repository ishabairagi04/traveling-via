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

const goaTour = {
  title: "Beachside Bliss in Goa",
  rating: 4.7,
  reviewCount: 31,
  imageUrl: "/goa-cover.jpg",
  people: 25,
  duration: "3 Days",
  location: "North & South Goa",
  price: 399,
  photos: 6,
  hasVideo: true,
  includedItems: ["Beach Stay", "Cruise Dinner", "Fort Tour"],
  notIncludedItems: ["Airfare", "Drinks"],
  amenities: ["Water Sports", "Nightlife", "Sunbathing"],
};

const goaMedia = [
  { type: "image", src: "/goa.jpg" },
  { type: "image", src: "/goa2.jpg" },
  { type: "image", src: "/goa1.jpg" },
  { type: "image", src: "/kerala2.jpg" },
  { type: "image", src: "/maldives2.jpg" },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival & North Goa Exploration",
    description: "Visit Fort Aguada, Baga Beach, and enjoy a sunset cruise.",
  },
  {
    day: 2,
    title: "South Goa Beaches",
    description: "Explore Colva and Palolem beaches and visit Cabo De Rama Fort.",
  },
  {
    day: 3,
    title: "Shopping & Departure",
    description: "Flea market shopping followed by airport transfer.",
  },
];

const ItineraryGoa = () => {
  const selectedTour = goaTour;

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh", py: 4, mt: 20 }}>
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

        <MediaGallery mediaItems={goaMedia} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <TourDetailSection
              description="Experience the tropical magic of Goa with stunning beaches, vibrant nightlife, and rich Portuguese heritage."
              includedItems={selectedTour.includedItems}
              notIncludedItems={selectedTour.notIncludedItems}
              amenities={selectedTour.amenities}
            />

            <ItinerarySection itinerary={itinerary} title="Tour Plan" />

            <CalendarPriceSection
              title="Calendar & Price"
              monthLabel="October 2025"
              pricePerDay="$399.00"
              highlightDates={[5, 12, 25]}
              disabledDates={[1, 8, 20]}
              daysInMonth={31}
              monthStartsOn={2}
            />

            <TourMap
              title="Tour Map"
              subtitle="Goa – Sun, Sand & Sea"
              location="North & South Goa"
              coordinates={[15.2993, 74.1240]}
              imageUrl="/images/goa-map.jpg"
              zoom={10}
            />

            <FaqSection />
            <CustomerReviews />
          </Box>

          <TourBookingSidebar
            ticketPrice={399}
            perBookingPrice={40}
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

export default ItineraryGoa;
