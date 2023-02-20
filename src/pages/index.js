import "../stylesheets/index.scss";
import React from "react";
import { SEO } from "../components/SEO";
import { Link } from "gatsby";
import { Container, Grid, Typography, Divider, Box } from "@mui/material";
import BackgroundAnimation from "../components/BackgroundAnimation";
import TypeWriter from "../components/TypeWriter";

function Home() {
  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{
          padding: "5%",
          alignSelf: "center",
          maxWidth: "600px",
          borderRadius: "1%",
          boxShadow: "0 8px 18px rgba(144, 202, 249, 0.6)",
          textAlign: "center",
        }}
      >
        <BackgroundAnimation className="background-animation" />

        <Grid item xs={12} sm={9} md={9} lg={9} sx={{ padding: "5%" }}>
          <Typography variant="h1" sx={{ fontFamily: "Montserrat" }}>
            Hello there!
            <Typography variant="body1" fontSize="5rem" className="wave">
              👋🏻
            </Typography>
            <Divider
              sx={{
                margin: "auto",
                width: "10%",
                maxWidth: "100px",
                borderTop: "3px solid",
              }}
            ></Divider>
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ margin: "0 auto" }}>
          <Typography
            variant="body2"
            fontSize="1.00rem"
            fontWeight="bold"
            fontFamily="merriweather"
            align="left"
          >
            This is my digital home. Have fun looking around! You can find more
            about me <Link to="/about">here</Link>. Soon there'll more content.
            Right now, there's a blog where I write about topics I find
            interesting, for example{" "}
            <TypeWriter
              loop={true}
              strings={["Gatsby.", "P5.js.", "coding challenges."]}
            />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;

export const Head = () => <SEO title="Home" />;
