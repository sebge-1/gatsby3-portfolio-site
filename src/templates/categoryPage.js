import React, { useState } from "react";
import BlogList from "../components/BlogList";
import { Stack, Grid, Box } from "@mui/material";
import SideBar from "../components/SideBar";
import PaginationController from "../components/PaginationController";
import getActiveTagfromPath from "../utils/getActiveTagfromPath";
import { Divider } from "@mui/material";
import TagList from "../components/TagList";
import Banner from "../components/Banner";

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
      <Grid
        item
        lg={10}
        md={9}
        sm={12}
        xs={12}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Banner></Banner>

        <h1>Read articles from {pageCount} pages </h1>
        <Stack spacing={2}>
          <Box
            display={{ xs: "block", sm: "block", md: "none" }}
            sx={{ marginBottom: "5rem" }}
          >
            <TagList
              tags={tags}
              activeTag={activeTag}
              setActiveTag={setActiveTag}
              location={location}
            />
          </Box>
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
        </Stack>
      </Grid>
      <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
      <Box
        component={Grid}
        item
        lg={2}
        md={3}
        display={{ xs: "none", sm: "none", md: "inline" }}
      >
        <SideBar
          tags={tags}
          tag={tag}
          location={location}
          setActiveTag={setActiveTag}
          activeTag={activeTag}
        />
      </Box>
    </Grid>
  );
}
