import * as React from "react";
import { slugify } from "../utils/slugify";

const TableOfContents = ({ sections, index }) => {
  return (
    <>
      <h2>Contents</h2>
      {sections &&
        sections.map((section, index) => (
          <a href={`#${slugify(section)}`} key={index}>
            <h4>{section}</h4>
          </a>
        ))}
    </>
  );
};

export default TableOfContents;
