import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import SignIn from "./SignIn";
import { createTheme } from "@mui/material/styles";
import "./App.css";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
