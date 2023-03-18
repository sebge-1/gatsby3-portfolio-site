import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { DiscussionEmbed } from "disqus-react";

const DisqusComp = ({ slug, title }) => {
  const activeTheme = useTheme();

  let disqusConfig = {
    url: `https://www.sebastiangertz.com/blog/${slug}`,
    identifier: slug,
    title: title,
  };

  return (
    <DiscussionEmbed
      shortname="sebastiangertz-com"
      config={{ disqusConfig }}
      theme={activeTheme}
    />
  );
};

export default DisqusComp;
