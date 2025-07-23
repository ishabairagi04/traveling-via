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

import destinationThemes from "../../ReUse-Component/theme"; // ✅ Import your theme file

import TourMap from "../../ReUse-Component/maps";
import FaqSection from "../../ReUse-Component/FaQ";
import CustomerReviews from "../../ReUse-Component/CustomerReviews";
import TourSuggestionCard from "../../ReUse-Component/ToursCard";
import MediaGallery from "../../ReUse-Component/MediaGallery";
import ItinerarySection from "../../ReUse-Component/ItinerarySection";
import CalendarPriceSection from "../../ReUse-Component/CalendarPriceSection";
import TourBookingSidebar from "../../ReUse-Component/BookingSidebar";
import TourDetailSection from "../../ReUse-Component/description";

// ✅ Static data
const keralaTour = {
  title: "Backwaters of Kerala Escape",
  rating: 4.8,
  reviewCount: 24,
  imageUrl: "/kerala-cover.jpg",
  people: 20,
  duration: "5 Days",
  location: "Alleppey, Kerala",
  price: 549,
  photos: 8,
  hasVideo: true,
  includedItems: ["Houseboat Stay", "Spice Plantation Visit", "Cultural Show"],
  notIncludedItems: ["Flight", "Alcoholic Drinks"],
  amenities: ["Ayurveda", "Cuisine", "Boating"],
};

const keralaMedia = [
  { type: "image", src: "/public/kerala1.jpg" },
  { type: "image", src: "/public/kerala2.jpg" },
  { type: "image", src: "/kerala2.jpg" },
  { type: "image", src: "/kerala1.jpg" },
  { type: "image", src: "/kerala1.jpg" },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival in Cochin",
    description: "Arrive and transfer to hotel. Evening at Marine Drive.",
  },
  {
    day: 2,
    title: "Drive to Munnar",
    description: "Explore tea gardens, waterfalls, and spice plantations.",
  },
  {
    day: 3,
    title: "Alleppey Houseboat",
    description: "Cruise through Kerala’s famous backwaters with local meals.",
  },
  {
    day: 4,
    title: "Kumarakom Visit",
    description: "Enjoy bird sanctuary and sunset views by the lake.",
  },
  {
    day: 5,
    title: "Departure",
    description: "Check-out and transfer to airport.",
  },
];

const ItineraryKerala = () => {
  const selectedTour = keralaTour;
  const theme = destinationThemes.kerala; // ✅ get theme

  return (
    <Box sx={{ bgcolor: theme?.background, minHeight: "100vh", py: 4, mt: 20 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4, fontSize: "0.875rem" }}>
          <Link color="inherit" to="/">Home</Link>
          <Link color="inherit" to="/search">Search Result</Link>
          <Typography color="text.primary">{selectedTour.title}</Typography>
        </Breadcrumbs>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 700, fontSize: "2rem", color: theme?.text, mb: 1 }}
          >
            {selectedTour.title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Star sx={{ color: theme?.accent, mr: 0.5, fontSize: "1rem" }} />
              <Typography sx={{ fontWeight: 500, fontSize: "0.875rem" }}>
                {selectedTour.rating}
              </Typography>
              <Typography sx={{ ml: 0.5, fontSize: "0.875rem", color: theme?.text }}>
                ({selectedTour.reviewCount} reviews)
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ height: "16px", bgcolor: theme?.hover }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Place sx={{ color: theme?.primary, fontSize: "1rem", mr: 0.5 }} />
              <Typography sx={{ fontSize: "0.875rem", color: theme?.text }}>
                {selectedTour.location}
              </Typography>
            </Box>
          </Box>
        </Box>

        <MediaGallery mediaItems={keralaMedia} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <TourDetailSection
              description="A peaceful retreat into Kerala’s emerald backwaters, traditional houseboats, and lush green hills."
              includedItems={selectedTour.includedItems}
              notIncludedItems={selectedTour.notIncludedItems}
              amenities={selectedTour.amenities}
            />

            <ItinerarySection itinerary={itinerary} title="Tour Plan" />

            <CalendarPriceSection
              title="Calendar & Price"
              monthLabel="September 2025"
              pricePerDay="$549.00"
              highlightDates={[3, 12, 18]}
              disabledDates={[1, 9, 25]}
              daysInMonth={30}
              monthStartsOn={1}
            />

            <TourMap
              title="Tour Map"
              subtitle="Kerala – God's Own Country"
              location="Alleppey, Kerala"
              coordinates={[9.4981, 76.3388]}
              imageUrl="/images/kerala-map.jpg"
              zoom={10}
            />

            <FaqSection />
            <CustomerReviews />
          </Box>

          <TourBookingSidebar
            ticketPrice={549}
            perBookingPrice={60}
            servicePrices={{ adult: 45, youth: 35, child: 25 }}
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

export default ItineraryKerala;
