import * as React from "react";
import { slugify } from "../utils/slugify";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
  Typography,
  Paper,
} from "@mui/material";

const TableOfContents = ({ sections }) => {
  return (
    <Paper
      sx={{ margin: "2rem 0.5rem", padding: "1rem" }}
      elevation={4}
      outlined={true}
    >
      <List>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat",
            fontSize: {
              lg: 30,
              md: 20,
            },
          }}
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
    </Paper>
  );
};

export default TableOfContents;
