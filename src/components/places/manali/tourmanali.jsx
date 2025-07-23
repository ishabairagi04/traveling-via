"use client";

import React, { useState } from "react";
import {
  CalendarToday,
  Language,
  People,
  AccessTime,
  AttachMoney,
  Place,
  Star,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Grid,
  Divider,
} from "@mui/material";

import TourMap from "../../ReUse-Component/maps";
import FaqSection from "../../ReUse-Component/FaQ";
import CustomerReviews from "../../ReUse-Component/CustomerReviews";
import TourSuggestionCard from "../../ReUse-Component/ToursCard";
import MediaGallery from "../../ReUse-Component/MediaGallery";
import ItinerarySection from "../../ReUse-Component/ItinerarySection";
import CalendarPriceSection from "../../ReUse-Component/CalendarPriceSection";
import TourBookingSidebar from "../../ReUse-Component/BookingSidebar";
import TourDetailSection from "../../ReUse-Component/description";

// ✅ Manali Theme
const manaliTheme = {
  palette: {
    primary: 'rgb(42, 157, 143)',     // teal
    secondary: 'rgb(42, 157, 143)',
    accent: '#00BCD4',                // cyan
      background: "rgba(230, 247, 255, 0.6)",
  text: "#013a63",
  highlight: "#90e0ef",
  hover: "#00b4d8",
  },
};

const suggestedTours = [
  {
    title: "Lucerne and St. Moritz Relaxed Start",
    rating: 5,
    reviewCount: 1,
    imageUrl: "/slide-02.webp",
    people: 20,
    duration: "2 Days",
    location: "Andermatt",
    price: 359,
    photos: 5,
    hasVideo: true,
    includedItems: [
      "Professional Guide",
      "Guided Wildlife Watching",
      "Optional Activities",
      "Rafting Equipment",
    ],
    notIncludedItems: ["Insurance", "Tips", "Drinks"],
    amenities: ["Camping", "Cuisine", "Photography"],
  },
];

const recommendedTours = [...suggestedTours];

const manaliMedia = [
  { type: "image", src: "/public/manali.jpg" },
  { type: "image", src: "/manali2.jpg" },
  { type: "image", src: "/manali3.jpg" },
  { type: "image", src: "/manali.jpg" },
  { type: "image", src: "/manali1.jpg" },
];

const itinerary = [
  {
    day: 1,
    title: "Delhi - Shimla (340KM/7-8 Hrs)",
    description:
      "Arrival at New Delhi Airport. On your arrival, you will be greeted by the driver and proceed for the onward journey to Shimla.",
  },
  {
    day: 2,
    title: "Shimla Local Sightseeing",
    description:
      "Check-in at hotel and visit Jhaku Temple, Mall Road, The Ridge and Kufri. Return to hotel for dinner and overnight stay.",
  },
  {
    day: 3,
    title: "Shimla - Narkanda",
    description:
      "After breakfast, proceed to Narkanda. Visit Hatu Peak and check-in to Homestay/Hotel. Dinner and overnight stay.",
  },
];

const TourBookingPage = () => {
  const selectedTour = suggestedTours[0];
  const theme = manaliTheme.palette;

  return (
   <Box
  sx={{
    background: "linear-gradient(to bottom, #cde2f5, #e5f3fd, #f2f9ff)",
    minHeight: "100vh",
    py: 4,
    mt: 0,
  }}
>

      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4, fontSize: "0.875rem" }}>
          <Link color={theme.primary} href="#" underline="hover">
            Home
          </Link>
          <Link color={theme.primary} href="#" underline="hover">
            Search Result
          </Link>
          <Link color={theme.primary} href="#" underline="hover">
            Booking Options
          </Link>
          <Typography color={theme.text}>
            Lucerne and St. Moritz Relaxed Start
          </Typography>
        </Breadcrumbs>

        {/* Tour Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: "2rem",
              color: theme.text,
              mb: 1,
            }}
          >
            {selectedTour.title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Star sx={{ color: "#ffc107", mr: 0.5, fontSize: "1rem" }} />
              <Typography sx={{ fontWeight: 500, fontSize: "0.875rem" }}>
                4.8
              </Typography>
              <Typography
                sx={{ ml: 0.5, fontSize: "0.875rem", color: theme.primary }}
              >
                ({selectedTour.reviewCount} reviews)
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: "16px", bgcolor: "#dee2e6" }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Place
                sx={{ color: theme.accent, fontSize: "1rem", mr: 0.5 }}
              />
              <Typography sx={{ fontSize: "0.875rem", color: theme.primary }}>
                {selectedTour.location}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Gallery */}
        <MediaGallery mediaItems={manaliMedia} />

        {/* Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 4,
          }}
        >
          {/* Left Column */}
          <Box sx={{ flex: 1 }}>
            <TourDetailSection
              description="Embark on an extraordinary adventure..."
              includedItems={selectedTour.includedItems}
              notIncludedItems={selectedTour.notIncludedItems}
              amenities={selectedTour.amenities}
            />

            <ItinerarySection itinerary={itinerary} title="Tour Plan" />

            <CalendarPriceSection
              title="Calendar & Price"
              monthLabel="July 2025"
              pricePerDay="₹359.00"
              highlightDates={[17, 22]}
              disabledDates={[5, 10, 15, 28]}
              daysInMonth={31}
              monthStartsOn={1}
            />

            <TourMap
              title="Tour Map"
              subtitle="Manali – Adventure & Snow"
              location="Manali, Himachal Pradesh"
              coordinates={[32.2396, 77.1887]}
              imageUrl="/images/manali-thumb.jpg"
              zoom={13}
            />

            <FaqSection />
            <CustomerReviews />
          </Box>

          {/* Right Column */}
          <TourBookingSidebar
            ticketPrice={359}
            perBookingPrice={30}
            servicePrices={{ adult: 30, youth: 25, child: 20 }}
            onBook={() => console.log("Booking Confirmed")}
            theme={manaliTheme}
          />
        </Box>

        {/* Suggested Tours */}
        <Box mt={8}>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={2}
            sx={{ color: theme.text }}
          >
            You may like
          </Typography>
          <Grid container spacing={2}>
            {recommendedTours.map((tour, index) => (
              <Grid item key={index}>
                <TourSuggestionCard {...tour} theme={manaliTheme} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default TourBookingPage;
