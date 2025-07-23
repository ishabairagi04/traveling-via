import React, { useEffect, useState } from "react";
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
  Drawer,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import AuthModal from "../LoginModal/AuthModal";
import destinationThemes from "../ReUse-Component/theme";

const Navbar = ({ theme = "default" }) => {
  const currentTheme = destinationThemes[theme] || destinationThemes["default"];
  const [modalOpen, setModalOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Tour Packages", path: "/tour-packages" },
    { label: "Destination", path: "/Destination" },
    { label: "Gallery", path: "/gallery" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <>
  <AppBar
  position="fixed"
  sx={{
    top: 0,
    left: 0,
    right: 0,
    maxWidth: "100vw",
    overflowX: "hidden",
    backgroundColor: styles.background,
    // 👇 Conditionally disable blur
    backdropFilter: drawerOpen ? "none" : "blur(12px)",
    boxShadow: elevated ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "none",
    color: styles.text,
    px: { xs: 2, md: 6 },
    py: 1.5,
    transition: "box-shadow 0.3s ease, backdrop-filter 0.3s ease",
    zIndex: 1200,
  }}
>


        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
         <Box
  display="flex"
  alignItems="center"
  gap={1}
  sx={{
    flex: "1 1 auto",
    minWidth: "150px",
    pl: { xs: 1, sm: 2 },         // padding left responsive
    pt: 0,                        // no padding top
    pb: 0,
    height: { xs: 50, sm: 60 },   // match height of header
  }}
>
  <Box
    sx={{
      width: { xs: 100, sm: 140 },   // responsive logo size
      height: "auto",
      display: "flex",
      alignItems: "center",
    }}
  >
    <img
      src="/logo.png"
      alt="Via Bhraman Logo"
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain",
        display: "block",
      }}
    />
  </Box>
</Box>


          {/* Desktop Nav Links */}
          <Stack
            direction="row"
            spacing={4}
            sx={{ display: { xs: "none", md: "flex" }, ml: 4 }}
          >
            {navLinks.map((item, idx) => (
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

          {/* Icons & Mobile Menu Button */}
          <Stack direction="row" spacing={2} alignItems="center">
            {/* Search */}
          <IconButton
  onClick={() => setSearchOpen(true)}
  sx={{ color: styles.text, display: { xs: "none", sm: "inline-flex" } }}
>
  <SearchIcon />
</IconButton>

            {/* Favorites */}
           <IconButton sx={{ color: styles.text, display: { xs: "none", sm: "inline-flex" } }}>
  <FavoriteIcon />
</IconButton>


            {/* User/Login */}
            <Stack direction="row" spacing={0.5} alignItems="center">
              <PersonIcon sx={{ color: styles.text }} />
              <Typography variant="body2" fontWeight={500}>
                <Button
  fullWidth
  onClick={() => {
    setModalOpen(true);
    setDrawerOpen(false);
  }}
  sx={{
    justifyContent: "flex-start",
    pl: 1.5, // 👈 aligns it with other buttons
    mb: 1,
    color: styles.text,
    "&:hover": { color: styles.hover },
  }}
>
  Login / Register
</Button>


              </Typography>
            </Stack>

            {/* Hamburger Menu for Mobile */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, pl: {xs:"0"},color: styles.text }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Nav */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 250, backgroundColor: styles.background } }}
      >
        <Box p={2}>
          <Typography variant="h6" mb={2}>
            Menu
          </Typography>

          {navLinks.map((item, idx) => (
            <Button
              key={idx}
              component={Link}
              to={item.path}
              fullWidth
              sx={{
                justifyContent: "flex-start",
                mb: 1,
                color: styles.text,
                "&:hover": { color: styles.hover },
              }}
              onClick={() => setDrawerOpen(false)}
            >
              {item.label}
            </Button>
          ))}

          <Button
            fullWidth
            onClick={() => {
              setModalOpen(true);
              setDrawerOpen(false);
            }}
            sx={{ color: styles.text, mt: 2, "&:hover": { color: styles.hover } }}
          >
            Login / Register
          </Button>
        </Box>
      </Drawer>

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

      {/* Auth Modal */}
      <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} defaultToLogin={false} />
    </>
  );
};

export default Navbar;
