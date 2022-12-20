import React from "react";
import TagList from "./TagList";
import TableOfContents from "./TableOfContents";

const SideBar = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        overflowY: "scroll",
        overflowX: "none",
        height: "80%",
        marginLeft: "10px",
      }}
    >
      {props.sections && <TableOfContents sections={props.sections} />}
      <TagList
        tags={props.tags}
        location={props.location}
        setActiveTag={props.setActiveTag}
        activeTag={props.activeTag}
        tag={props.tag}
      />
    </div>
  );
};

export default SideBar;
