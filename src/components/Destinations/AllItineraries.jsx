"use client";
import React from "react";
import { Box, Typography, Grid, Button, Card, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    title: "Manali Adventure",
    image: "/images/manali-thumb.jpg",
    route: "/places/manali/tour",
  },
  {
    title: "Kashmir Paradise",
    image: "/kashmir1.jpg",
    route: "/places/kashmir/tour",
  },
  {
    title: "Kerala Backwaters",
    image: "/kerala1.jpg",
    route: "/places/kerala/tour",
  },
  {
    title: "Darjeeling Hills",
    image: "/darjeeling1.jpg",
    route: "/places/darjeeling/tour",
  },
  {
    title: "Ujjain Pilgrimage",
    image: "/ujjain1.jpg",
    route: "/places/ujjain/tour",
  },
  {
    title: "Maldives Escape",
    image: "/maldives1.jpg",
    route: "/places/maldives/tour",
  },
  {
    title: "Assam Serenity",
    image: "/assam1.jpg",
    route: "/places/assam/tour",
  },
];

const AllItineraries = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", py: 6 }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Explore Tour Itineraries
      </Typography>
      <Grid container spacing={3}>
        {destinations.map((dest, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 2, overflow: "hidden", height: "100%" }}>
              <CardMedia component="img" height="160" image={dest.image} alt={dest.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {dest.title}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate(dest.route)}
                  sx={{ mt: 1 }}
                >
                  View Itinerary
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllItineraries;
