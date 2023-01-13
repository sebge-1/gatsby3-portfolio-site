import React from "react";
import Typography from "@mui/material/Typography";
import GatsyLogo from "../assets/icon-72x72.png";
import Box from "@mui/material/Box";
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
        paddingTop: "30px",
        paddingBottom: "50px",
      }}
    >
      <Typography variant="p">Built with</Typography>
      <StaticImage
        src="../assets/icon-72x72.png"
        alt="Gatsby Logo"
        style={{ marginLeft: "0.5rem", width: "30px", height: "30px" }}
      />
    </Box>
  </div>
);

export default Footer;
