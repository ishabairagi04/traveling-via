// src/components/Dashboard/PromoBanner.jsx
import { Box, Typography, Button } from '@mui/material';

const PromoBanner = () => (
  <Box mt={4} bgcolor="#f0f4ff" borderRadius={2} p={2} textAlign="center">
    <Typography variant="subtitle2" color="textSecondary" fontWeight={500}>By Indian Airways</Typography>
    <Typography fontWeight="bold" mt={1}>Get Your dream trip today!</Typography>
    <Box mt={1} mb={1}>
      <Button variant="contained" color="primary" size="small">Let’s go</Button>
      <Box display="inline-block" bgcolor="#fff" ml={2} px={1} py={0.5} borderRadius={1} fontSize={12}>
        50% OFF
      </Box>
    </Box>
  </Box>
);

export default PromoBanner;
