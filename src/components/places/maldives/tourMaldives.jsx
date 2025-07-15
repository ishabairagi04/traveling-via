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

const maldivesTour = {
  title: "Maldives Tropical Luxury Escape",
  rating: 5.0,
  reviewCount: 36,
  imageUrl: "/maldives-cover.jpg",
  people: 10,
  duration: "4 Days",
  location: "Malé, Maldives",
  price: 1299,
  photos: 10,
  hasVideo: true,
  includedItems: ["Luxury Villa Stay", "Snorkeling Session", "Island Hopping", "Spa Package"],
  notIncludedItems: ["International Flights", "Personal Shopping"],
  amenities: ["Beachfront", "All Meals", "Sunset Cruise"],
};

const maldivesMedia = [
  { type: "image", src: "/maldives.jpg" },
  { type: "image", src: "/maldives2.jpg" },
  { type: "image", src: "/maldives1.jpg" },
  { type: "image", src: "/maldives.jpg" },
  { type: "image", src: "/maldives2.jpg" },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival in Malé",
    description: "Transfer to resort by speedboat. Welcome drink and beach walk.",
  },
  {
    day: 2,
    title: "Water Activities",
    description: "Snorkeling, scuba diving or underwater photography.",
  },
  {
    day: 3,
    title: "Spa & Sunset Cruise",
    description: "Relax with a full spa treatment and enjoy the sunset cruise.",
  },
  {
    day: 4,
    title: "Departure",
    description: "Leisure morning and transfer back to Malé Airport.",
  },
];

const ItineraryMaldives = () => {
  const selectedTour = maldivesTour;

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

        <MediaGallery mediaItems={maldivesMedia} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <TourDetailSection
              description="Rejuvenate in the lap of luxury with this hand-crafted Maldivian escape. Relax, unwind, and indulge."
              includedItems={selectedTour.includedItems}
              notIncludedItems={selectedTour.notIncludedItems}
              amenities={selectedTour.amenities}
            />

            <ItinerarySection itinerary={itinerary} title="Tour Plan" />

            <CalendarPriceSection
              title="Calendar & Price"
              monthLabel="November 2025"
              pricePerDay="$1299.00"
              highlightDates={[10, 15, 22]}
              disabledDates={[3, 11, 25]}
              daysInMonth={30}
              monthStartsOn={6}
            />

            <TourMap
              title="Tour Map"
              subtitle="Maldives – Serene Paradise"
              location="Malé, Maldives"
              coordinates={[4.1755, 73.5093]}
              imageUrl="/images/maldives-map.jpg"
              zoom={12}
            />

            <FaqSection />
            <CustomerReviews />
          </Box>

          <TourBookingSidebar
            ticketPrice={1299}
            perBookingPrice={80}
            servicePrices={{ adult: 70, youth: 60, child: 40 }}
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
export { ItineraryMaldives };
export default ItineraryMaldives;
