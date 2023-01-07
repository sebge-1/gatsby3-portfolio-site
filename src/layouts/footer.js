import React from "react";
import Typography from "@mui/material/Typography";
import GatsyLogo from "../assets/icon-72x72.png";
import Box from "@mui/material/Box";
import SocialLinks from "../components/SocialLinks";

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
      <img
        src={GatsyLogo}
        alt="Gatsby Logo"
        style={{ height: "30px", paddingLeft: "10px" }}
      />
    </Box>
  </div>
);

export default Footer;
