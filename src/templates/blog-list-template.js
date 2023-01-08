import React from "react";
import BlogList from "../components/BlogList";
import { Container, Grid, Divider, Box } from "@mui/material";
import SideBar from "../components/SideBar";
import PaginationController from "../components/PaginationController";
import TagList from "../components/TagList";

export default function BlogListTemplate({ pageContext, location }) {
  const { pageCount, group, index, tags, pathPrefix } = pageContext;
  const previousUrl =
    index - 1 === 1 ? "/blog" : `/blog/${(index - 1).toString()}`;
  const nextUrl = `/blog/${(index + 1).toString()}`;

  return (
    <Grid container>
      <Grid item lg={10} md={9} sm={12} xs={12}>
        <Container>
          <h1>Read articles from {pageCount} pages </h1>
          <Box
            display={{ sm: "block", md: "none" }}
            sx={{ marginBottom: "5rem" }}
          >
            <TagList tags={tags} />
          </Box>
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
      <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
      <Box
        component={Grid}
        item
        lg={2}
        md={3}
        display={{ xs: "none", sm: "none", md: "inline" }}
      >
        <SideBar tags={tags} location={location} />
      </Box>
    </Grid>
  );
}
