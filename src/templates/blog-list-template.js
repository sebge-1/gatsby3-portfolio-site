import React from "react";
import BlogList from "../components/BlogList";
import { Stack, Grid, Divider, Box, Container } from "@mui/material";
import SideBar from "../components/SideBar";
import PaginationController from "../components/PaginationController";
import TagList from "../components/TagList";
import PageHeader from "../components/PageHeader";
import { useTheme } from "@mui/material/styles";
import { SEO } from "../components/SEO";
import SearchBarWrapper from "../components/nav/SearchBarWrapper";

export default function BlogListTemplate({ pageContext, location }) {
  const activeTheme = useTheme();

  const { pageCount, group, index, tags, pathPrefix, postData } = pageContext;
  const previousUrl =
    index - 1 === 1 ? "/blog" : `/blog/${(index - 1).toString()}`;
  const nextUrl = `/blog/${(index + 1).toString()}`;

  return (
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
        <Container
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            display={{ sm: "inline-block", md: "none" }}
            sx={{ width: "80%" }}
          >
            <TagList tags={tags} />
            <SearchBarWrapper postData={postData} />
          </Box>
        </Container>
        <Stack spacing={2}>
          <BlogList posts={group} location={location} />
          <PaginationController
            previousUrl={previousUrl}
            nextUrl={nextUrl}
            pageCount={pageCount}
            index={index}
            pathPrefix={pathPrefix}
          />
        </Stack>
      </Grid>
      <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
      <Box
        component={Grid}
        item
        lg={2}
        md={3}
        sm={0}
        xs={0}
        display={{ xs: "none", sm: "none", md: "inline" }}
      >
        <SideBar tags={tags} location={location} />
      </Box>
    </Grid>
  );
}

export const Head = () => <SEO title="Blog" />;
