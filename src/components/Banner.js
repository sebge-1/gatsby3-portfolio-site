import React from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const style = {
  width: "100%",
  height: "25vh",
};

const darkStyle = {
  background: "linear-gradient(to right bottom, #90caf9 50.3%, #212121 50% )",
};

const lightStyle = {
  background: "linear-gradient(to right bottom, #3F51B5 50.3%, #FBFBFB 50% )",
};

const Banner = () => {
  let activeTheme = useTheme();
  console.log(activeTheme);
  let bannerStyle =
    activeTheme.palette.mode === "dark" ? darkStyle : lightStyle;
  return (
    <Box
      className="responsive-diagonal"
      sx={{
        marginTop: "0.8rem",
        padding: "2rem",
        ...style,
        ...bannerStyle,
      }}
    >
      <Typography variant="h2">Blog</Typography>
    </Box>
  );
};

export default Banner;
