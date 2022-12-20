import { useState } from "react";
import React from "react";
import DrawerAppBar from "../components/navbar";
import Footer from "./footer";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import Transition from "../components/Transition";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import dark from "../themes/dark.js";
import light from "../themes/light.js";

const Layout = ({ children, location }) => {
  const [darkMode, setDarkMode] = useState(false);
  const activeTheme = createTheme(darkMode ? light : dark);

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline enableColorScheme />
      <Stack
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={4}
      >
        <DrawerAppBar
          enableColorOnDark
          darkModeActive={darkMode}
          themeSetter={setDarkMode}
        />
        <Transition location={location}>{children}</Transition>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
