'use client';
import Image from "next/image";
import { Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import './globals.css';
import Header from '../components/Header';
import Main from "../components/Main";
import About from "../components/About";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export let theme = createTheme({
  typography: {
    fontFamily: "SF-Pro-Display-Regular, SF-Pro-Text-Semibold, SF-Pro-display-Regular, sans-serif",
  }
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container 
        style={{alignText: "center"}}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Header />
        <Main />
        <About />
        <Resume />
        <Contact />
      </Grid>
    </ThemeProvider>
  );
}
