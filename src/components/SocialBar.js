import React from "react";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
import { Stack } from "@mui/material";
import { Link, IconButton } from "@mui/material";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

const SocialBar = (props) => {
  return (
    <Stack className="icon-bar" sx={{ paddingLeft: "0.5rem" }}>
      <LinkedinShareButton url={props.url} className="share-button">
        <LinkedinIcon size="48" round={true} className="icon" />
      </LinkedinShareButton>
      <FacebookShareButton url={props.url} className="share-button">
        <FacebookIcon size="48" round={true} className="icon" />
      </FacebookShareButton>
      <TwitterShareButton url={props.url} className="share-button">
        <TwitterIcon size="48" round={true} className="icon" />
      </TwitterShareButton>
    </Stack>
  );
};

export default SocialBar;
