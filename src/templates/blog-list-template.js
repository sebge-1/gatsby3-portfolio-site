import React from "react";
import { Link } from "gatsby";
import BlogList from "../components/BlogList";
import { Container, Grid, Tab, Tabs } from "@mui/material";
import SideBar from "../components/SideBar";

export default function BlogListTemplate({ pageContext }) {
  const { pageCount, group, index, tags } = pageContext;
  const previousUrl =
    index - 1 === 1 ? "/blog" : `/blog/${(index - 1).toString()}`;
  const nextUrl = `/blog/${(index + 1).toString()}`;

  return (
    <Grid container>
      <Grid item lg={10} md={9} xs={8}>
        <Container>
          <h1>Read articles from {pageCount} pages </h1>
          <BlogList posts={group} />
          <Tabs sx={{ margin: 4 }} value={false}>
            {index > 1 && (
              <Tab to={previousUrl} label="Previous" component={Link}></Tab>
            )}
            {Array.from({ length: pageCount }, (_, idx) => {
              return (
                <Tab
                  key={idx}
                  label={idx + 1}
                  to={idx === 0 ? "/blog" : "/blog/" + (idx + 1)}
                  component={Link}
                ></Tab>
              );
            })}
            {index < pageCount && (
              <Tab to={nextUrl} label="Next" component={Link}></Tab>
            )}
          </Tabs>
        </Container>
      </Grid>
      <Grid item lg={2} md={3} xs={4}>
        <SideBar tags={tags} />
      </Grid>
    </Grid>
  );
}
