import React from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Banner = ({ text, bgColor }) => {
  const activeTheme = useTheme();

  return (
    <Box
      className="responsive-diagonal"
      sx={{
        marginTop: "0.725rem",
        padding: "2rem",
        width: "100%",
        height: "35vh",

        background: `linear-gradient(to right bottom, ${bgColor} 50.3%, ${activeTheme.palette.background.default} 50% )`,
      }}
    >
      <Typography
        variant="h2"
        color={"white"}
        sx={{ fontFamily: "Montserrat" }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Banner;
