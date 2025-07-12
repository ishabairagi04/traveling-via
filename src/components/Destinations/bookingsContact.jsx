import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Stack,
  Button,
  Divider,
} from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const ORANGE = '#d8a154';

function DashedCircleIcon({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: `3px dashed ${ORANGE}`,
        width: 40,
        height: 40,
        color: ORANGE,
        flexShrink: 0,
      }}
    >
      {children}
    </Box>
  );
}

export default function TravelInfoSection() {
  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: 'auto',
        px: { xs: 3, md: 6 },
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'visible',
        bgcolor: 'white',
      }}
    >
      <Grid container spacing={6} alignItems="center" justifyContent="space-between" wrap="nowrap" sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
        {/* Left side */}
        <Grid item xs={12} md={6} sx={{ maxWidth: 520 }}>
          <Typography
            component="h2"
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.9rem', md: '1x`.75rem' },
              mb: 1,
              lineHeight: 1.2,
              textAlign: 'left',
              fontFamily: "'Poppins', sans-serif",
              color: 'text.primary',
              whiteSpace: 'pre-line',
            }}
          >
            Escape the hustle and bustle, enjoy the perfect vacation.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: 12,
              lineHeight: 1.6,
              mb: 5,
              fontWeight: 400,
              maxWidth: 440,
              fontFamily: "'Poppins', sans-serif",
              textAlign: 'left',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar neque non pretium
            volutpat. Proin finibus dignissim egestas. Sed a nisi quis dui malesuada pellentesque.
            Donec eget nulla turpis. Nullam commodo sapien id placerat venenatis.
          </Typography>
<Grid container spacing={5} sx={{ display: 'flex', flexWrap: 'nowrap', maxWidth: 440, mb: 5 }}>

            <Grid item xs={6}>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <DashedCircleIcon>
                    <TravelExploreOutlinedIcon sx={{ fontSize: 20 }} />
                  </DashedCircleIcon>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 15,
                      fontFamily: "'Poppins', sans-serif",
                      color: 'text.primary',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Best Travel Agents
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 13,
                    color: 'text.secondary',
                    maxWidth: 210,
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  Pellentesque habitant morbi tristique senectus netus et malesuada fames ac
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={6}>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <DashedCircleIcon>
                    <LocationOnOutlinedIcon sx={{ fontSize: 20 }} />
                  </DashedCircleIcon>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 15,
                      fontFamily: "'Poppins', sans-serif",
                      color: 'text.primary',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Travel Guidelines
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 13,
                    color: 'text.secondary',
                    maxWidth: 210,
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  Pellentesque habitant morbi tristique senectus netus et malesuada fames ac
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ mb: 6, maxWidth: 440 }} />

          {/* Booking & button */}
          <Stack direction="row" spacing={4} alignItems="center" sx={{ maxWidth: 440 }}>
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{
                
                borderRadius: 2,
               
              
                flexShrink: 0,
                minWidth: 140,
              }}
            >
              <LocalPhoneIcon sx={{ fontSize: 24,backgroundColor: ORANGE,    color: 'white',}} />
              <Box>
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 400,
                    lineHeight: 1,
                      color: 'grey',
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Booking Number
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                    fontFamily: "'Poppins', sans-serif",
                       color: ORANGE,
                  }}
                >
                  (229) 555–0109
                </Typography>
              </Box>
            </Stack>

            <Button
              variant="contained"
              sx={{
                backgroundColor: ORANGE,
                px: 3,
                py: 1.5,
                position: 'relative',
                left: 80,
                borderRadius: 2,
                fontWeight: 700,
                fontSize: 14,
                textTransform: 'none',
                boxShadow: 'none',
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: '#b58832',
                },
              }}
            >
              Booking Now
            </Button>
          </Stack>
        </Grid>

        {/* Right Images */}
        <Grid item xs={12} md={6} sx={{ position: 'relative', minHeight: 420, mt: { xs: 6, md: 0 }, pl: { md: 3 } }}>
          {/* Big circle */}
          <Box
            sx={{
              width: 440,
              height: 440,
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'absolute',
              top: 0,
              right: -40,
              boxShadow: '0 10px 25px rgb(0 0 0 / 0.1)',
              '& img': { width: '100%', height: '100%', objectFit: 'cover' },
              zIndex: 2,
            }}
          >
            <img src="/bookingcontact1.webp" alt="Lake" loading="lazy" />
          </Box>

          {/* Small circle */}
          <Box
            sx={{
              width: 260,
              height: 260,
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'absolute',
              bottom: -60,
              right: 140,
              border: '6px solid white',
              boxShadow: '0 8px 22px rgb(0 0 0 / 0.15)',
              zIndex: 3,
              '& img': { width: '100%', height: '100%', objectFit: 'cover' },
            }}
          >
            <img src="/bookingcontact-2.webp" alt="Mountain" loading="lazy" />
          </Box>

          {/* Faint outline circle */}
          <Box
            sx={{
              width: 480,
              height: 480,
              borderRadius: '50%',
              border: '1px solid #eee',
              position: 'absolute',
              top: 0,
              right: -10,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
