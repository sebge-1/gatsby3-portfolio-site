import React from "react";
import TagList from "./TagList";
import { Box } from "@mui/material";
import TableOfContents from "./TableOfContents";

const SideBar = (props) => (
  <Box sx={{ position: "fixed" }}>
    {props.sections && <TableOfContents sections={props.sections} />}
    <TagList tags={props.tags} />
  </Box>
);

export default SideBar;
