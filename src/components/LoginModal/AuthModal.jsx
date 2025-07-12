import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff, Close } from "@mui/icons-material";

const AuthModal = ({ open, onClose, defaultToLogin = false }) => {
  const [isLogin, setIsLogin] = useState(defaultToLogin);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (open) {
      setIsLogin(defaultToLogin);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [open, defaultToLogin]);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const togglePage = () => setIsLogin((prev) => !prev);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    if (!username || !password || (!isLogin && (!email || !confirmPassword))) {
      alert("Please fill all fields.");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const url = isLogin
      ? "https://via-bhraman-backend.onrender.com/api/auth/login"
      : "https://via-bhraman-backend.onrender.com/api/auth/register";

    const payload = isLogin
      ? { username, password }
      : { username, email, password, confirmPassword };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong.");

      alert(`${isLogin ? "Login" : "Registration"} successful!`);
      console.log(data);
      onClose(); // Close modal on success
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backdropFilter: "blur(4px)",
          p: 2,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: 3,
            overflow: "hidden",
            width: "100%",
            maxWidth: 900,
          }}
        >
          {/* Left Image */}
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "block" },
              backgroundImage: `url(${isLogin ? "/login-1.webp" : "/register-1.webp"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: 500,
            }}
          />

          {/* Right Form */}
          <Box
            sx={{
              flex: 1,
              p: 4,
              position: "relative",
              width: "100%",
              backgroundColor: "#fff",
            }}
          >
            <IconButton onClick={onClose} sx={{ position: "absolute", top: 16, right: 16 }}>
              <Close />
            </IconButton>

            <Typography variant="h4" fontWeight={700} gutterBottom>
              {isLogin ? "Login" : "Register"}
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit}>

              <TextField
                margin="normal"
                required
                fullWidth
                label="User Name"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />


              {!isLogin && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {!isLogin && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}

              {isLogin && (
                <Box textAlign="right" mt={1}>
                  <Typography variant="body2" sx={{ color: "#d58e2b", cursor: "pointer" }}>
                    Forgot password?
                  </Typography>
                </Box>
              )}

              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontWeight: 700,
                  backgroundColor: "#d59b2b",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#c4881d" },
                }}
              >
                {isLogin ? "Login" : "Create A New Account"}
              </Button>

              <Box textAlign="center" mt={3}>
                <Typography variant="body2">
                  {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ ml: 1, color: "#d58e2b", cursor: "pointer" }}
                    onClick={togglePage}
                  >
                    {isLogin ? "Register" : "Login Here"}
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export default AuthModal;
