"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  FormControlLabel,
  Switch,
  IconButton,
  TextField,
} from "@mui/material";
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  CalendarToday,
  AccessTime,
} from "@mui/icons-material";

const TourBookingSidebar = ({
  ticketPrice = 359,
  perBookingPrice = 30,
  servicePrices = { adult: 30, youth: 25, child: 20 },
  onBook = () => {},
}) => {
  // STATE WITH LOCALSTORAGE SYNC
  const [date, setDate] = useState(() => localStorage.getItem("tourDate") || "");
  const [adultCount, setAdultCount] = useState(() => parseInt(localStorage.getItem("adultCount") || "2")); // default 2
  const [youthCount, setYouthCount] = useState(() => parseInt(localStorage.getItem("youthCount") || "0"));
  const [childCount, setChildCount] = useState(() => parseInt(localStorage.getItem("childCount") || "0"));

  const [extraPerBooking, setExtraPerBooking] = useState(() => localStorage.getItem("extraPerBooking") === "true");
  const [extraPerPerson, setExtraPerPerson] = useState(() => localStorage.getItem("extraPerPerson") === "true");

  const [extraAdult, setExtraAdult] = useState(() => parseInt(localStorage.getItem("extraAdult") || "0"));
  const [extraYouth, setExtraYouth] = useState(() => parseInt(localStorage.getItem("extraYouth") || "0"));
  const [extraChild, setExtraChild] = useState(() => parseInt(localStorage.getItem("extraChild") || "0"));

  // SYNC TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("tourDate", date);
    localStorage.setItem("adultCount", adultCount);
    localStorage.setItem("youthCount", youthCount);
    localStorage.setItem("childCount", childCount);
    localStorage.setItem("extraPerBooking", extraPerBooking);
    localStorage.setItem("extraPerPerson", extraPerPerson);
    localStorage.setItem("extraAdult", extraAdult);
    localStorage.setItem("extraYouth", extraYouth);
    localStorage.setItem("extraChild", extraChild);
  }, [
    date,
    adultCount,
    youthCount,
    childCount,
    extraPerBooking,
    extraPerPerson,
    extraAdult,
    extraYouth,
    extraChild,
  ]);

  const totalTickets = (adultCount + youthCount + childCount) * ticketPrice;
  const totalPerBooking = extraPerBooking ? perBookingPrice : 0;
  const totalPerPerson = extraPerPerson
    ? extraAdult * servicePrices.adult +
      extraYouth * servicePrices.youth +
      extraChild * servicePrices.child
    : 0;

  const total = totalTickets + totalPerBooking + totalPerPerson;

  const QuantitySelector = ({ label, value, setValue, min = 0 }) => (
    <Box display="flex" justifyContent="space-between" alignItems="center" my={1}>
      <Typography>{label}</Typography>
      <Box display="flex" alignItems="center">
        <IconButton
          size="small"
          onClick={() => setValue(Math.max(value - 1, min))}
        >
          <RemoveIcon fontSize="small" />
        </IconButton>
        <Typography px={1}>{value}</Typography>
        <IconButton size="small" onClick={() => setValue(value + 1)}>
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "350px" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          bgcolor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.05)",
          p: 3,
          position: "sticky",
          top: "20px",
          border: "1px solid #dee2e6",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
            fontSize: "1.25rem",
            color: "#212529",
          }}
        >
          Book Your Tour
        </Typography>

        {/* DATE SELECT */}
        <Box mb={2}>
          <Typography fontWeight={500} mb={1}>
            <CalendarToday sx={{ fontSize: 16, mr: 1, verticalAlign: "middle" }} />
            Date:
          </Typography>
          <TextField
            fullWidth
            type="date"
            size="small"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* TICKET SELECTION */}
        <Typography variant="subtitle1" fontWeight={600} mb={1}>
          Tickets:
        </Typography>
        <QuantitySelector label="Adult (18+ years)" value={adultCount} setValue={setAdultCount} min={2} />
        <QuantitySelector label="Youth (13 – 17 Years)" value={youthCount} setValue={setYouthCount} />
        <QuantitySelector label="Child (1 – 13 Years)" value={childCount} setValue={setChildCount} />

        <Divider sx={{ my: 2 }} />

        {/* EXTRA SERVICE PER BOOKING */}
        <FormControlLabel
          control={
            <Switch
              checked={extraPerBooking}
              onChange={(e) => setExtraPerBooking(e.target.checked)}
            />
          }
          label={`Add Service Per Booking ($${perBookingPrice})`}
        />

        {/* EXTRA SERVICE PER PERSON */}
        <FormControlLabel
          control={
            <Switch
              checked={extraPerPerson}
              onChange={(e) => setExtraPerPerson(e.target.checked)}
            />
          }
          label="Add Service Per Person"
        />

        {extraPerPerson && (
          <Box pl={1}>
            <QuantitySelector
              label={`Adult: $${servicePrices.adult}`}
              value={extraAdult}
              setValue={setExtraAdult}
            />
            <QuantitySelector
              label={`Youth: $${servicePrices.youth}`}
              value={extraYouth}
              setValue={setExtraYouth}
            />
            <QuantitySelector
              label={`Child: $${servicePrices.child}`}
              value={extraChild}
              setValue={setExtraChild}
            />
          </Box>
        )}

        <Divider sx={{ my: 2 }} />

        {/* TOTAL DISPLAY */}
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography fontWeight={500}>Total</Typography>
          <Typography fontWeight={600}>${total.toFixed(2)}</Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{ bgcolor: "#fd7e14", fontWeight: 600 }}
          onClick={onBook}
        >
          Book Now
        </Button>

        <Box mt={2} display="flex" alignItems="center" justifyContent="center" gap={1}>
          <AccessTime sx={{ color: "#6c757d", fontSize: "1rem" }} />
          <Typography sx={{ fontSize: "0.75rem", color: "#6c757d" }}>
            Secure your spot with instant booking
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TourBookingSidebar;
