import "../stylesheets/index.scss";
import Typewriter from "typewriter-effect";

import React from "react";
import { SEO } from "../components/SEO";
import { Container, Grid, Typography, Stack } from "@mui/material";
import P5Wrapper from "../components/p5Wrapper";

export default class Home extends React.Component {
  render() {
    return (
      <div id="container">
        <P5Wrapper />

        <Container
          sx={{
            height: "calc(100vh - 96px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="overlay"
        >
          <Grid container spacing={2} sx={{ padding: "5%" }}>
            <Grid item xs={12} sm={9} md={9} lg={9}>
              <Typography variant="h1">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("Hello there!").start();
                  }}
                />
              </Typography>
            </Grid>
            <Grid item xs={0} sm={3} md={3} lg={3}>
              <Typography variant="body1" fontSize="5rem" className="wave">
                👋🏻
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" fontSize="2rem">
                Thanks for stopping by!
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export const Head = () => <SEO title="Home" />;
