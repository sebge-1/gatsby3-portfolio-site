import * as React from "react";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import { Link } from "gatsby";
import { slugify } from "../utils/slugify";
import { Box } from "@mui/material";

export default function TagList({ activeTag, setActiveTag, tags }) {
  return (
    <>
      <h1>Tags</h1>
      <Box>
        {tags.map((tag, index) => (
          <Badge badgeContent={tag.postCount} color="secondary" key={index}>
            <Link key={index} to={`/blog/tags/${slugify(tag.tagName)}`}>
              <Chip
                key={index}
                label={tag.tagName}
                clickable
                sx={{
                  bgcolor:
                    activeTag && activeTag === slugify(tag.tagName)
                      ? "#9E9EFF"
                      : "",
                  "&:hover": {
                    bgcolor:
                      activeTag && activeTag === slugify(tag.tagName)
                        ? "#b8b8ff"
                        : "",
                  },
                  m: "2.5px",
                  p: "5px",
                }}
                onClick={() => setActiveTag && setActiveTag(tag.tagName)}
              />
            </Link>
          </Badge>
        ))}
      </Box>
    </>
  );
}
