import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import ListItemIcon from "@mui/material/ListItemIcon";
import Chip from "@mui/material/Chip";
import LabelIcon from "@mui/icons-material/Label";
import { Link } from "gatsby";

export default function IconMenu(props) {
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
                    icon={<LabelIcon />}
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
