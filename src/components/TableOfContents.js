import * as React from "react";
import { slugify } from "../utils/slugify";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
} from "@mui/material";

const TableOfContents = ({ sections, index }) => {
  return (
    <List>
      <h1>Contents</h1>

      {sections &&
        sections.map((section, index) => (
          <ListItem>
            <Link href={`#${slugify(section)}`} key={index}>
              <ListItemText
                className="underline"
                primary={section}
              ></ListItemText>
            </Link>
          </ListItem>
        ))}
    </List>
  );
};

export default TableOfContents;
