import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";

export default function AddTour() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Add New Tour
      </Typography>
      <form>
        <TextField label="Tour Name" fullWidth margin="normal" />
        <TextField label="Location" fullWidth margin="normal" />
        <TextField label="Price" fullWidth margin="normal" />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Save Tour
        </Button>
      </form>
    </Box>
  );
}
