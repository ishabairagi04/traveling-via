import React from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  TextField,
  Checkbox,
  Zoom,
  Fab,
  useTheme,
} from "@mui/material";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  const [showScroll, setShowScroll] = React.useState(false);

  // Scroll listener
  React.useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        px: { xs: 3, md: 10 },
        py: 8,
      }}
    >
      <Box sx={{ maxWidth: "1300px", mx: "auto" }}>
        {/* Main Grid */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="space-between"
          mb={6}
          flexWrap="wrap"
        >
          {/* Logo + Contact */}
          <Box flex={1} minWidth="220px">
            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
              <Box
                sx={{
                  backgroundColor: "#facc15",
                  width: 40,
                  height: 40,
                  borderRadius: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#000",
                }}
              >
                ✈️
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Via Brahman
                </Typography>
                <Typography variant="body2" color="gray">
                  Explore new lands
                </Typography>
              </Box>
            </Stack>

            <Stack spacing={1} color="gray">
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <FaMapMarkerAlt />
                <Typography variant="body2">
                  2118 Thornridge Cir. Syracuse, <br /> Connecticut 35624
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <FaPhoneAlt />
                <Typography variant="body2">(229) 555-0109</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <FaEnvelope />
                <Typography variant="body2">example@exam.com</Typography>
              </Stack>
            </Stack>
          </Box>

          {/* Our Tours */}
          <Box flex={1} minWidth="160px">
            <Typography variant="h6" mb={2}>
              Our Tours
            </Typography>
            <Stack spacing={1} color="gray">
              <Typography variant="body2">Gyeongju</Typography>
              <Typography variant="body2">Fuji, Japan</Typography>
              <Typography variant="body2">Heidelberg</Typography>
              <Typography variant="body2">Switzerland</Typography>
              <Typography variant="body2">Golden Gate</Typography>
              <Typography variant="body2">United Kingdom</Typography>
            </Stack>
          </Box>

          {/* Categories */}
          <Box flex={1} minWidth="160px">
            <Typography variant="h6" mb={2}>
              Categories
            </Typography>
            <Stack spacing={1} color="gray">
              <Typography variant="body2">Beach</Typography>
              <Typography variant="body2">Sailboat</Typography>
              <Typography variant="body2">Camping</Typography>
              <Typography variant="body2">Cable Car</Typography>
              <Typography variant="body2">Climbing</Typography>
              <Typography variant="body2">Discovery</Typography>
            </Stack>
          </Box>

          {/* Newsletter */}
          <Box flex={1} minWidth="220px">
            <Typography variant="h6" mb={2}>
              Join our newsletter
            </Typography>
            <Typography variant="body2" color="gray" mb={1}>
              Sign up to receive the latest articles
            </Typography>
            <Box sx={{ position: "relative", mb: 2 }}>
              <TextField
                fullWidth
                placeholder="Your email address"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                    <IconButton edge="end" sx={{ color: "#facc15" }}>
                      <FiArrowRight />
                    </IconButton>
                  ),
                }}
                sx={{
                  backgroundColor: "#1f2937",
                  borderRadius: 1,
                  input: { color: "white" },
                }}
              />
            </Box>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Checkbox size="small" sx={{ color: "gray" }} />
              <Typography variant="caption" color="gray">
                I have read and agree to the terms & conditions
              </Typography>
            </Stack>
          </Box>
        </Stack>

        {/* Footer Bottom */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          borderTop="1px solid #333"
          pt={3}
          spacing={2}
          flexWrap="wrap"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2" color="gray">
              Follow us
            </Typography>
            <AiFillFacebook className="hover:text-yellow-400 cursor-pointer" />
            <AiOutlineTwitter className="hover:text-yellow-400 cursor-pointer" />
            <AiFillLinkedin className="hover:text-yellow-400 cursor-pointer" />
            <AiOutlineInstagram className="hover:text-yellow-400 cursor-pointer" />
          </Stack>

          <Typography
            variant="body2"
            color="gray"
            textAlign="center"
            mt={{ xs: 2, md: 0 }}
          >
            Copyright © 2025 Via Brahman. Designed & Developed by Themesflat
          </Typography>
        </Stack>
      </Box>

      {/* Scroll-to-Top FAB */}
      <Zoom in={showScroll}>
        <Box
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            cursor: "pointer",
            zIndex: 1500,
          }}
        >
          <Fab size="small" sx={{ bgcolor: "#facc15", color: "#000" }}>
            <FaArrowUp />
          </Fab>
        </Box>
      </Zoom>
    </Box>
  );
};

export default Footer;
