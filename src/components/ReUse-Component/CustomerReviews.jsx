import {
  Avatar,
  Box,
  Typography,
  TextField,
  Grid,
  Rating,
  Button,
  Stack,
  IconButton
} from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

export default function CustomerReviews() {
  const [form, setForm] = useState({ name: '', email: '', comment: '', rating: 0 });

  return (
    <Box mt={8}>
      {/* Section Heading */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          Customers Reviews
        </Typography>
        <Typography variant="body2">
          <strong>1 Review</strong> &nbsp; (5 out of 5)
        </Typography>
      </Stack>

      {/* Comment Count */}
      <Typography variant="h6" fontWeight="bold" mt={4} mb={2}>
        1 Comment
      </Typography>

      {/* Review Card */}
      <Box display="flex" gap={2} mb={4}>
        <Avatar sx={{ width: 48, height: 48 }}>O</Avatar>
        <Box flex={1}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography fontWeight="bold">Oskar Madsen</Typography>
              <Typography variant="caption" color="text.secondary">
                October 16, 2024
              </Typography>
            </Box>
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton size="small">
                <ReplyIcon fontSize="small" />
              </IconButton>
              <Rating value={5} readOnly size="small" />
            </Stack>
          </Stack>
          <Typography mt={1}>
            We had an amazing experience in South Korea thanks to Bamba. The itinerary was well-planned, 
            the transportation was comfortable, and the tours were unforgettable. We would definitely book with them again!
          </Typography>
        </Box>
      </Box>

      {/* Comment Form */}
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </Grid>
      </Grid>

      <Box mb={2}>
        <Typography fontWeight="bold" variant="body2" mb={0.5}>
          Rating:
        </Typography>
        <Rating
          name="user-rating"
          value={form.rating}
          onChange={(_, newValue) => setForm({ ...form, rating: newValue })}
          emptyIcon={<StarIcon style={{ opacity: 0.4 }} fontSize="inherit" />}
        />
      </Box>

      <TextField
        label="Comment"
        placeholder="Your Comment"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={form.comment}
        onChange={(e) => setForm({ ...form, comment: e.target.value })}
      />

      <Box mt={2}>
        <Button variant="contained" sx={{ borderRadius: 2 }}>
          Submit Review
        </Button>
      </Box>
    </Box>
  );
}
