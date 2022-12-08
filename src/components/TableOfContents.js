import * as React from "react";
import Paper from "@mui/material/Paper";
import { slugify } from "../utils/slugify";

const TableOfContents = (props) => {
  return (
    <Paper>
      <h1>Table of Contents</h1>
      {props.sections.map((section) => (
        <a href={`#${slugify(section)}`}>
          <h3>{section}</h3>
        </a>
      ))}
    </Paper>
  );
};

export default TableOfContents;
