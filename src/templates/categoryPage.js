import React from "react";
import BlogList from "../components/BlogList";
import { Container, Grid } from "@mui/material";
import SideBar from "../components/SideBar";
import PaginationController from "../components/PaginationController";
import { slugify } from "../utils/slugify";

export default function CategoryListTemplate({ pageContext, location }) {
  const { pageCount, group, index, tag, tags, pathPrefix } = pageContext;
  const previousUrl =
    index - 1 === 1
      ? `/blog/tags/${tag}`
      : `/blog/tags/${tag}/${(index - 1).toString()}`;
  const nextUrl = `/blog/tags/${tag}/${(index + 1).toString()}`;

  return (
    <Grid container>
      <Grid item lg={10} md={9} xs={8}>
        <Container>
          <h1>Read articles from {pageCount} pages </h1>
          <BlogList posts={group} location={location} tags={tags} />
          <PaginationController
            tag={tag}
            previousUrl={previousUrl}
            nextUrl={nextUrl}
            pageCount={pageCount}
            pathPrefix={pathPrefix}
            index={index}
          />
        </Container>
      </Grid>
      <Grid item lg={2} md={3} xs={4}>
        <SideBar tags={tags} tag={tag} location={location} />
      </Grid>
    </Grid>
  );
}
