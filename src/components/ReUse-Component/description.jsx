"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { CheckCircleOutline, Cancel } from "@mui/icons-material";

const TourInfoSection = ({
  description = "",
  includedItems = [],
  notIncludedItems = [],
  amenities = [],
}) => {
  return (
    <>
      {/* Description */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem", color: "#212529" }}
        >
          Description
        </Typography>
        <Typography
          sx={{ color: "#6c757d", lineHeight: 1.6, fontSize: "0.875rem" }}
        >
          {description}
        </Typography>
      </Box>

      {/* What's Included */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem", color: "#212529" }}
        >
          What's Included
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          {includedItems.map((item, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "flex-start" }}>
              <CheckCircleOutline
                sx={{ color: "#198754", mr: 1, mt: 0.5, fontSize: "1rem" }}
              />
              <Typography sx={{ color: "#6c757d", fontSize: "0.875rem" }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Not Included */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem", color: "#212529" }}
        >
          Not Included
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          {notIncludedItems.map((item, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "flex-start" }}>
              <Cancel
                sx={{ color: "#dc3545", mr: 1, mt: 0.5, fontSize: "1rem" }}
              />
              <Typography sx={{ color: "#6c757d", fontSize: "0.875rem" }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Amenities */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem", color: "#212529" }}
        >
          Tour Amenities
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {amenities.map((item, index) => (
            <Box
              key={index}
              sx={{
                px: 2,
                py: 0.5,
                bgcolor: "#e9ecef",
                borderRadius: "16px",
                fontSize: "0.75rem",
                color: "#212529",
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TourInfoSection;
