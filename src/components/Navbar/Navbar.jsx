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
import destinationThemes from "../ReUse-Component/theme"
const Navbar = ({ theme = "default" }) => {
  const currentTheme = destinationThemes[theme] || destinationThemes["default"];
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
    setSearchOpen(false);
  };
 
const styles = currentTheme;


//   const isBeach = theme === "beach";
//   const isKashmir = theme === "kashmir" || theme === "snow" || theme === "manali";
//   const isKerala = theme === "kerala";
//   const isMaldives = theme === "maldives";
// const isDarjeeling = theme === "darjeeling";
//   const isManali = theme === "manali";
// const isAssam = theme === "assam";
// const styles = {
//   background: isAssam
//     ? "rgba(255, 255, 255, 0.6)"
//     : isDarjeeling
//     ? "#c3e3dd"
//     : isManali
//     ? "rgba(230, 247, 255, 0.6)"
//     : isKashmir
//     ? "rgba(224, 247, 250, 0.5)"
//     : isBeach
//     ? "rgba(255, 255, 255, 0.4)"
//     : isMaldives
//     ? "rgba(229, 252, 255, 0.6)"
//     : isKerala
//     ? "rgba(215, 245, 208, 0.5)"
//     : "rgba(255, 255, 255, 0.2)",

//   text: isAssam
//     ? "#274e13"
//     : isDarjeeling
//     ? "#2b5f55"
//     : isManali
//     ? "#013a63"
//     : isKashmir
//     ? "#034752"
//     : isBeach
//     ? "#006d77"
//     : isMaldives
//     ? "#007f7f"
//     : isKerala
//     ? "#1B4332"
//     : "#000",

//   highlight: isAssam
//     ? "#52b788"
//     : isDarjeeling
//     ? "#357f6b"
//     : isManali
//     ? "#90e0ef"
//     : isKashmir
//     ? "#00acc1"
//     : isBeach
//     ? "#00b4d8"
//     : isMaldives
//     ? "#5eead4"
//     : isKerala
//     ? "#52b788"
//     : "#facc15",

//   hover: isAssam
//     ? "#52b788"
//     : isDarjeeling
//     ? "#357f6b"
//     : isManali
//     ? "#00b4d8"
//     : isKashmir
//     ? "#00bcd4"
//     : isBeach
//     ? "#0077b6"
//     : isMaldives
//     ? "#38bdf8"
//     : isKerala
//     ? "#40916c"
//     : "#facc15",
// };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: styles.background,
          backdropFilter: "blur(12px)",
          boxShadow: elevated ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "none",
          color: styles.text,
          px: { xs: 2, md: 6 },
          py: 1.5,
          transition: "box-shadow 0.3s ease",
          zIndex: 1200,
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box display="flex" alignItems="center" gap={1}>
            <Box sx={{ width: 250, height: 100 }}>
              <img
                src="/logo.png"
                alt="Via Brahman Logo"
                style={{ width: 300, height: 200, objectFit: "contain", marginTop: -50 }}
              />
            </Box>
          </Box>

          {/* Nav Links */}
          <Stack
            direction="row"
            spacing={4}
            sx={{ display: { xs: "none", md: "flex" }, ml: 4 }}
          >
            {[
              { label: "Home", path: "/" },
              { label: "Tour Packages", path: "/tour-packages" },
              { label: "Destination", path: "/Destination" },
              { label: "Gallery", path: "/gallery" },
              { label: "About Us", path: "/about" },
              { label: "Contact Us", path: "/contact" },
              // { label: "dashboard", path: "/dashboard"}
            ].map((item, idx) => (
              <Button
                key={idx}
                component={Link}
                to={item.path}
                sx={{
                  fontWeight: 700,
                  color: styles.text,
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 2,
                  py: 0.5,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: styles.hover,
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(6px)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* Right Side Icons */}
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton
              onClick={() => setSearchOpen(true)}
              sx={{
                borderRadius: "8px",
                color: styles.text,
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(6px)",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              sx={{
                borderRadius: "8px",
                color: styles.text,
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(6px)",
                },
              }}
            >
              <FavoriteIcon />
            </IconButton>
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{
                borderRadius: "8px",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(6px)",
                },
              }}
            >
              <PersonIcon sx={{ color: styles.text }} />
              <Typography variant="body2" fontWeight={500}>
                <button onClick={() => setModalOpen(true)}>Login / Register</button>
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
