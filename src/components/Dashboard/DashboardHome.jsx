import React from "react";
import { Typography, Box } from "@mui/material";

export default function DashboardHome() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Admin Dashboard
      </Typography>
      <Typography variant="body1">
        Use the sidebar to manage tours, view itineraries, and add new tour packages.
      </Typography>
    </Box>
  );
}
