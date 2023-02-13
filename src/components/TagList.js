import * as React from "react";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import { Link } from "gatsby";
import { slugify } from "../utils/slugify";
import { useTheme } from "@mui/material/styles";

export default function TagList({ activeTag, setActiveTag, tags }) {
  const activeTheme = useTheme();

  return (
    <div style={{ marginBottom: "2rem" }}>
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
                    ? `${activeTheme.palette.primary.main}`
                    : "",
                "&:hover": {
                  bgcolor:
                    activeTag && activeTag === slugify(tag.tagName)
                      ? `${activeTheme.palette.primary.light}`
                      : "",
                },
                "& .MuiChip-label": {
                  color:
                    activeTag && activeTag === slugify(tag.tagName)
                      ? `white`
                      : "",
                },
                m: "2.5px",
              }}
              onClick={() => setActiveTag && setActiveTag(tag.tagName)}
            />
          </Link>
        </Badge>
      ))}
    </div>
  );
}
