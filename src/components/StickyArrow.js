import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const StickyArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky-arrow shake-vertical" onClick={scrollToTop}>
      <ArrowCircleUpIcon fontSize="large" color="primary" />
    </div>
  );
};

export default StickyArrow;
