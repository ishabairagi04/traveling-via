// src/components/Dashboard/TrafficSources.jsx
import { Box, Typography, LinearProgress, Stack } from '@mui/material';

const sources = [
  { label: 'Direct', value: 143382, percent: 70 },
  { label: 'Referral', value: 87994, percent: 45 },
  { label: 'Social Media', value: 45211, percent: 20 },
];

const TrafficSources = () => (
  <Box mt={3}>
    <Typography variant="subtitle1" fontWeight="bold">Traffic Sources</Typography>
    <Typography variant="caption" color="gray">Last 7 Days</Typography>
    <Stack spacing={2} mt={2}>
      {sources.map((source, i) => (
        <Box key={i}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2">{source.label}</Typography>
            <Typography variant="body2">{source.value.toLocaleString()}</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={source.percent}
            sx={{
              height: 6,
              borderRadius: 5,
              backgroundColor: '#e0e0e0',
              '& .MuiLinearProgress-bar': { backgroundColor: '#6c63ff' },
            }}
          />
        </Box>
      ))}
    </Stack>
  </Box>
);

export default TrafficSources;
