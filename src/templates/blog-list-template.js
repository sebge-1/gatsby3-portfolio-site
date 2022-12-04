import React from "react";
import { Link } from "gatsby";
import BlogList from "../components/BlogList";
import { Container, Tab, Tabs } from "@mui/material";

export default function BlogListTemplate({ pageContext }) {
  const { pageCount, group, index } = pageContext;
  const previousUrl =
    index - 1 == 1 ? "/blog" : `/blog/${(index - 1).toString()}`;
  const nextUrl = `/blog/${(index + 1).toString()}`;

  return (
    <Container>
      <h1>Read articles from {pageCount} pages </h1>;
      <BlogList posts={group} />
      <Tabs sx={{ margin: 4 }}>
        {index > 1 && (
          <Tab to={previousUrl} label="Previous" component={Link}></Tab>
        )}
        {Array.from({ length: pageCount }, (_, idx) => {
          // if (index === idx + 1) {

          // }
          return (
            <Tab
              key={index}
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
  );
}
