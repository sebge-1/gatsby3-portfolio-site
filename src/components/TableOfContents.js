import * as React from "react";
import { slugify } from "../utils/slugify";

const TableOfContents = ({ sections, index }) => {
  return (
    <>
      <h1>Table of Contents</h1>
      {sections.map((section, index) => (
        <a href={`#${slugify(section)}`} key={index}>
          <h3>{section}</h3>
        </a>
      ))}
    </>
  );
};

export default TableOfContents;
