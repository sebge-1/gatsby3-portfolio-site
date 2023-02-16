import { color } from "@mui/system";
import React, { useEffect } from "react";

const colors = [
  "#38295C",
  "#f48fb1",
  "#5C6BC0",
  "#3F51B5",
  "#90caf9",
  "#BBDEFB",
  "#f48fb1",
  "#1C4D5C",
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const getRandomShapeType = () => {
  const shapeTypes = ["triangle", "cross", "square", "circle"];
  return shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
};

const getShapeStyle = (shapeStyle) => {
  const size = Math.floor(Math.random() * 20) + 10;
  let colorType;
  let color;
  if (shapeStyle !== "triangle") {
    colorType = "backgroundColor";
    color = getRandomColor();
  } else {
    colorType = "borderColor";
    color = `transparent transparent ${getRandomColor()} transparent`;
  }
  const styles = {
    width: `${size}px`,
    height: `${size}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  };
  styles[colorType] = color;
  return styles;
};

const BackgroundAnimation = () => {
  useEffect(() => {
    const container = document.querySelector(".background-animation");

    for (let i = 0; i < 40; i++) {
      const shapeType = getRandomShapeType();
      const shapeStyle = getShapeStyle(shapeType);
      const shape = document.createElement("div");
      shape.classList.add("shape", shapeType);
      Object.assign(shape.style, shapeStyle);
      container.appendChild(shape);
    }
  }, []);

  return <div className="background-animation" />;
};

export default BackgroundAnimation;
