import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Chip from "@mui/material/Chip";
import LabelIcon from "@mui/icons-material/Label";
import { Link } from "gatsby";

export default function IconMenu(props) {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        {props.tags.map((tag, index) => (
          <MenuItem>
            <ListItemIcon>
              <Link to={`/blog/tags/${tag}`} key={index}>
                <Chip
                  key={index}
                  label={tag}
                  clickable
                  icon={<LabelIcon />}
                ></Chip>
              </Link>
            </ListItemIcon>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}
