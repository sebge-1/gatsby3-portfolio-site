import React from "react";
import BlogList from "../components/BlogList";
import { Stack, Grid, Divider, Box, Container } from "@mui/material";
import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <Grid container>
      <Grid
        item
        sm={12}
        xs={12}
        container
        justifyContent="center"
        alignItems="center"
      >
        <PageHeader text={"Coming soon"} bgColor={"#f48fb1"}></PageHeader>
      </Grid>
      {/* <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} /> */}
    </Grid>
  );
}
