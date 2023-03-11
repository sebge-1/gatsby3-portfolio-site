import React, { useState } from "react";
import BlogList from "../components/BlogList";
import { Stack, Grid, Box, Container } from "@mui/material";
import SideBar from "../components/SideBar";
import PaginationController from "../components/PaginationController";
import getActiveTagfromPath from "../utils/getActiveTagfromPath";
import { Divider } from "@mui/material";
import TagList from "../components/TagList";
import PageHeader from "../components/PageHeader";
import { useTheme } from "@mui/material/styles";
import { SEO } from "../components/SEO";
import SearchBarWrapper from "../components/nav/SearchBarWrapper";

export default function CategoryListTemplate({ pageContext, location }) {
  const activeTheme = useTheme();

  const {
    pageCount,
    group,
    index,
    slug: tag,
    tags,
    pathPrefix,
    postData,
  } = pageContext;
  const previousUrl =
    index - 1 === 1
      ? `/blog/tags/${tag}`
      : `/blog/tags/${tag}/${(index - 1).toString()}`;
  const nextUrl = `/blog/tags/${tag}/${(index + 1).toString()}`;

  const currentlyActive = getActiveTagfromPath(location.pathname);
  const [activeTag, setActiveTag] = useState(currentlyActive);

  return (
    <>
      <SEO title={`Blog page with topic: ${tag}`} />

      <Grid container>
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
          <PageHeader
            text={"Blog"}
            bgColor={`${activeTheme.palette.primary.main}`}
          ></PageHeader>
          <Container sx={{ textAlign: "center" }}>
            <Box
              display={{ xs: "inline-block", sm: "inline-block", md: "none" }}
              sx={{ width: "80%" }}
            >
              <TagList
                tags={tags}
                activeTag={activeTag}
                setActiveTag={setActiveTag}
                location={location}
              />
              <SearchBarWrapper postData={postData} />
            </Box>
          </Container>
          <Stack spacing={2}>
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
    </>
  );
}
