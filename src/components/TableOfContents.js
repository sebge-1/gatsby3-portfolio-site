import * as React from "react";
import { slugify } from "../utils/slugify";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
  Typography,
} from "@mui/material";

const TableOfContents = ({ sections }) => {
  return (
    <List>
      <Typography
        variant="h4"
        sx={{ fontFamily: "Montserrat", padding: "1rem 1rem 1rem 0" }}
      >
        Contents
      </Typography>
      {sections &&
        sections.map((section, index) => (
          <ListItem key={index}>
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
