import React from "react";
import BlogList from "../components/BlogList";
import { Container, Grid } from "@mui/material";
import SideBar from "../components/SideBar";
import PaginationController from "../components/PaginationController";

export default function BlogListTemplate({ pageContext, location }) {
  const { pageCount, group, index, tags, pathPrefix } = pageContext;
  const previousUrl =
    index - 1 === 1 ? "/blog" : `/blog/${(index - 1).toString()}`;
  const nextUrl = `/blog/${(index + 1).toString()}`;

  return (
    <Grid container>
      <Grid item lg={10} md={9} xs={8}>
        <Container>
          <h1>Read articles from {pageCount} pages </h1>
          <BlogList posts={group} location={location} />
          <PaginationController
            previousUrl={previousUrl}
            nextUrl={nextUrl}
            pageCount={pageCount}
            index={index}
            pathPrefix={pathPrefix}
          />
        </Container>
      </Grid>
      <Grid item lg={2} md={3} xs={4}>
        <SideBar tags={tags} location={location} />
      </Grid>
    </Grid>
  );
}
