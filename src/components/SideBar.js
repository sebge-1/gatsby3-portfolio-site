import React, { useState } from "react";
import TagList from "./TagList";
import { Container, Divider } from "@mui/material";
import TableOfContents from "./TableOfContents";
import { slugify } from "../utils/slugify";

const SideBar = (props) => {
  return (
    <>
      {props.sections && <TableOfContents sections={props.sections} />}
      <TagList
        tags={props.tags}
        location={props.location}
        setActiveTag={props.setActiveTag}
        activeTag={props.activeTag}
        tag={props.tag}
      />
    </>
  );
};

export default SideBar;
