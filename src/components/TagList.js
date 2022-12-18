import * as React from "react";
import { useState } from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import ListItemIcon from "@mui/material/ListItemIcon";
import Chip from "@mui/material/Chip";
import { Link } from "gatsby";

export default function TagList({ activeTag, setActiveTag, tags }) {
  return (
    <>
      <h1>Tags</h1>
      <MenuList>
        {tags.map((tag, index) => (
          <MenuItem key={index} sx={{ paddingLeft: "0" }}>
            <ListItemIcon key={index}>
              <Link to={`/blog/tags/${tag.tagName}`} key={index}>
                <Badge badgeContent={tag.postCount} color="secondary">
                  <Chip
                    key={index}
                    label={tag.tagName}
                    clickable
                    sx={{
                      bgcolor:
                        activeTag && activeTag.tagName === tag.tagName
                          ? "#9E9EFF"
                          : "",
                      "&:hover": {
                        bgcolor:
                          activeTag && activeTag.tagName === tag.tagName
                            ? "#b8b8ff"
                            : "",
                      },
                    }}
                    onClick={() => setActiveTag(tag.tagName)}
                  />
                </Badge>
              </Link>
            </ListItemIcon>
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
}
