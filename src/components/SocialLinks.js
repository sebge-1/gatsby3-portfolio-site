import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import * as React from "react";
import { Link, IconButton } from "@mui/material";
import { Grid } from "@mui/material";

const SocialLinks = ({ spacing, size }) => {
  return (
    <Grid container spacing={spacing}>
      <Grid item>
        <Link
          component={IconButton}
          href="https://www.linkedin.com/in/sebastian-gertz"
        >
          <LinkedInIcon fontSize={size} />
        </Link>
      </Grid>
      <Grid item>
        <Link component={IconButton} href="https://github.com/sebge-1">
          <GitHubIcon fontSize={size} />
        </Link>
      </Grid>
      <Grid item>
        <Link component={IconButton} href="mailto: sebgertz.tvv31@slmail.me">
          <EmailIcon fontSize={size} />
        </Link>
      </Grid>
    </Grid>
  );
};

export default SocialLinks;
