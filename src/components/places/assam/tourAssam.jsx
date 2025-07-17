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

const assamTour = {
  title: "Assam Wildlife & Tea Trail",
  rating: 4.7,
  reviewCount: 12,
  imageUrl: "/assam-cover.jpg",
  people: 18,
  duration: "4 Days",
  location: "Kaziranga, Assam",
  price: 429,
  photos: 6,
  hasVideo: true,
  includedItems: ["Jeep Safari", "Tea Estate Tour", "Cultural Show"],
  notIncludedItems: ["Travel Insurance", "Tips"],
  amenities: ["Wildlife", "Tea Tasting", "Local Cuisine"],
};

const assamMedia = [
  { type: "image", src: "/public/assam2.jpg" },
  { type: "image", src: "/assam2.jpg" },
  { type: "image", src: "/assam3.jpg" },
  { type: "image", src: "/assam4.jpg" },
  { type: "image", src: "/assam5.jpg" },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival in Guwahati & Drive to Kaziranga",
    description: "Pickup from airport and transfer to Kaziranga National Park.",
  },
  {
    day: 2,
    title: "Kaziranga Safari",
    description: "Early morning jeep safari. Evening cultural dance performance.",
  },
  {
    day: 3,
    title: "Tea Garden Visit",
    description: "Guided tea estate tour and tasting experience.",
  },
  {
    day: 4,
    title: "Departure",
    description: "Leisure breakfast and transfer to airport.",
  },
];

const ItineraryAssam = () => {
  const selectedTour = assamTour;

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

        <MediaGallery mediaItems={assamMedia} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <TourDetailSection
              description="Explore the wild beauty of Assam with lush tea gardens, vibrant cultures, and the thrill of jungle safaris."
              includedItems={selectedTour.includedItems}
              notIncludedItems={selectedTour.notIncludedItems}
              amenities={selectedTour.amenities}
            />

            <ItinerarySection itinerary={itinerary} title="Tour Plan" />

            <CalendarPriceSection
              title="Calendar & Price"
              monthLabel="October 2025"
              pricePerDay="$429.00"
              highlightDates={[5, 14, 21]}
              disabledDates={[1, 8, 28]}
              daysInMonth={31}
              monthStartsOn={2}
            />

            <TourMap
              title="Tour Map"
              subtitle="Assam – Land of the Rhino"
              location="Kaziranga, Assam"
              coordinates={[26.5775, 93.1711]}
              imageUrl="/images/assam-map.jpg"
              zoom={12}
            />

            <FaqSection />
            <CustomerReviews />
          </Box>

          <TourBookingSidebar
            ticketPrice={429}
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

export { ItineraryAssam };
export default ItineraryAssam;
