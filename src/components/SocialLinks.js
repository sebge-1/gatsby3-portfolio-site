import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import * as React from "react";
import { Link, IconButton } from "@mui/material";
import { Grid } from "@mui/material";

const SocialLinks = () => {
  return (
    <Grid container justify={"center"} spacing={6} sx={{ marginTop: "20px" }}>
      <Grid item>
        <Link
          component={IconButton}
          href="https://www.linkedin.com/in/sebastian-gertz"
        >
          <LinkedInIcon fontSize="large" />
        </Link>
      </Grid>
      <Grid item>
        <Link component={IconButton} href="https://github.com/sebge-1">
          <GitHubIcon fontSize="large" />
        </Link>
      </Grid>
      <Grid item>
        <Link component={IconButton} href="mailto: me@email.com">
          <EmailIcon fontSize="large" />
        </Link>
      </Grid>
    </Grid>
  );
};

export default SocialLinks;
