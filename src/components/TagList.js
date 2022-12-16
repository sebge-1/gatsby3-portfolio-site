import * as React from "react";
import { useState } from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import ListItemIcon from "@mui/material/ListItemIcon";
import Chip from "@mui/material/Chip";
import { Link } from "gatsby";
import { slugify } from "../utils/slugify";

export default function TagList(props) {
  return (
    <>
      <h1>Tags</h1>
      <MenuList>
        {props.tags.map((tag, index) => (
          <MenuItem key={index} sx={{ paddingLeft: "0" }}>
            <ListItemIcon key={index}>
              <Link to={`/blog/tags/${tag.tagName}`} key={index}>
                <Badge badgeContent={tag.postCount} color="secondary">
                  <Chip
                    key={index}
                    label={tag.tagName}
                    clickable
                    className={
                      props.activeTag && props.activeTag.tagName === tag.tagName
                        ? "activeTag"
                        : ""
                    }
                    onClick={() => props.setActiveTag(tag.tagName)}
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
