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

const ujjainTour = {
  title: "Spiritual Ujjain Pilgrimage",
  rating: 4.6,
  reviewCount: 14,
  imageUrl: "/ujjain-cover.jpg",
  people: 30,
  duration: "3 Days",
  location: "Ujjain, Madhya Pradesh",
  price: 299,
  photos: 5,
  hasVideo: false,
  includedItems: ["Mahakaleshwar Darshan", "Evening Aarti", "Local Guide"],
  notIncludedItems: ["Food Expenses", "Travel Insurance"],
  amenities: ["Temple Visit", "Photography", "Cultural Insights"],
};

const ujjainMedia = [
  { type: "image", src: "/ujjain1.jpg" },
  { type: "image", src: "/ujjain2.jpg" },
  { type: "image", src: "/ujjain3.jpg" },
  { type: "image", src: "/ujjain4.jpg" },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival and Temple Visit",
    description: "Arrive and visit Mahakaleshwar Temple for evening aarti.",
  },
  {
    day: 2,
    title: "Local Exploration",
    description: "Visit Ram Ghat, Sandipani Ashram, and other temples.",
  },
  {
    day: 3,
    title: "Spiritual Morning and Departure",
    description: "Early morning rituals and return journey.",
  },
];

const ItineraryUjjain = () => {
  const selectedTour = ujjainTour;

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

        <MediaGallery mediaItems={ujjainMedia} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <TourDetailSection
              description="A spiritual retreat to the holy city of Ujjain, one of the Sapta Puri, filled with rituals, devotion, and rich heritage."
              includedItems={selectedTour.includedItems}
              notIncludedItems={selectedTour.notIncludedItems}
              amenities={selectedTour.amenities}
            />

            <ItinerarySection itinerary={itinerary} title="Tour Plan" />

            <CalendarPriceSection
              title="Calendar & Price"
              monthLabel="November 2025"
              pricePerDay="$299.00"
              highlightDates={[2, 10, 17]}
              disabledDates={[5, 8, 23]}
              daysInMonth={30}
              monthStartsOn={6}
            />

            <TourMap
              title="Tour Map"
              subtitle="Ujjain – Land of Mahakal"
              location="Ujjain, Madhya Pradesh"
              coordinates={[23.1793, 75.7849]}
              imageUrl="/images/ujjain-map.jpg"
              zoom={13}
            />

            <FaqSection />
            <CustomerReviews />
          </Box>

          <TourBookingSidebar
            ticketPrice={299}
            perBookingPrice={25}
            servicePrices={{ adult: 30, youth: 25, child: 15 }}
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

export { ItineraryUjjain };
export default ItineraryUjjain;