import { Tabs, Tab } from "@mui/material";
import React from "react";
import { Link } from "gatsby";

const PaginationController = ({
  tag,
  pageCount,
  previousUrl,
  nextUrl,
  index,
  pathPrefix,
  skipPagination,
}) => {
  if (pathPrefix.includes("tags")) {
    pathPrefix = `/blog/tags/${tag}`;
  } else {
    pathPrefix = "/blog";
  }
  return (
    <Tabs centered value={false}>
      {index > 1 && (
        <Tab to={previousUrl} label="Previous" component={Link}></Tab>
      )}

      {/* show pagination only for paginated components */}
      {!skipPagination &&
        Array.from({ length: pageCount }, (_, idx) => {
          return (
            <Tab
              key={idx}
              label={idx + 1}
              to={idx === 0 ? pathPrefix : `${pathPrefix}/` + (idx + 1)}
              component={Link}
            ></Tab>
          );
        })}
      {index < pageCount && (
        <Tab to={nextUrl} label="Next" component={Link}></Tab>
      )}
    </Tabs>
  );
};

export default PaginationController;
