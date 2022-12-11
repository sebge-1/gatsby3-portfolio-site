import { Tabs, Tab } from "@mui/material";
import React from "react";
import { Link } from "gatsby";

const PaginationController = ({
  tag,
  pageCount,
  previousUrl,
  nextUrl,
  index,
}) => (
  <Tabs sx={{ margin: 4 }} value={false}>
    {index > 1 && (
      <Tab to={previousUrl} label="Previous" component={Link}></Tab>
    )}
    {Array.from({ length: pageCount }, (_, idx) => {
      return (
        <Tab
          key={idx}
          label={idx + 1}
          to={
            idx === 0 ? `/blog/tags/${tag}` : `/blog/tags/${tag}/` + (idx + 1)
          }
          component={Link}
        ></Tab>
      );
    })}
    {index < pageCount && (
      <Tab to={nextUrl} label="Next" component={Link}></Tab>
    )}
  </Tabs>
);

export default PaginationController;
