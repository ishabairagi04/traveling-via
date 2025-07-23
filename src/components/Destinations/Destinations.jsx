import React from 'react';
import {
  ArrowBackIosNew,
  ArrowForwardIos
} from '@mui/icons-material';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Container,
  IconButton,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TravelCarousel from './Carousel';
import TravelInfoSection from '../ReUse-Component/bookingsContact';

const trips = [
  {
    id: 1,
    image: '/slide-03.webp',
    location: 'Scotland',
    title: 'Interlaken Winter – Meet Us There',
    featured: true,
    mediaCount: 5,
    isVideo: true,
    rating: 5,
    people: 20,
    days: 2,
    price: 774,
  },
  {
    id: 2,
    image: '/slide-03.webp',
    location: 'Oxford',
    title: 'GoldenPass Express from Montreux',
    featured: false,
    mediaCount: 5,
    isVideo: true,
    rating: 5,
    people: 20,
    days: 2,
    price: 99,
  },
  {
    id: 3,
    image: '/public/IMG-20250218-WA0252.jpg',
    location: 'Meiringen',
    title: 'Isle Of Skye & The Highlands, Switzer',
    featured: true,
    mediaCount: 5,
    isVideo: true,
    rating: 5,
    people: 20,
    days: 2,
    price: 315,
  },
];

export default function Destination() {
  return (
    <section>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          mt: { xs: 8, sm: 10 },
          height: { xs: '70vh', md: '60vh' },
          backgroundImage: 'url(/slide-03.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.4)',
            zIndex: 1,
          }}
        />
        <Container
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            component={motion.h2}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}
          >
            Discover the World
          </Typography>

          <Typography
            variant="h6"
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            sx={{ mb: 4, px: { xs: 2, md: 0 } }}
          >
            Find your next adventure among our hand-picked destinations.
          </Typography>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button variant="contained" size="large" color="primary">
              Explore Now
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Frame 1 Section */}
      <Box sx={{ py: 10, px: { xs: 2, md: 8 }, bgcolor: '#fff' }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          gutterBottom
          sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
        >
          Explore our exclusive, otherworldly retreats
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
        >
          Discover hand-picked destinations with stunning views and unforgettable experiences.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 3,
            px: 1,
         ml:{lg:20,sm:0},
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {trips.map((trip) => (
            <Card
              key={trip.id}
              sx={{
                position: 'relative',
                minWidth: { xs: 260, sm: 300, md: 320 },
                maxWidth: 320,
                height: 400,
                flex: '0 0 auto',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 4,
              }}
            >
              <CardMedia
                component="img"
                image={trip.image}
                alt={trip.title}
                sx={{ height: '100%', width: '100%', objectFit: 'cover' , }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  p: 2,
                  color: 'white',
                }}
              >
                <Box sx={{ position: 'absolute', top: 12,right:12, display: 'flex', gap: 1 }}>
                  {trip.featured && <Chip label="Featured" color="warning" size="small" />}
                  <Chip label={`🖼 ${trip.mediaCount}`} size="small" />
                  {trip.isVideo && <Chip label="🎥" size="small" />}
                </Box>
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    bgcolor: 'white',
                    '&:hover': { bgcolor: '#f5f5f5' },
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <LocationOnIcon fontSize="small" />
                    <Typography variant="caption">{trip.location}</Typography>
                  </Stack>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {trip.title}
                  </Typography>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={2}>
                      <Typography variant="caption">
                        <PeopleIcon fontSize="small" sx={{ mr: 0.5 }} />
                        {trip.people} People
                      </Typography>
                      <Typography variant="caption">
                        <CalendarTodayIcon fontSize="small" sx={{ mr: 0.5 }} />
                        {trip.days} Days
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2" fontWeight={700}>
                      ${trip.price}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Carousel and Info */}
      <TravelCarousel />
      <TravelInfoSection />
    </section>
  );
}
