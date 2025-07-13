import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Stack,
  Tooltip,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideocamIcon from '@mui/icons-material/Videocam';

export default function recommendedTours({
  title,
  rating,
  reviewCount,
  imageUrl,
  people,
  duration,
  location,
  price,
  photos,
  hasVideo,
}) {
  return (
    <Card sx={{ width: 300, borderRadius: 3, boxShadow: 1 }}>
      {/* Image Section */}
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="180"
          image={imageUrl}
          alt={title}
          sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        />
        {/* Media Tags */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            zIndex: 2,
          }}
        >
          {photos > 0 && (
            <Tooltip title={`${photos} photos`}>
              <Box
                px={1}
                py={0.5}
                bgcolor="white"
                borderRadius={2}
                fontSize={12}
                display="flex"
                alignItems="center"
              >
                <PhotoCameraIcon sx={{ fontSize: 14, mr: 0.5 }} />
                {photos}
              </Box>
            </Tooltip>
          )}
          {hasVideo && (
            <Box
              px={1}
              py={0.5}
              bgcolor="white"
              borderRadius={2}
              fontSize={12}
              display="flex"
              alignItems="center"
            >
              <VideocamIcon sx={{ fontSize: 14, mr: 0.5 }} />
            </Box>
          )}
        </Stack>

        {/* Favorite Icon */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            bgcolor: 'white',
            '&:hover': { bgcolor: 'grey.100' },
          }}
        >
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Content */}
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <StarIcon sx={{ fontSize: 16, color: '#f8b60d' }} />
          <Typography variant="body2" fontWeight="bold">
            {rating}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            ({reviewCount} Rating{reviewCount > 1 ? 's' : ''})
          </Typography>
        </Stack>

        <Typography fontWeight="bold" mt={1}>
          {title}
        </Typography>

        <Stack direction="row" spacing={2} mt={1} alignItems="center">
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <PeopleAltIcon fontSize="small" />
            <Typography variant="caption">{people} People</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <CalendarTodayIcon fontSize="small" />
            <Typography variant="caption">{duration}</Typography>
          </Stack>
        </Stack>

        <Box mt={1} display="flex" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <LocationOnIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">
              {location}
            </Typography>
          </Stack>
          <Typography fontWeight="bold" color="primary">
            ${price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
