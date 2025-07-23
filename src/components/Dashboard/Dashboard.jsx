// src/components/Dashboard/Dashboard.jsx
import React from 'react';
import { Box, Grid } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import DestinationCards from './DestinationCards';
import RevenueChart from './RevenueChart';
import StatsCards from './StatsCards';
import TrafficSources from './TrafficSources';
import RecentCustomers from './RecentCustomers';
import PromoBanner from './PromoBanner';

const Dashboard = () => {
  return (
    <Box sx={{ mt:20, display: 'flex', bgcolor: '#f9f9f9' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3, ml: '240px', width: '100%' }}>
        <Header />
        <DestinationCards />
        <RevenueChart />
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} md={4}>
            <StatsCards />
          </Grid>
          <Grid item xs={12} md={4}>
            <TrafficSources />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentCustomers />
            <PromoBanner />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
