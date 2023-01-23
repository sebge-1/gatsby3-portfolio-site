import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import SocialLinks from "../components/SocialLinks";
import { StaticImage } from "gatsby-plugin-image";

const Footer = (props) => (
  <div style={{ maxWidth: 700, margin: "2rem auto", textAlign: "center" }}>
    <SocialLinks spacing={6} size="large" />
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        paddingTop: "2rem",
        paddingBottom: "1rem",
      }}
    >
      <Typography variant="p">Built with</Typography>
      <StaticImage
        src="../assets/icon-72x72.png"
        alt="Gatsby Logo"
        style={{ marginLeft: "0.5rem", width: "30px", height: "30px" }}
      />
    </Box>
    <Box sx={{ paddingBottom: "0.75rem" }}>
      <Link href="https://github.com/sebge-1/gatsby3-portfolio-site">
        Github Repository
      </Link>
    </Box>
  </div>
);

export default Footer;
