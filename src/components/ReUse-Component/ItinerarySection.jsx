'use client';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const ItinerarySection = ({ itinerary = [], title = "Tour Plan" }) => {
  const [expanded, setExpanded] = useState({});

  const toggleDay = (day) => {
    setExpanded((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, fontSize: '1.25rem', color: '#212529' }}>
        {title}
      </Typography>
      <Box>
        {itinerary.map((dayItem, index) => (
          <Box key={index} sx={{ borderBottom: '1px solid #dee2e6' }}>
            <Box
              onClick={() => toggleDay(index)}
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' },
                bgcolor: expanded[index] ? 'rgba(0,0,0,0.02)' : 'transparent'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 500, mr: 2 }}>Day {index + 1}</Typography>
                <Typography sx={{ color: '#6c757d' }}>{dayItem.title}</Typography>
              </Box>
              {expanded[index] ? <ExpandLess /> : <ExpandMore />}
            </Box>
            {expanded[index] && (
              <Box sx={{ p: 2, pt: 0, pl: 4 }}>
                <Typography sx={{ color: '#6c757d', lineHeight: 1.6 }}>
                  {dayItem.description}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ItinerarySection;
