import React from "react";
import { Typography } from "@mui/material";

const PageHeader = ({ text, bgColor }) => {
  return (
    <Typography
      sx={{
        fontSize: {
          lg: 110,
          md: 85,
          sm: 70,
        },
        marginTop: "6rem",
        marginBottom: "6rem",
        textDecoration: "underline",
        textDecorationStyle: "double",
        textDecorationColor: `${bgColor}`,
      }}
      fontFamily="Montserrat"
      variant="h1"
    >
      {text}
    </Typography>
  );
};

export default PageHeader;
