import React from "react";
import { Typography, Box } from "@mui/material";

export default function ManageTours() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Manage Tours
      </Typography>
      <Typography>
        Here you will see a list of all tours. (Later we’ll add table with edit/delete options.)
      </Typography>
    </Box>
  );
}
