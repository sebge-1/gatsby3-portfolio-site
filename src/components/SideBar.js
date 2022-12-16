import React, { useState } from "react";
import TagList from "./TagList";
import { Container, Divider } from "@mui/material";
import TableOfContents from "./TableOfContents";
import { slugify } from "../utils/slugify";

const SideBar = (props) => {
  const path = props.location.pathname.split("/").at(-2);
  const currentlyActive = props.tags.filter(
    (tag) => slugify(tag.tagName) === slugify(decodeURI(path))
  );
  const [activeTag, setActiveTag] = useState(...currentlyActive);

  return (
    <>
      {props.sections && <TableOfContents sections={props.sections} />}
      <TagList
        tags={props.tags}
        location={props.location}
        setActiveTag={setActiveTag}
        activeTag={activeTag}
        tag={props.tag}
      />
    </>
  );
};

export default SideBar;
