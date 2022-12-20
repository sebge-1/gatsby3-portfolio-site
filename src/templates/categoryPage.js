import React, { useState } from "react";
import BlogList from "../components/BlogList";
import { Container, Grid, Paper } from "@mui/material";
import SideBar from "../components/SideBar";
import PaginationController from "../components/PaginationController";
import getActiveTagfromPath from "../utils/getActiveTagfromPath";
import { Divider } from "@mui/material";

export default function CategoryListTemplate({ pageContext, location }) {
  const { pageCount, group, index, slug: tag, tags, pathPrefix } = pageContext;
  const previousUrl =
    index - 1 === 1
      ? `/blog/tags/${tag}`
      : `/blog/tags/${tag}/${(index - 1).toString()}`;
  const nextUrl = `/blog/tags/${tag}/${(index + 1).toString()}`;

  const currentlyActive = getActiveTagfromPath(location.pathname);
  const [activeTag, setActiveTag] = useState(currentlyActive);

  return (
    <Grid container divider={<Divider orientation="vertical" />}>
      <Grid item lg={10} md={9} xs={8}>
        <Container>
          <h1>Read articles from {pageCount} pages </h1>
          <BlogList
            posts={group}
            location={location}
            tags={tags}
            setActiveTag={setActiveTag}
            activeTag={activeTag}
          />
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
      <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
      <Grid item lg={2} md={3} xs={4}>
        <SideBar
          tags={tags}
          tag={tag}
          location={location}
          setActiveTag={setActiveTag}
          activeTag={activeTag}
        />
      </Grid>
    </Grid>
  );
}
