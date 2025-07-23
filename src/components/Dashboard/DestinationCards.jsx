// src/components/Dashboard/DestinationCards.jsx
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const destinations = [
  {
    title: 'Goa', subtitle: 'Beach Destination',
    desc: 'Goa is a state in western India famous for its beaches, colonial architecture, and seafood.',
    image: '/IMG-20230914-WA0013.jpg',
  },
  {
    title: 'Maldives', subtitle: 'Eco-Tourism',
    desc: 'The Maldives is a tropical island nation known for its luxurious resorts, clear waters, and marine life.',
    image: '/maldives.jpg',
  },
  {
    title: 'Bali', subtitle: 'Cultural Destination',
    desc: 'Bali is an Indonesian island with beautiful beaches, lush forests, and rich culture.',
    image: '/bali.jpg',
  },
];

const DestinationCards = () => (
  <Box>
    <Box display="flex" justifyContent="space-between" mb={2}>
      <Typography variant="h6">Touristo – Most Popular Destination</Typography>
      <Typography sx={{ cursor: 'pointer', color: 'gray' }}>Explore More</Typography>
    </Box>
    <Grid container spacing={2}>
      {destinations.map((dest, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <Card>
            <CardMedia image={dest.image} title={dest.title} sx={{ height: 140 }} />
            <CardContent>
              <Typography variant="subtitle2" color="primary">{dest.subtitle}</Typography>
              <Typography variant="h6">{dest.title}</Typography>
              <Typography variant="body2">{dest.desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default DestinationCards;
