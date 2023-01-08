import { useState } from "react";
import React from "react";
import DrawerAppBar from "../components/nav/navbar";
import Footer from "./footer";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import Transition from "../components/Transition";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import dark from "../themes/dark.js";
import light from "../themes/light.js";
import { useStaticQuery, graphql, Link } from "gatsby";

const Layout = ({ children, location }) => {
  const [darkMode, setDarkMode] = useState(false);
  const activeTheme = createTheme(darkMode ? light : dark);

  const postData = useStaticQuery(
    graphql`
      {
        allContentfulBlogPost(sort: { publishedDate: DESC }) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  );

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
          postData={postData}
        />
        {/* <Transition location={location}> */}
        {children}
        {/* </Transition> */}
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
