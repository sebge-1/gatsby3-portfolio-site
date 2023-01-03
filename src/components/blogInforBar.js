import React from "react";
import { useEffect, useState } from "react";
import { getReadTime } from "../utils/readTime";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Box, Grid } from "@mui/material";
import CountUp from "react-countup";

const InfoBar = (props) => {
  const [count, setCount] = useState(0);
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    const text = document.body.innerText;
    const words = text.split(" ");
    const readTime = getReadTime(words);
    setCount(words.length);
    setReadTime(readTime);
  }, []);

  return (
    <Grid
      container
      spacing={4}
      sx={{
        marginBottom: "1rem",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CalculateIcon sx={{ marginRight: "0.25rem" }}></CalculateIcon>
        <CountUp start={0} end={count} duration={3.25}></CountUp>&nbsp;words
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScheduleIcon sx={{ marginRight: "0.25rem" }}></ScheduleIcon>
        {readTime} reading time
      </Grid>
    </Grid>
  );
};
export default InfoBar;
