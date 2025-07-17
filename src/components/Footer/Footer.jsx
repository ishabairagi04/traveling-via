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

const Footer = ({ theme = "default" }) => {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isBeach = theme === "beach";
  const isKashmir = theme === "kashmir" || theme === "snow" ;
  const isKerala = theme === "kerala";
  const isMaldives = theme === "maldives";
  const isManali = theme === "manali";
  const isDarjeeling = theme === "darjeeling";
const isAssam = theme === "assam";

const colors = {
  background: isKashmir
    ? "linear-gradient(to right, #e0f7fa, #b2ebf2)"
    : isKerala
    ? "linear-gradient(to right, #d7f5d0, #a8e6cf)"
    : isMaldives
    ? "linear-gradient(to right, #a1f3f7, #3ec1a2, #48cae4)"
    : isManali
    ? "linear-gradient(to right, #e6f0f3, #d4ebf2, #b9e0ee)"
    : isDarjeeling
    ? "linear-gradient(to right, #dfeeea, #cce3dd, #b5d9d2)"
    : isAssam
    ? "linear-gradient(to right,#A7E6D7,  #fefae0, #e1f7e7)"
    : "linear-gradient(to right, #FEEBCB, #A7E6D7)",

  text: isAssam
    ? "#274e13"
    : isKashmir || isManali
    ? "#034752"
    : isBeach
    ? "#023047"
    : isKerala
    ? "#1B4332"
    : isMaldives
    ? "#013a63"
    : isDarjeeling
    ? "#30534b"
    : "#fff",

  subText: isAssam
    ? "#5c7f66"
    : isKashmir || isManali || isBeach
    ? "#447371"
    : isKerala
    ? "#2d6a4f"
    : isMaldives
    ? "#468faf"
    : isDarjeeling
    ? "#547c71"
    : "gray",

  accent: isAssam
    ? "#52b788"
    : isKashmir || isManali
    ? "#00bcd4"
    : isBeach
    ? "#FFD166"
    : isKerala
    ? "#52b788"
    : isMaldives
    ? "#ffd166"
    : isDarjeeling
    ? "#69b9a5"
    : "#facc15",

  hover: isAssam
    ? "#fff"
    : isKashmir || isManali
    ? "#00acc1"
    : isBeach
    ? "#FF9472"
    : isKerala
    ? "#40916c"
    : isMaldives
    ? "#ffc300"
    : isDarjeeling
    ? "#59a193"
    : "#facc15",

  border: isAssam
    ? "#aac8b2"
    : isKashmir || isManali
    ? "#90caf9"
    : isBeach
    ? "#93D9D4"
    : isKerala
    ? "#b7e4c7"
    : isMaldives
    ? "#89c2d9"
    : isDarjeeling
    ? "#aad4cb"
    : "#333",

  inputBg: isAssam
    ? "rgba(255, 255, 255, 0.85)"
    : isKashmir || isManali
    ? "rgba(255,255,255,0.5)"
    : isBeach
    ? "rgba(255,255,255,0.6)"
    : isKerala
    ? "rgba(255, 255, 255, 0.7)"
    : isMaldives
    ? "rgba(255, 255, 255, 0.75)"
    : isDarjeeling
    ? "rgba(255, 255, 255, 0.6)"
    : "#1f2937",
};

  return (
    <>
      {/* 🌊 Wave Divider */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          position: "relative",
          top: 5,
        }}
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "50px", width: "100%" }}
        >
          <defs>
            <linearGradient id="footerWave" x1="0" y1="0" x2="1" y2="0">
              {isKashmir ? (
                <>
                  <stop offset="0%" stopColor="#e0f7fa" />
                  <stop offset="100%" stopColor="#b2ebf2" />
                </>
              ) : isKerala ? (
                <>
                  <stop offset="0%" stopColor="#d7f5d0" />
                  <stop offset="100%" stopColor="#a8e6cf" />
                </>
              ) : isMaldives ? (
                <>
                  <stop offset="0%" stopColor="#a1f3f7" />
                  <stop offset="50%" stopColor="#3ec1a2" />
                  <stop offset="100%" stopColor="#48cae4" />
                </>
              ) : isManali ? (
                <>
                  <stop offset="0%" stopColor="#e6f0f3" />
                  <stop offset="50%" stopColor="#d4ebf2" />
                  <stop offset="100%" stopColor="#b9e0ee" />
                </>
              ) : isDarjeeling ? (
                <>
                  <stop offset="0%" stopColor="#dfeeea" />
                  <stop offset="50%" stopColor="#cce3dd" />
                  <stop offset="100%" stopColor="#b5d9d2" />
                </>
              ) :isAssam? (
                <>
                   <stop offset="0%" stopColor="#A7E6D7" />
                      <stop offset="50%" stopColor="#fefae0" />
                  <stop offset="100%" stopColor="#e1f7e7" />
               
                </>
              ) :(
                <>
                  <stop offset="0%" stopColor="#FEEBCB" />
                  <stop offset="100%" stopColor="#A7E6D7" />
                </>
              )}
            </linearGradient>
          </defs>
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            fill="url(#footerWave)"
          ></path>
        </svg>
      </Box>

      {/* 🌴 Footer Content */}
      <Box
        component="footer"
        sx={{
          background: colors.background,
          color: colors.text,
          px: { xs: 3, md: 10 },
          py: 5,
        }}
      >
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 8 }}
            justifyContent="space-between"
            alignItems="flex-start"
            mb={4}
            flexWrap="wrap"
          >
            {/* Contact Section */}
            <Box flex={1} minWidth="280px">
              <Stack direction="row" alignItems="center" spacing={2} mb={1}>
              <Box
  sx={{
    backgroundColor: isAssam? "#fff":colors.accent,
    width: 40,
    height: 40,
    borderRadius: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: isAssam || isKerala || isDarjeeling  || isAssam? "#fff" : "#1b1b1b",
  }}
