import React from "react";
import TagList from "./TagList";
import { Box } from "@mui/material";

const SideBar = (props) => (
  <Box sx={{ position: "fixed" }}>
    <h1>tags</h1>
    <TagList tags={props.tags} />
  </Box>
);

export default SideBar;
