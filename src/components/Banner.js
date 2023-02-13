import React from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Banner = () => {
  const activeTheme = useTheme();

  return (
    <Box
      className="responsive-diagonal"
      sx={{
        marginTop: "0.8rem",
        padding: "2rem",
        width: "100%",
        height: "35vh",
        background: `linear-gradient(to right bottom, ${activeTheme.palette.primary.main} 50.3%, ${activeTheme.palette.background.default} 50% )`,
      }}
    >
      <Typography variant="h2" color={"white"}>
        Blog
      </Typography>
    </Box>
  );
};

export default Banner;
