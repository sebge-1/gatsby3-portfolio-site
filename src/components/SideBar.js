import React from "react";
import TagList from "./TagList";
import TableOfContents from "./TableOfContents";
import { Container, Typography } from "@mui/material";

const SideBar = (props) => {
  return (
    <Container
      sx={{
        width: "100%",
        position: "sticky",
        top: "64px",
        overflowX: "none",
        overflowY: "scroll",
        maxHeight: "calc(100vh - 64px)",
        marginTop: "1rem",
      }}
    >
      {props.sections && <TableOfContents sections={props.sections} />}
      <Typography
        variant="h4"
        sx={{ fontFamily: "Montserrat", padding: "1rem 1rem 1rem 0" }}
      >
        All Tags
      </Typography>
      <TagList
        tags={props.tags}
        location={props.location}
        setActiveTag={props.setActiveTag}
        activeTag={props.activeTag}
        tag={props.tag}
      />
    </Container>
  );
};

export default SideBar;
