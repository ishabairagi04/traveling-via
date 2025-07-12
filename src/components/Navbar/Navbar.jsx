import React, { useEffect, useState } from "react";
import AuthModal from "../LoginModal/AuthModal";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
  Dialog,
  DialogContent,
  InputBase,
  Paper,
  Alert,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    const allowedKeywords = [
      "travel", "place", "destination", "food", "restaurant", "beach", "mountain",
      "temple", "tour", "guide", "things to do", "hiking", "festival", "climate",
      "local", "culture", "attractions", "stay", "trip", "hotel", "activities"
    ];

    const isValid = allowedKeywords.some((keyword) =>
      query.toLowerCase().includes(keyword)
    );

    if (!isValid) {
      setError("Only travel-related searches are allowed.");
      return;
    }

    setError("");
    console.log("Searching for:", query);
    // Perform search or redirect here
    setSearchOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(255, 255, 255, 0)",
          backdropFilter: "blur(12px)",
          boxShadow: elevated ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "none",
          color: "#000",
          px: { xs: 2, md: 6 },
          py: 1.5,
          transition: "box-shadow 0.3s ease",
          zIndex: 1200,
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Left Logo */}
          <Box display="flex" alignItems="center" gap={1}>
            <Box sx={{ width: 250, height: 100 }}>
  <img
    src="/logo.png" // Update the path if your logo is in a different location
    alt="Via Brahman Logo"
    style={{ width: 300, height: 200, objectFit: "contain" ,marginTop:-50 }}
  />
</Box>

          </Box>

          {/* Center Links */}

          <Stack
            direction="row"
            spacing={4}
            sx={{ display: { xs: "none", md: "flex" }, ml: 4 }}
          >
            {[
              { label: "Home", path: "/" },
              { label: "Tour Packages", path: "/tours" },
              { label: "Destination", path: "/Destination" },
              { label: "Gallery", path: "/gallery" },
              { label: "About Us", path: "/about" },
              { label: "Contact Us", path: "/contact" },
            ].map((item, idx) => (
              <Button
                key={idx}
                component={Link}
                to={item.path}
                sx={{
                  fontWeight: item.label === "Home" ? 700 : 500,
                  color: item.label === "Home" ? "#facc15" : "#333",
                  textTransform: "none",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* Right Icons */}
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton onClick={() => setSearchOpen(true)}>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <PersonIcon />
              <Typography variant="body2" fontWeight={500}>
                <button onClick={() => setModalOpen(true)}>Login / Register</button>
                {/* Always open with register screen first */}
                <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} defaultToLogin={false} />
              </Typography>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Search Dialog */}
      <Dialog open={searchOpen} onClose={() => setSearchOpen(false)} fullWidth maxWidth="sm">
        <DialogContent sx={{ pt: 4 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">Search Travel Info</Typography>
            <IconButton onClick={() => setSearchOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Paper
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              borderRadius: "12px",
              border: "1px solid #ccc",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="e.g., Best places in Italy"
              inputProps={{ "aria-label": "search travel" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