>
  {isKashmir ? "🏔️" : isKerala ? "🌿" : isDarjeeling ? "🌄" : isAssam ? "🍃" : "✈️"}
</Box>

                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Via Brahman
                  </Typography>
                  <Typography variant="body2" color={colors.subText}>
                    Explore new lands
                  </Typography>
                </Box>
              </Stack>

              <Stack spacing={1.2} mt={2}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <FaMapMarkerAlt style={{ marginTop: 3 }} />
                  <Typography variant="body2" color={colors.subText}>
                    Vikram Tower, 249, Sapna Sangeeta Rd,
                    <br />
                    Old Agarwal Nagar, Indore, MP 452001
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <FaPhoneAlt />
                  <Typography variant="body2" color={colors.subText}>
                    088899 88015
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <FaEnvelope />
                  <Typography variant="body2" color={colors.subText}>
                    example@exam.com
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            {/* Newsletter Section */}
            <Box flex={1} minWidth="280px">
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Join our newsletter
              </Typography>
              <Typography variant="body2" color={colors.subText} mb={2}>
                Get the latest travel stories, tips & offers.
              </Typography>
              <TextField
                fullWidth
                placeholder="Your email address"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                <Box
  sx={{
    backgroundColor:colors.accent,
    p: 1,
    size:"small",
    borderRadius: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:"#fff",
    "&:hover": {
      backgroundColor: isAssam? "#fff": colors.hover,
      color:isAssam? "#52b788": "#fff"
    },
  }}
>
  <FiArrowRight />
</Box>

                  ),
                }}
                sx={{
                  backgroundColor: colors.inputBg,
                  borderRadius: 1,
                  input: { color: colors.text },
                }}
              />
              <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                <Checkbox size="small" sx={{ color: colors.subText }} />
                <Typography variant="caption" color={colors.subText}>
                  I agree to the terms & conditions
                </Typography>
              </Stack>
            </Box>
          </Stack>

          {/* Bottom Bar */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            borderTop={`1px solid ${colors.border}`}
            pt={2}
            spacing={2}
            flexWrap="wrap"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="body2" color={colors.subText}>
                Follow us
              </Typography>
              <AiFillFacebook className="cursor-pointer" style={{ color: colors.subText }} />
              <AiOutlineTwitter className="cursor-pointer" style={{ color: colors.subText }} />
              <AiFillLinkedin className="cursor-pointer" style={{ color: colors.subText }} />
              <AiOutlineInstagram className="cursor-pointer" style={{ color: colors.subText }} />
            </Stack>

            <Typography variant="body2" color={colors.subText} textAlign="center">
              © 2025 Via Brahman. Designed & Developed by Themesflat
            </Typography>
          </Stack>
        </Box>

        {/* Scroll to Top */}
        <Zoom in={showScroll}>
          <Box
            onClick={scrollToTop}
            sx={{
              position: "fixed",
              bottom: 20,
              left: 20,
              cursor: "pointer",
              zIndex: 1500,
              
            }}
          >
            <Fab
  size="small"
  sx={{
    bgcolor: colors.accent,
    color: "#fff",
    "&:hover": {
      bgcolor: colors.hover,
         color:isAssam? "#52b788": "#fff"
    },
  }}
>
  <FaArrowUp />


            </Fab>
          </Box>
        </Zoom>
      </Box>
    </>
  );
};

export default Footer;
