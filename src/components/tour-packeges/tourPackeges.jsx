// src/pages/PackagesPage.jsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import { LocationOn, Star, Discount } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const tourPackages = [
  {
    title: "Manali Adventure",
    price: "$420",
    originalPrice: "$500",
    image: "/manali3.jpg",
    tag: "Popular",
    rating: 4.7,
    duration: "5N/6D",
    location: "Manali, India",
    description: "Thrilling mountain adventures and scenic beauty await you.",
    highlights: ["Solang Valley", "Rohtang Pass", "Hidimba Temple", "Old Manali"],
    category: "Adventure",
    link: '/places/manali/tour',
  },
  {
    title: "Kashmir Paradise",
    price: "$450",
    originalPrice: "$530",
    image: "/manali.jpg",
    tag: "15% OFF",
    rating: 4.8,
    duration: "4N/5D",
    location: "Srinagar, India",
    description: "Heaven on earth with breathtaking landscapes and serene lakes.",
    highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Shikara Ride"],
    category: "Adventure",
    link: "/places/kashmir/tour",
  },
  {
    title: "Kerala Backwaters",
    price: "$500",
    originalPrice: "$600",
    image: "/kerala1.jpg",
    tag: "Hot Deal",
    rating: 4.6,
    duration: "6N/7D",
    location: "Kerala, India",
    description: "Cruise through backwaters and relax amid lush greenery.",
    highlights: ["Alleppey", "Munnar", "Thekkady", "Kumarakom"],
    category: "Adventure",
    link: "/places/kerala/tour",
  },
  {
    title: "Darjeeling Hills",
    price: "$370",
    originalPrice: "$450",
    image: "/darjeeling1.jpg",
    rating: 4.5,
    duration: "4N/5D",
    location: "Darjeeling, India",
    description: "Hill station charm with tea gardens and Himalayan views.",
    highlights: ["Tiger Hill", "Toy Train", "Batasia Loop", "Tea Estates"],
    category: "Adventure",
    link: "/places/darjeeling/tour",
  },
  {
    title: "Ujjain Pilgrimage",
    price: "$320",
    originalPrice: "$390",
    image: "/ujjain1.jpg",
    tag: "Spiritual",
    rating: 4.4,
    duration: "3N/4D",
    location: "Ujjain, India",
    description: "Sacred journey to one of the oldest cities in India.",
    highlights: ["Mahakaleshwar Temple", "Kumbh Mela", "Ram Ghat", "Kal Bhairav Temple"],
    category: "Spiritual",
    link: "/places/ujjain/tour",
  },
  {
    title: "Maldives Escape",
    price: "$1800",
    originalPrice: "$2100",
    image: "/maldives1.jpg",
    tag: "Luxury",
    rating: 4.9,
    duration: "5N/6D",
    location: "Male, Maldives",
    description: "Overwater villas and turquoise waters for perfect relaxation.",
    highlights: ["Private Villa", "Snorkeling", "Spa Retreat", "Sunset Cruise"],
    category: "Adventure",
    link: "/places/maldives/tour",
  },
  {
    title: "Assam Serenity",
    price: "$390",
    originalPrice: "$470",
    image: "/assam1.jpg",
    rating: 4.5,
    duration: "4N/5D",
    location: "Assam, India",
    description: "Peaceful landscapes and rich cultural heritage of Northeast India.",
    highlights: ["Kaziranga National Park", "Brahmaputra River", "Tea Gardens", "Kamakhya Temple"],
    category: "Adeventure",
    link: "/places/assam/tour",
  },
  {
    title: "Goa Paradise",
    price: "$390",
    originalPrice: "$470",
    image: "/goa.jpg",
    rating: 4.5,
    duration: "4N/5D",
    location: "Goa, India",
    description: "Beauty of the nature and some wavy beachy vibes of south India.",
    highlights: ["Baga Beach", "Rave Parties", "Churches", "Beaches"],
    category: "Adventure",
    link: "/places/goa/tour",
  },
  // New Educational Card
  {
    title: "Rajasthan Heritage",
    price: "$350",
    originalPrice: "$420",
    image: "/rajasthan.jpg",
    tag: "Educational",
    rating: 4.3,
    duration: "3N/4D",
    location: "Rajasthan, India",
    description: "Explore the rich cultural heritage and history of Rajasthan.",
    highlights: ["Amber Fort", "City Palace", "Hawa Mahal", "Jaisalmer Fort"],
    category: "Educational",
    link: "/places/Educational/IndoreRajasthan/IndRaj",
  },
 
  {
    title: "Indore – Hyderabad Educational Tour",
    price: "$400",
    originalPrice: "$470",
    image: "/indore-hyderabad.jpg",
    tag: "Educational",
    rating: 4.4,
    duration: "4N/5D",
    location: "Indore, Hyderabad",
    description: "Explore the educational and cultural landmarks of Indore and Hyderabad.",
    highlights: ["Charminar", "Birla Mandir", "Science Museum", "Local Markets"],
    category: "Educational",
    link: "/places/Educational/Hyderabad/SclHyderabad",
  },
  {
    title: "Ahmedabad Educational Tour",
    price: "$380",
    originalPrice: "$450",
    image: "/ahmedabad.jpg",
    tag: "Educational",
    rating: 4.3,
    duration: "3N/4D",
    location: "Ahmedabad, India",
    description: "Dive into the rich history and architecture of Ahmedabad with guided tours.",
    highlights: ["Sabarmati Ashram", "Science City", "Jama Masjid", "Pol Walks"],
    category: "Educational",
    link: "/places/Educational/Ahemdabad/SclAhemdabad",
  },
  {
    title: "Manali Educational Experience",
    price: "$420",
    originalPrice: "$500",
    image: "/manali-educational.jpg",
    tag: "Educational",
    rating: 4.5,
    duration: "5N/6D",
    location: "Manali, India",
    description: "Learn about Himalayan ecology and cultural traditions during this immersive tour.",
    highlights: ["Hadimba Temple", "Museum Visit", "Nature Walks", "Local Cuisine"],
    category: "Educational",
    link: "/places/Educational/Manali/SclManali",
  },
  // New Adventure Card
  {
    title: "Rishikesh Rafting",
    price: "$280",
    originalPrice: "$350",
    image: "/rishikesh.jpg",
    tag: "Adventure",
    rating: 4.7,
    duration: "2N/3D",
    location: "Rishikesh, India",
    description: "Feel the adrenaline rush with river rafting and camping experiences.",
    highlights: ["River Rafting", "Camping", "Yoga", "Waterfalls"],
    category: "Adventure",
    link: "/places/rishikesh/tour",
  },
  // New Spiritual Card
  {
    title: "Haridwar Spiritual Retreat",
    price: "$300",
    originalPrice: "$380",
    image: "/haridwar.jpg",
    tag: "Spiritual",
    rating: 4.5,
    duration: "3N/4D",
    location: "Haridwar, India",
    description: "Immerse yourself in rituals and spiritual practices on the banks of the Ganges.",
    highlights: ["Ganga Aarti", "Temples", "Ashrams", "Meditation Workshops"],
    category: "Spiritual",
    link: "/places/haridwar/tour",
  },
];

const TourPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 const filteredPackages = selectedCategory === "All"
    ? tourPackages
    : tourPackages.filter(pkg => pkg.category === selectedCategory);


  return (
    <section className="w-full min-h-screen mt-10 bg-gradient-to-b from-[#cde2f5] via-[#e5f3fd] to-[#3c8ed5]">
      <Box sx={{ minHeight: "100vh" }}>
        <Navbar theme="manali" />

        {/* Hero Banner */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 300, md: 400 },
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="/maldives.jpg"
            alt="Explore Destinations"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 2,
              display: "flex",
              alignItems: "flex-end",
              px: 2,
              pb: 6,
              color: "#fff",
            }}
          >
            <Box sx={{ maxWidth: "1280px", mx: "auto" }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", md: "3rem" },
                  textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
                }}
              >
                Explore Our Packages
              </Typography>

              <Typography variant="body2" sx={{ mt: 1, fontSize: "0.875rem" }}>
                <Box component="span" sx={{ color: "skyblue", cursor: "pointer" }}>Home</Box> /{" "}
                <Box component="span" sx={{ color: "skyblue", cursor: "pointer" }}>Packages</Box>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Content */}
        <Container maxWidth="xl" sx={{ py: 6 }}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight="bold" color="primary" mb={1}>
              OUR TOUR PACKAGES
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" maxWidth="800px" mx="auto">
              Choose from our carefully curated selection of tours that offer unforgettable experiences
              at the best prices with exclusive discounts
            </Typography>
          </Box>

          {/* Filter Buttons */}
          <Box textAlign="center" mb={4}>
            {["All", "Educational", "Adventure", "Spiritual"].map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "contained" : "outlined"}
                sx={{
                  mx: 1,
                  fontWeight: "bold",
                  borderRadius: 2,
                }}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </Box>

          {/* Grid */}
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
            sx={{ mx: "auto", px: { xs: 1, sm: 2 }, maxWidth: 1400 }}
          >
            {filteredPackages.map((pkg, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4} lg={4}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    width: "100%",
                    maxWidth: 360,
                    mx: "auto",
                    borderRadius: 3,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", height: 200 }}>
                    <CardMedia
                      component="img"
                      image={pkg.image}
                      alt={pkg.title}
                      sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                    />
                    {pkg.tag && (
                      <Chip
                        label={pkg.tag}
                        size="small"
                        icon={pkg.tag.includes("OFF") ? <Discount fontSize="small" /> : null}
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          backgroundColor: pkg.tag.includes("OFF") ? "#ffd700" : "#ff6b6b",
                          color: "#000",
                          fontWeight: "bold",
                          boxShadow: 1,
                        }}
                      />
                    )}
                  </Box>

                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                        <LocationOn color="primary" fontSize="small" />
                        <Typography variant="subtitle2" color="primary">
                          {pkg.location}
                        </Typography>
                      </Stack>

                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {pkg.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          minHeight: "3em",
                        }}
                      >
                        {pkg.description}
                      </Typography>

                      <Box mt={2}>
                        <Typography variant="subtitle2" fontWeight="bold" mb={1}>
                          Tour Highlights:
                        </Typography>
                        <Grid container spacing={1}>
                          {pkg.highlights.slice(0, 4).map((highlight, i) => (
                            <Grid item xs={6} key={i}>
                              <Typography
                                variant="body2"
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <Star color="primary" fontSize="small" sx={{ mr: 0.5 }} />
                                {highlight}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Star color="warning" />
                        <Typography variant="subtitle1" fontWeight="bold">
                          {pkg.rating}
                        </Typography>
                      </Stack>
                      <Box textAlign="right">
                        {pkg.originalPrice && (
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ textDecoration: "line-through" }}
                          >
                            {pkg.originalPrice}
                          </Typography>
                        )}
                        <Typography variant="h6" fontWeight="bold" color="primary">
                          {pkg.price}
                          <Typography component="span" variant="body2" color="text.secondary">
                            /person
                          </Typography>
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>

                  <Box sx={{ p: 2, pt: 0 }}>
                    <Link to={pkg.link} style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{
                          backgroundColor: "#3f51b5",
                          color: "#fff",
                          fontWeight: "bold",
                          py: 1.5,
                          borderRadius: 2,
                          "&:hover": {
                            backgroundColor: "#303f9f",
                          },
                        }}
                      >
                        BOOK NOW
                      </Button>
                    </Link>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={6}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 6,
                py: 1.5,
                borderRadius: 2,
                fontWeight: "bold",
                borderColor: "#3f51b5",
                color: "#3f51b5",
                "&:hover": {
                  backgroundColor: "#3f51b5",
                  color: "#fff",
                },
              }}
            >
              VIEW ALL PACKAGES
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer theme="manali" />
    </section>
  );
};

export default TourPackages;
