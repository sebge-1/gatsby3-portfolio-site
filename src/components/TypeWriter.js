import React, { useState, useEffect } from "react";

const Typewriter = ({ strings, loop }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState("");
  const [typing, setTyping] = useState(true);
  const [delay, setDelay] = useState(500);
  const [deleteDelay, setDeleteDelay] = useState(150); // New state variable for delete delay

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        if (typing) {
          if (currentString.length < strings[currentStringIndex].length) {
            setCurrentString(
              (prev) => prev + strings[currentStringIndex][currentString.length]
            );
          } else {
            setDelay(0);
            setTyping(false);
          }
        } else {
          if (deleteDelay > 0) {
            setDeleteDelay((prev) => prev - 100); // Decrease the delete delay
          } else if (currentString.length > 0) {
            setCurrentString((prev) => prev.slice(0, -1));
          } else {
            setCurrentStringIndex((prev) =>
              loop ? (prev + 1) % strings.length : prev
            );
            setTyping(true);
            setDelay(500);
            setDeleteDelay(350); // Reset the delete delay
          }
        }
      },
      typing ? 100 : deleteDelay * 0.75
    );

    return () => clearInterval(intervalId);
  }, [
    typing,
    currentString,
    currentStringIndex,
    strings,
    loop,
    delay,
    deleteDelay,
  ]);

  const invisibleText = strings.reduce((a, b) => (a.length > b.length ? a : b));
  const invisibleTextLength = invisibleText.length;

  return (
    <span className="typewriter-container">
      <span
        className="typewriter"
        style={{
          display: "inline-block",
          minWidth: `${invisibleTextLength}ch`,
          position: "relative",
        }}
      >
        <span className="typewriter-invisible" style={{ visibility: "hidden" }}>
          {invisibleText}
        </span>
        <span
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            fontFamily: "merriweather",
          }}
        >
          {currentString}
        </span>
      </span>
    </span>
  );
};

export default Typewriter;
