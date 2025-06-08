import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./App.css";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4, 3),
  borderRadius: 12,
  boxShadow: theme.shadows[3],
  maxWidth: 400,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    maxWidth: 480,
    padding: theme.spacing(6, 5),
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 340,
    padding: theme.spacing(3, 2),
  },
}));

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    // Placeholder for login logic
    alert(`Logging in as ${email}`);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: (theme) => theme.palette.background.default,
      }}
    >
      <StyledPaper elevation={3}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            autoComplete="username"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            autoComplete="current-password"
            required
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((show) => !show)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" size="large" fullWidth>
            Login
          </Button>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default LoginPage;
